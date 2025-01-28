import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { useRef, useState } from "react";
import { buttonStyles, inputStyles, QUERIES } from "../constants";
import { IoCloseOutline } from "react-icons/io5";
import AttachFileIcon from "../assets/AttachFileIcon.svg?react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import { storage } from "../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "../firebase/firebaseConfig";
import DOMPurify from "dompurify";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ReCAPTCHA from "react-google-recaptcha";

const MAX_FILE_SIZE = 10 * 1024 * 1024 * 1024;

export default function OrderForm() {
  // Formspree
  const [state, handleSubmit] = useForm("mqaezked");

  // Local state
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadedFileURLs, setUploadedFileURLs] = useState([]);
  const [phone, setPhone] = useState("");

  // Sanitization Function
  const sanitizeInput = (input) => DOMPurify.sanitize(input);

  //firebase functions initialization
  const functions = getFunctions(app, "europe-central2");
  const validateFile = httpsCallable(functions, "validateFile");

  // RecaptchaRef
  const recaptchaRef = useRef();

  // If formspree succeeded or errors
  if (state.succeeded) {
    return <SuccessMessage />;
  }
  if (state.errors) {
    return <ErrorMessage />;
  }

  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Filter out invalid files
    const validatedFiles = [];
    for (const file of selectedFiles) {
      try {
        // Call the validateFile Firebase function
        console.log("Sending fileName to validateFile:", file.name);
        await validateFile({ fileName: file.name });
        validatedFiles.push(file);
      } catch (error) {
        console.error(`${file.name} is invalid:`, error.message);
        alert(`File ${file.name} is not allowed: ${error.message}`);
      }
    }

    // Filter out files exceeding the size limit
    const validFiles = validatedFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`File ${file.name} is bigger than 10GB and will be skipped.`);
        return false;
      }
      return true;
    });

    // Merge new valid files with the existing ones, avoiding duplicates
    setFiles((prevFiles) => {
      const existingFileNames = prevFiles.map((file) => file.name);
      const newFiles = validFiles.filter(
        (file) => !existingFileNames.includes(file.name)
      );
      return [...prevFiles, ...newFiles];
    });

    // Kick off Firebase upload for each new file
    validFiles.forEach(uploadFileToFirebase);
  };

  // Upload logic
  const uploadFileToFirebase = (file) => {
    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress((prev) => ({ ...prev, [file.name]: progress }));
      },
      (error) => {
        console.error("Upload error:", error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        // Add the final URL to array, so we can create hidden inputs later
        setUploadedFileURLs((prev) => [...prev, downloadURL]);
      }
    );
  };

  //Delete accidental file from the list
  const handleDeleteFile = (fileName) => {
    // Remove file from `files` state
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
    // Remove progress tracking for the file
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });

    setUploadedFileURLs((prev) =>
      prev.filter((url) => !url.includes(fileName))
    );
  };

  return (
    <Form
      onSubmit={(e) => {
        // Preprocess form data before sending
        e.preventDefault();
        e.target.name.value = sanitizeInput(e.target.name.value);
        e.target.email.value = sanitizeInput(e.target.email.value);
        e.target.description.value = sanitizeInput(e.target.description.value);

        console.log("Sanitized Form Data:", {
          name: e.target.name.value,
          email: e.target.email.value,
          phone,
          description: e.target.description.value,
        });

        handleSubmit(e); // Send sanitized data to Formspree
      }}
    >
      <Title>Заказать проект</Title>

      <Label htmlFor="name" />
      <Input id="name" type="text" name="name" placeholder="Имя" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Label htmlFor="email" />
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Label htmlFor="phone" />
      <StyledPhoneInput
        placeholder="Телефон"
        defaultCountry="RU"
        value={phone}
        onChange={setPhone}
        required
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <Label htmlFor="description" />
      <TextArea
        id="description"
        name="description"
        placeholder="Описание проекта"
      />
      <ValidationError
        prefix="Description"
        field="description"
        errors={state.errors}
      />

      {/* File attachment UI */}
      <FileInputContainer>
        <Label htmlFor="fileInput">
          <StyledAttachFileIcon />
          Прикрепить файл
        </Label>
        <HiddenFileInput
          id="fileInput"
          type="file"
          multiple
          onChange={handleFileChange}
        />
      </FileInputContainer>

      {/* List of uploading files & progress */}
      <FileList>
        {files.map((file) => (
          <FileItem key={file.name}>
            <FileName>{file.name}</FileName>
            <ProgressText>{uploadProgress[file.name] || 0}%</ProgressText>
            <RemoveButton onClick={() => handleDeleteFile(file.name)}>
              <IoCloseOutline />
            </RemoveButton>
          </FileItem>
        ))}
      </FileList>

      {/* Hidden inputs for each uploaded file URL so Formspree sees them */}
      {uploadedFileURLs.map((url, i) => (
        <HiddenInput
          key={i}
          type="hidden"
          name={`fileUrl_${i + 1}`}
          value={url}
        />
      ))}

      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6Lff0sUqAAAAAFbQrFSiUxQEWIbNbGywY9gzUWM9"
        onChange={(token) => console.log("reCAPTCHA token:", token)}
      />
      <SubmitButton
        type="submit"
        disabled={
          state.submitting ||
          files.some((file) => (uploadProgress[file.name] || 0) < 100)
        }
      >
        ОТПРАВИТЬ
      </SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 358px) {
    gap: 0.8rem;
  }
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media ${QUERIES.mobile} {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 358px) {
    font-size: 1rem;
    margin-bottom: 0rem;
  }
