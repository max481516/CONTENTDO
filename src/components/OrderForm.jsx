import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { buttonStyles, QUERIES } from "../constants";
import AttachFileIcon from "../assets/AttachFileIcon.svg?react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import { storage } from "../firebase/firebaseConfig"; // Make sure Firebase is configured
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function OrderForm() {
  const [state, handleSubmit] = useForm("mqaezked");
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadedFileURLs, setUploadedFileURLs] = useState([]);

  const MAX_FILE_SIZE = 10 * 1024 * 1024 * 1024; // 10GB in bytes

  const handleFileChange = async (event) => {
    const selectedFiles = Array.from(event.target.files);

    // Filter out files exceeding the size limit
    const validFiles = selectedFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        alert(
          `${file.name} exceeds the maximum size of 10GB and will be skipped.`
        );
        return false;
      }
      return true;
    });

    setFiles(validFiles);

    // Upload files to Firebase
    const fileUploadPromises = validFiles.map((file) =>
      uploadFileToFirebase(file)
    );
    const fileURLs = await Promise.all(fileUploadPromises);

    // Store the uploaded file URLs
    setUploadedFileURLs(fileURLs);
  };

  const uploadFileToFirebase = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `uploads/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress((prev) => ({
            ...prev,
            [file.name]: progress,
          }));
        },
        (error) => {
          console.error("Error uploading file:", error);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Prepare form data for Formspree submission
    const formData = new FormData(event.target);

    // Append file URLs to form data
    uploadedFileURLs.forEach((url, index) => {
      formData.append(`file_${index + 1}`, url);
    });

    // Submit the form to Formspree
    handleSubmit(event); // This sends the form data to Formspree
  };

  if (state.succeeded) {
    return <SuccessMessage />;
  }
  if (state.errors) {
    return <ErrorMessage />;
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Title>Заказать проект</Title>

      <Label htmlFor="name"></Label>
      <Input id="name" type="text" name="name" placeholder="Имя" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Label htmlFor="email"></Label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Label htmlFor="phone"></Label>
      <Input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Телефон"
        required
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <Label htmlFor="description"></Label>
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

      <FileInputContainer>
        <Label htmlFor="file">
          <StyledAttachFileIcon /> Прикрепить файл
        </Label>
        <HiddenFileInput
          id="file"
          type="file"
          multiple
          onChange={handleFileChange}
        />
      </FileInputContainer>

      <FileList>
        {files.map((file) => (
          <FileItem key={file.name}>
            <FileName>{file.name}</FileName>
            <ProgressText>{uploadProgress[file.name] || 0}%</ProgressText>
          </FileItem>
        ))}
      </FileList>

      <SubmitButton
        type="submit"
        disabled={
          state.submitting ||
          files.some((file) => uploadProgress[file.name] < 100)
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
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: #222;
  color: white;
  margin-bottom: 0.5rem;

  &:focus {
    background-color: #333;
  }

  @media ${QUERIES.mobile} {
    padding: 0.5rem;
    font-size: 1rem;
    margin-bottom: 0;
  }

  @media (max-width: 358px) {
    padding: 0.2rem;
    font-size: 0.7rem;
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
  margin-bottom: 1.5rem;

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
  gap: 1rem;
  background: #333;
  padding: 0.5rem;
  border-radius: 4px;
`;

const FileName = styled.span`
  color: white;
  font-size: 0.9rem;
  flex-grow: 1;
`;

const ProgressText = styled.span`
  color: white;
  font-size: 0.8rem;
`;

const SubmitButton = styled.button`
  ${buttonStyles}
  border-radius: 5px;

  @media ${QUERIES.mobile} {
    font-size: 1rem;
    padding: 0.7rem 1rem;
  }

  @media (max-width: 358px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;
  }
`;
