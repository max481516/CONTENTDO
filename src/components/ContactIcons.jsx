import EmailIcon from "../assets/Email.svg?react";
import WhatsappIcon from "../assets/Whatsapp.svg?react";
import TelegramIcon from "../assets/Telegram.svg?react";
import styled from "styled-components";
import { QUERIES } from "../constants";

export default function ContactIcons() {
  return (
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
  );
}

const ContactIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 1.2rem;

  @media (max-width: 358px) {
    gap: 2rem;
    margin-top: 0.7rem;
  }

  svg {
    width: 38px;
    height: 38px;

    @media ${QUERIES.mobile} {
      width: 35px;
      height: 35px;
    }

    @media (max-width: 358px) {
      width: 25px;
      height: 25px;
    }
  }
`;

const Contact = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-body-primary);

  &:hover {
    color: var(--color-details-primary);
    transition: color 0.3s ease;
  }
`;

const IconLegend = styled.p`
  font-size: 0.9rem;

  @media ${QUERIES.mobile} {
    font-size: 0.8rem;
  }

  @media (max-width: 358px) {
    font-size: 0.6rem;
  }
`;