`;

const Label = styled.label`
  display: none;
  margin: 0;
`;

const Input = styled.input`
  ${inputStyles}
`;

const StyledPhoneInput = styled(PhoneInput)`
  ${inputStyles}
  display: inline-flex;
  align-items: baseline;

  /* This targets the country <select> element */
  .PhoneInputCountry {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;

    /* remove default border, background, etc., if needed: */
  }

  .PhoneInputCountrySelect {
    &:focus {
      border: none;
      background: transparent;
      outline: none;
    }
  }

  /* The flag icon is an <img> inside .PhoneInputCountryIcon */
  .PhoneInputCountryIcon {
    width: 1.2em;
    height: auto;
  }

  /* The actual phone number <input> */
  .PhoneInputInput {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  margin-bottom: -0.5rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: #222;
  color: white;
  min-height: 100px;
  resize: vertical;

  &:focus {
    background-color: #333;
  }

  @media ${QUERIES.mobile} {
    resize: none;
    padding: 0.5rem;
    font-size: 1rem;
    margin-bottom: 0;
  }

  @media (max-width: 358px) {
    padding: 0.2rem;
    font-size: 0.7rem;
  }
`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: white;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: var(--color-body-secondary);
    text-decoration: underline;

    &:hover {
      color: var(--color-details-primary);
    }
  }

  @media ${QUERIES.mobile} {
    margin-bottom: 0;
  }

  @media (max-width: 358px) {
    padding: 0.2rem;
    font-size: 0.7rem;
    margin-top: -0.5rem;
  }
`;

const StyledAttachFileIcon = styled(AttachFileIcon)`
  width: 1rem;
  height: 1rem;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FileItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  background: #333;
  padding: 0.5rem;
  border-radius: 4px;
`;

const FileName = styled.span`
  color: white;
  font-size: 0.9rem;
  flex-grow: 1;

  @media ${QUERIES.mobile} {
    font-size: 0.6rem;
  }
`;

const ProgressText = styled.span`
  color: white;
  font-size: 0.8rem;

  @media ${QUERIES.mobile} {
    font-size: 0.6rem;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const RemoveButton = styled.button`
  cursor: pointer;
`;

const SubmitButton = styled.button`
  ${buttonStyles}
  border-radius: 5px;
  margin-top: -3rem;

  @media ${QUERIES.mobile} {
    font-size: 1rem;
    padding: 0.7rem 1rem;
  }

  @media (max-width: 358px) {
    font-size: 0.7rem;
    padding: 0.4rem 0.7rem;
    margin-top: -1.2rem;
  }
`;
