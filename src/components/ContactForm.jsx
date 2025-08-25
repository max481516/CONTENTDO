import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { buttonStyles, inputStyles, QUERIES } from "../constants";
import ContactIcons from "./ContactIcons";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import DOMPurify from "dompurify";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xanqwyqb");
  const [phone, setPhone] = useState("");

  // Sanitization Function
  const sanitizeInput = (input) => DOMPurify.sanitize(input);

  if (state.succeeded) {
    return (
      <Form>
        <SuccessMessage />
      </Form>
    );
  }
  if (state.errors) {
    return (
      <Form>
        <ErrorMessage />
      </Form>
    );
  }

  return (
    <Form
      onSubmit={(e) => {
        // Preprocess form data before sending
        e.preventDefault();
        e.target.name.value = sanitizeInput(e.target.name.value);

        console.log("Sanitized Form Data:", {
          name: e.target.name.value,
          phone,
        });

        handleSubmit(e); // Send sanitized data to Formspree
      }}
    >
      <Title>Оставьте ваши контакты и мы с вами свяжемся</Title>

      <Label htmlFor="name">Имя</Label>
      <Input
        id="name"
        type="text"
        name="name"
        placeholder="Введите ваше имя"
        required
      />

      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Label htmlFor="phone">Телефон</Label>
      <StyledPhoneInput
        id="phone"
        name="phone"
        type="tel"
        international
        defaultCountry="RU"
        value={phone}
        onChange={setPhone}
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
  gap: 0;
`;

const Title = styled.h2`
  color: var(--color-body-primary);
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;

  @media ${QUERIES.mobile} {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 358px) {
    font-size: 1rem;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: start;
  font-size: 1.1rem;
  color: var(--color-body-primary);
  margin-bottom: 4px;

  @media ${QUERIES.mobile} {
    font-size: 1rem;
  }

  @media (max-width: 358px) {
    font-size: 0.7rem;
  }
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

const SubmitButton = styled.button`
  ${buttonStyles}
  border-radius: 5px;
  padding: 0.7rem 2rem;
  margin-top: 0.2rem;

  @media ${QUERIES.mobile} {
    font-size: 1rem;
    padding: 0.7rem 1rem;
  }

  @media (max-width: 358px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ContactMessage = styled.p`
  color: var(--color-body-primary);
  text-align: center;
  font-size: 0.9rem;
  margin-top: 1.5rem;

  @media ${QUERIES.mobile} {
    font-size: 0.8rem;
  }

  @media (max-width: 358px) {
    font-size: 0.6rem;
    margin-top: 0.5rem;
  }
`;
