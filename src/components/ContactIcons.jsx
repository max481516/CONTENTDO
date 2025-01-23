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
