"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { buttonStyles, inputStyles, QUERIES } from "@/constants";
import { IoCloseOutline } from "react-icons/io5";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import { storage } from "@/lib/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "@/lib/firebase";
import DOMPurify from "dompurify";
import PhoneInput from "react-phone-number-input";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import AttachFileIcon from "@/assets/AttachFileIcon.svg";

const MAX_FILE_SIZE = 10 * 1024 * 1024 * 1024;

export default function OrderForm() {
  // TypeScript: Type all state variables
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [uploadedFileURLs, setUploadedFileURLs] = useState<string[]>([]);
  const [phone, setPhone] = useState<string>("");

  // Sanitization Function
  const sanitizeInput = (input: string): string => DOMPurify.sanitize(input);

  //firebase functions initialization
  const functions = getFunctions(app, "europe-central2");
  const validateFile = httpsCallable(functions, "validateFile");

  const searchParams = useSearchParams();
  const router = useRouter();
  const showSuccess = searchParams.get("success") === "order";
  const showError = searchParams.get("error") === "order";

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    // Filter out invalid files
    const validatedFiles: File[] = [];
    for (const file of selectedFiles) {
      try {
        // Call the validateFile Firebase function
        console.log("Sending fileName to validateFile:", file.name);
        await validateFile({ fileName: file.name });
        validatedFiles.push(file);
      } catch (error: any) {
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
  const uploadFileToFirebase = (file: File) => {
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
  const handleDeleteFile = (fileName: string) => {
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

  return showSuccess ? (
    <Form>
      <SuccessMessage />
    </Form>
  ) : showError ? (
    <Form>
      <ErrorMessage />
    </Form>
  ) : (
    <Form
      name="order"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/?success=order"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        // sanitize before submit
        const nameInput = form.elements.namedItem("name") as HTMLInputElement;
        const emailInput = form.elements.namedItem("email") as HTMLInputElement;
        const descInput = form.elements.namedItem("description") as HTMLTextAreaElement;
        
        if (nameInput) nameInput.value = sanitizeInput(nameInput.value);
        if (emailInput) emailInput.value = sanitizeInput(emailInput.value);
        if (descInput) descInput.value = sanitizeInput(descInput.value);
        
        try {
          const formData = new FormData(form);
          
          // DEBUG: Log form data being sent
          console.log("📤 Submitting order form with data:");
          for (let [key, value] of formData.entries()) {
            console.log(`  ${key}: ${value}`);
          }
          
          const response = await fetch("/netlify-forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as any).toString(),
          });
          
          if (response.ok) {
            router.push("/?success=order");
          } else {
            console.error("Form submission failed:", response.status, response.statusText);
            router.push("/?error=order");
          }
        } catch (error) {
          console.error("Form submission error:", error);
          router.push("/?error=order");
        }
      }}
    >
      {/* Netlify form hidden fields */}
      <input type="hidden" name="form-name" value="order" />
      <input type="hidden" name="bot-field" />
      {/* Hidden input to capture phone value for Netlify */}
      <input type="hidden" name="phone" value={phone || ""} />
      <Title>Заказать проект</Title>

      <Label htmlFor="name">Имя</Label>
      <Input
        id="name"
        type="text"
        name="name"
        placeholder="Введите ваше имя"
        required
      />

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Введите ваш Email"
        required
      />

      <Label htmlFor="phone-display">Телефон</Label>
      <StyledPhoneInput
        id="phone-display"
        type="tel"
        international
        defaultCountry="RU"
        value={phone}
        onChange={setPhone}
        rules={{ required: true }}
      />

      <Label htmlFor="description">Описание проекта</Label>
      <TextArea
        id="description"
        name="description"
        placeholder="Расскажите про ваш проект"
      />

      {/* File attachment UI */}
      <FileInputContainer>
        <UploadLabel htmlFor="fileInput">
          <StyledAttachFileIcon />
          Прикрепить файл
        </UploadLabel>
        <HiddenFileInput
          id="fileInput"
          type="file"
          multiple
          accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
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

      {/* Hidden inputs for each uploaded file URL so Netlify receives them */}
      {uploadedFileURLs.map((url, i) => (
        <HiddenInput
          key={i}
          type="hidden"
          name={`fileUrl_${i + 1}`}
          value={url}
        />
      ))}

      <SubmitButton
        type="submit"
        disabled={files.some((file) => (uploadProgress[file.name] || 0) < 100)}
      >
        ОТПРАВИТЬ
      </SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Title = styled.h2`
  color: var(--color-body-primary);
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
  font-size: 1.1rem;
  color: var(--color-body-primary);
  display: flex;
  justify-content: start;
  margin-bottom: 4px;

  @media ${QUERIES.mobile} {
    font-size: 0.9rem;
  }

  @media (max-width: 358px) {
    font-size: 0.7rem;
  }
`;

const Input = styled.input`
  ${inputStyles}
  font-size: 1rem;

  @media ${QUERIES.mobile} {
    font-size: 0.85rem;
  }
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
  font-size: 1rem;
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
    font-size: 0.9rem;
    resize: none;
    padding: 0.5rem;
    margin-bottom: 0;
  }

  @media (max-width: 358px) {
    padding: 0.2rem;
    font-size: 0.7rem;
  }
`;

const FileInputContainer = styled.div`
  font-size: 0.9rem;
  margin-top: 0.7rem;

  @media ${QUERIES.mobile} {
    margin-bottom: 0;
  }

  @media (max-width: 358px) {
    padding: 0.2rem;
    font-size: 0.7rem;
    margin-top: -0.5rem;
  }
`;

const UploadLabel = styled(Label)`
  width: fit-content;
  justify-content: flex-start;
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
`;

const StyledAttachFileIcon = styled(AttachFileIcon)`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  color: var(--color-body-primary);
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media ${QUERIES.mobile} {
    margin-bottom: 0.3rem;
  }
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
  font-size: 0.7rem;
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
  padding: 0.7rem 2rem;
  margin-top: 0.2rem;

  @media ${QUERIES.mobile} {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-top: 0;
  }

  @media (max-width: 358px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }
`;
