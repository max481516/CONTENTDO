import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { buttonStyles, QUERIES } from "../constants";
import AttachFileIcon from "../assets/AttachFileIcon.svg?react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

export default function OrderForm() {
  const [state, handleSubmit] = useForm("mqaezked");
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);

    // Initialize progress for each file
    const newProgress = {};
    selectedFiles.forEach((file) => {
      newProgress[file.name] = 0;
      simulateUpload(file);
    });
    setUploadProgress(newProgress);
  };

  // Simulate Upload Progress
  const simulateUpload = (file) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress((prev) => ({
        ...prev,
        [file.name]: progress,
      }));

      if (progress >= 100) clearInterval(interval);
    }, 300); // Adjust the interval as needed
  };

  if (state.succeeded) {
    return <SuccessMessage />;
  }
  if (state.errors) {
    return <ErrorMessage />;
  }

  return (
    <Form onSubmit={handleSubmit}>
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
          name="file"
          multiple
          onChange={handleFileChange}
        />
      </FileInputContainer>

      <FileList>
        {files.map((file) => (
          <FileItem key={file.name}>
            <FileName>{file.name}</FileName>
            <ProgressBarContainer>
              <ProgressBar progress={uploadProgress[file.name]} />
              <ProgressText>{uploadProgress[file.name] || 0}%</ProgressText>
            </ProgressBarContainer>
          </FileItem>
        ))}
      </FileList>

      <SubmitButton type="submit" disabled={state.submitting}>
        ОТПРАВИТЬ
      </SubmitButton>
    </Form>
  );
}

// Styled Components
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

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProgressBar = styled.div`
  background: var(--color-details-primary);
  height: 8px;
  width: ${(props) => props.progress}%;
  border-radius: 4px;
  transition: width 0.3s ease;
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
