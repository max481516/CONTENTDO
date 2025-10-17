"use client";

import styled from "styled-components";
import { buttonStyles, inputStyles, QUERIES } from "@/constants";
import ContactIcons from "./ContactIcons";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import DOMPurify from "dompurify";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [phone, setPhone] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const showSuccess = searchParams.get("success") === "contact";
  const showError = searchParams.get("error") === "contact";

  // TypeScript: Sanitization function types input and return as string
  const sanitizeInput = (input: string): string => DOMPurify.sanitize(input);

  if (showSuccess) {
    return (
      <Form>
        <SuccessMessage />
      </Form>
    );
  }

  if (showError) {
    return (
      <Form>
        <ErrorMessage />
      </Form>
    );
  }

  return (
    <Form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/?success=contact"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        // Preprocess form data before sending
        const nameInput = form.elements.namedItem("name") as HTMLInputElement;
        if (nameInput) {
          nameInput.value = sanitizeInput(nameInput.value);
        }
        try {
          const formData = new FormData(form);
          
          // DEBUG: Log form data being sent
          console.log("📤 Submitting contact form with data:");
          for (let [key, value] of formData.entries()) {
            console.log(`  ${key}: ${value}`);
          }
          
          const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as any).toString(),
          });
          
          if (response.ok) {
            router.push("/?success=contact");
          } else {
            console.error("Form submission failed:", response.status, response.statusText);
            router.push("/?error=contact");
          }
        } catch (error) {
          console.error("Form submission error:", error);
          router.push("/?error=contact");
        }
      }}
    >
      {/* Netlify form hidden fields */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      {/* Hidden input to capture phone value for Netlify */}
      <input type="hidden" name="phone" value={phone || ""} />
      <Title>Оставьте ваши контакты и мы с вами свяжемся</Title>

      <Label htmlFor="name">Имя</Label>
      <Input
        id="name"
        type="text"
        name="name"
        placeholder="Введите ваше имя"
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

      <SubmitButton type="submit">ОТПРАВИТЬ</SubmitButton>

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
