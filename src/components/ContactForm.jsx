import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { buttonStyles, inputStyles, QUERIES } from "../constants";
import ContactIcons from "./ContactIcons";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import DOMPurify from "dompurify";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xanqwyqb"); // Your Formspree ID
  const [phone, setPhone] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const recaptchaRef = useRef(); // Ref for reCAPTCHA

  // Function to sanitize inputs
  const sanitizeInput = (input) => DOMPurify.sanitize(input);

  // reCAPTCHA Handler (Trigger Form Submission Only if Solved)
  const onReCAPTCHAChange = (token) => {
    if (token) {
      setRecaptchaValue(token);
      setRecaptchaError(false); // Clear errors
      handleSubmit(new Event("submit", { bubbles: true, cancelable: true })); // Submit form
    }
  };

  // Form Submission Handler (Executes reCAPTCHA First)
  const handleCustomSubmit = (event) => {
    event.preventDefault();

    // Check if reCAPTCHA is completed
    if (!recaptchaValue) {
      setRecaptchaError(true);
      recaptchaRef.current.execute(); // Trigger reCAPTCHA
      return;
    }

    // Sanitize inputs before sending
    event.target.name.value = sanitizeInput(event.target.name.value);
    event.target.email.value = sanitizeInput(event.target.email.value);

    console.log("Sanitized Form Data:", {
      name: event.target.name.value,
      phone,
    });

    handleSubmit(event); // Send sanitized data to Formspree
  };

  if (state.succeeded) {
    return <SuccessMessage />;
  }
  if (state.errors || recaptchaError) {
    return <ErrorMessage />;
  }

  return (
    <Form id="contact-form" onSubmit={handleCustomSubmit}>
      <Title>Оставьте ваши контакты и мы с вами свяжемся</Title>

      <Label htmlFor="name"></Label>
      <Input id="name" type="text" name="name" placeholder="Имя" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Label htmlFor="phone"></Label>
      <StyledPhoneInput
        placeholder="Телефон"
        defaultCountry="RU"
        value={phone}
        onChange={setPhone}
        required
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      {/* ✅ Invisible reCAPTCHA (Executes on Submit) */}
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="YOUR_SITE_KEY" // Replace with your reCAPTCHA Site Key
        onChange={onReCAPTCHAChange}
      />

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

const StyledPhoneInput = styled(PhoneInput)`
  ${inputStyles}
  display: inline-flex;
  align-items: baseline;
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
