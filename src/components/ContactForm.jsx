import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { buttonStyles, QUERIES } from "../constants";
import EmailIcon from "../assets/Email.svg?react";
import WhatsappIcon from "../assets/Whatsapp.svg?react";
import TelegramIcon from "../assets/Telegram.svg?react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xanqwyqb");

  if (state.succeeded) {
    return <SuccessMessage>Спасибо! Мы свяжемся с вами.</SuccessMessage>;
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

      <ContactIconsContainer>
        <Contact>
          <EmailIcon />
          <IconLegend>Почта</IconLegend>
        </Contact>
        <Contact>
          <WhatsappIcon />
          <IconLegend>WhatsApp</IconLegend>
        </Contact>
        <Contact>
          <TelegramIcon />
          <IconLegend>Telegram</IconLegend>
        </Contact>
      </ContactIconsContainer>
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
  padding: 0.8rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: #222;
  color: white;
  margin: 0;

  @media ${QUERIES.mobile} {
    padding: 0.5rem;
    font-size: 1rem;
  }

  @media (max-width: 358px) {
    padding: 0.3rem;
    font-size: 0.8rem;
  }
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

const SuccessMessage = styled.p`
  color: #4caf50;
  text-align: center;
  font-size: 1.2rem;
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

const ContactIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  margin-top: 1rem;

  @media ${QUERIES.mobile} {
    gap: 3rem;
  }

  @media (max-width: 358px) {
    gap: 2rem;
  }

  svg {
    width: 55px;
    height: 55px;

    @media ${QUERIES.mobile} {
      width: 35px;
      height: 35px;
    }

    @media (max-width: 358px) {
      width: 30px;
      height: 30px;
    }
  }
`;

const Contact = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const IconLegend = styled.p`
  @media ${QUERIES.mobile} {
    font-size: 0.8rem;
  }

  @media (max-width: 358px) {
    font-size: 0.6rem;
  }
`;
