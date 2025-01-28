import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { buttonStyles, inputStyles, QUERIES } from "../constants";
import ContactIcons from "./ContactIcons";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xanqwyqb");

  if (state.succeeded) {
    return <SuccessMessage />;
  }
  if (state.errors) {
    return <ErrorMessage />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Оставьте ваши контакты и мы с вами свяжемся</Title>

      <Label htmlFor="name"></Label>
      <Input id="name" type="text" name="name" placeholder="Имя" required />

      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Label htmlFor="phone"></Label>
      <Input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Телефон"
        required
      />

      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <SubmitButton type="submit" disabled={state.submitting}>
        ОТПРАВИТЬ
      </SubmitButton>

      <ContactMessage>
        Либо свяжитесь с нами любым удобным способом, и мы перезвоним вам в
        удобное для вас время!
      </ContactMessage>

      <ContactIcons />
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
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 358px) {
    font-size: 1rem;
  }
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.input`
  ${inputStyles}
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

const ContactMessage = styled.p`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;

  @media ${QUERIES.mobile} {
    font-size: 0.8rem;
  }

  @media (max-width: 358px) {
    font-size: 0.6rem;
    margin-top: 0.5rem;
  }
`;
