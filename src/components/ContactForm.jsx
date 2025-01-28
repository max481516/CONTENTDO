import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ContactIcons from "./ContactIcons";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import DOMPurify from "dompurify";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xanqwyqb");
  const recaptchaRef = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [phone, setPhone] = useState("");

  const GOOGLE_API_KEY = "YAIzaSyBvxaxCvly9PDR655azwFaUx4NhX-RmRd0"; // Replace with your API key
  const PROJECT_ID = "contentdo-ef5d1"; // Replace with your project ID
  const SITE_KEY = "6LcU2sUqAAAAAAcM7zmFEOzfbNjL1lsKZR7zDuTO"; // Replace with your site key

  const verifyRecaptcha = async (token) => {
    const requestBody = {
      event: {
        token: token,
        expectedAction: "submit_form", // Adjust based on your use case
        siteKey: SITE_KEY,
      },
    };

    try {
      const response = await fetch(
        `https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${GOOGLE_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to verify reCAPTCHA: ${response.status}`);
      }

      const data = await response.json();

      if (data.tokenProperties && data.tokenProperties.valid) {
        console.log("reCAPTCHA verification passed:", data);
        return true;
      } else {
        console.error("Invalid reCAPTCHA token:", data.tokenProperties);
        return false;
      }
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      setApiError("Failed to verify reCAPTCHA. Please try again.");
      return false;
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // Sanitize inputs
    e.target.name.value = DOMPurify.sanitize(e.target.name.value);

    if (!recaptchaToken) {
      setApiError("Please complete the reCAPTCHA verification.");
      return;
    }

    // Verify reCAPTCHA token with Google API
    const isVerified = await verifyRecaptcha(recaptchaToken);

    if (isVerified) {
      console.log("Submitting form...");
      handleSubmit(e); // Pass the event to Formspree after verification
    } else {
      setApiError("reCAPTCHA verification failed. Please try again.");
    }
  };

  const onReCAPTCHAChange = (token) => {
    setRecaptchaToken(token); // Set the reCAPTCHA token for verification
  };

  if (state.succeeded) {
    return <SuccessMessage />;
  }
  if (state.errors || apiError) {
    return <ErrorMessage message={apiError || "An error occurred"} />;
  }

  return (
    <Form id="contact-form" onSubmit={handleSubmitForm}>
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

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={SITE_KEY}
        size="invisible"
        onChange={onReCAPTCHAChange}
      />

      <SubmitButton
        type="submit"
        disabled={state.submitting || !recaptchaToken}
      >
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
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.input`
  padding: 1rem;
`;

const StyledPhoneInput = styled.input`
  padding: 1rem;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const ContactMessage = styled.p`
  color: white;
  text-align: center;
  font-size: 1rem;
`;
