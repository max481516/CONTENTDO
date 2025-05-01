import { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DOMPurify from "dompurify";
import ContactIcons from "./ContactIcons";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import { buttonStyles, inputStyles, QUERIES } from "../constants";

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, handleSubmit] = useForm("xanqwyqb");
  const [phone, setPhone] = useState("");
  const [recaptchaError, setRecaptchaError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize reCAPTCHA on component mount
  useEffect(() => {
    if (executeRecaptcha) {
      executeRecaptcha("page_view");
    }
  }, [executeRecaptcha]);

  const sanitizeInput = (input) => DOMPurify.sanitize(input);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setRecaptchaError(null);
    setIsSubmitting(true);

    try {
      // Sanitize inputs
      e.target.name.value = sanitizeInput(e.target.name.value);

      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA not initialized");
      }

      // Get reCAPTCHA token
      const token = await executeRecaptcha("form_submit");

      // Create modified event with reCAPTCHA token
      const submitEvent = {
        ...e,
        target: {
          ...e.target,
          "g-recaptcha-response": { value: token },
        },
      };

      // Submit using Formspree's handler
      await handleSubmit(submitEvent);
    } catch (error) {
      console.error("Submission error:", error);
      setRecaptchaError("Ошибка при отправке. Пожалуйста, попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (state.succeeded) {
    return (
      <Form>
        <SuccessMessage />
      </Form>
    );
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Title>Оставьте ваши контакты и мы с вами свяжемся</Title>

      {recaptchaError && (
        <div
          style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}
        >
          {recaptchaError}
        </div>
      )}

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
        international
        defaultCountry="RU"
        value={phone}
        onChange={setPhone}
        required
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <SubmitButton type="submit" disabled={isSubmitting || state.submitting}>
        {isSubmitting ? "Отправка..." : "ОТПРАВИТЬ"}
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
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--color-body-primary);

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
