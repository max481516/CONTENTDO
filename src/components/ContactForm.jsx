import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xanqwyqb"); // Replace YOUR_FORM_ID with your Formspree form ID

  if (state.succeeded) {
    return <SuccessMessage>Спасибо! Мы свяжемся с вами.</SuccessMessage>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>ОСТАВЬТЕ ВАШИ КОНТАКТЫ И МЫ С ВАМИ СВЯЖЕМСЯ</Title>

      <Label htmlFor="name">Имя</Label>
      <Input id="name" type="text" name="name" required />

      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Label htmlFor="phone">Телефон</Label>
      <Input id="phone" type="tel" name="phone" required />

      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" name="email" required />

      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Label htmlFor="message">Сообщение</Label>
      <Textarea id="message" name="message" placeholder="Ваше сообщение..." />

      <ValidationError prefix="Message" field="message" errors={state.errors} />

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

const Textarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: #222;
  color: white;
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
