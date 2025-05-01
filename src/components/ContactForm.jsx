import { useState, useRef } from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DOMPurify from "dompurify";
import ContactIcons from "./ContactIcons";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import { buttonStyles, inputStyles, QUERIES } from "../constants";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xanqwyqb");
  const [phone, setPhone] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const captchaRef = useRef(null);

  const sanitizeInput = (input) => DOMPurify.sanitize(input);

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
    setCaptchaError(false);
  };

  const handleCaptchaError = () => {
    setCaptchaError(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Verify captcha was completed
    if (!captchaToken) {
      setCaptchaError(true);
      captchaRef.current.execute();
      return;
    }

    // Sanitize inputs
    e.target.name.value = sanitizeInput(e.target.name.value);

    // Create form data with captcha token
    const formData = new FormData(e.target);
    formData.append("h-captcha-response", captchaToken);

    // Submit using Formspree's handler
    const submitEvent = {
      ...e,
      target: {
        ...e.target,
        "h-captcha-response": { value: captchaToken },
      },
    };

    await handleSubmit(submitEvent);

    // Reset captcha after submission
    captchaRef.current.resetCaptcha();
    setCaptchaToken(null);
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

      {captchaError && (
        <div
          style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}
        >
          Пожалуйста, подтвердите что вы не робот
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

      {/* hCaptcha Widget */}
      <div style={{ margin: "1rem 0" }}>
        <HCaptcha
          sitekey="8686bbfc-5ea4-4db4-8c0e-a72450e2f6a2" // Replace with your actual key
          onVerify={handleCaptchaVerify}
          onError={handleCaptchaError}
          ref={captchaRef}
        />
      </div>

      <SubmitButton type="submit" disabled={state.submitting}>
        {state.submitting ? "Отправка..." : "ОТПРАВИТЬ"}
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
