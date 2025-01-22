import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { QUERIES } from "../constants";

export default function OrderForm() {
  const [state, handleSubmit] = useForm("mqaezked"); // Replace YOUR_FORM_ID with your Formspree form ID

  if (state.succeeded) {
    return <SuccessMessage>Спасибо! Мы свяжемся с вами.</SuccessMessage>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>ЗАКАЗАТЬ ПРОЕКТ</Title>

      <Label htmlFor="name">Имя</Label>
      <Input
        id="name"
        type="text"
        name="name"
        placeholder="Введите имя"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Label htmlFor="phone">Телефон</Label>
      <Input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Введите телефон"
        required
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Введите email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Label htmlFor="description">Описание проекта</Label>
      <TextArea
        id="description"
        name="description"
        placeholder="Опишите ваш проект"
        required
      />
      <ValidationError
        prefix="Description"
        field="description"
        errors={state.errors}
      />

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
  gap: 1rem;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
`;

const Label = styled.label`
  color: white;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: #222;
  color: white;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: #222;
  color: white;
  min-height: 100px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background: #555;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.p`
  color: #4caf50;
  text-align: center;
  font-size: 1.2rem;
`;
