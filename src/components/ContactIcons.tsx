import styled from "styled-components";
import { QUERIES } from "../constants";

export default function ContactIcons() {
  return (
    <ContactIconsContainer>
      <Contact>
        <Icon $name="Email" aria-hidden />
        <IconLegend>Почта</IconLegend>
      </Contact>
      <Contact>
        <Icon $name="Whatsapp" aria-hidden />
        <IconLegend>WhatsApp</IconLegend>
      </Contact>
      <Contact>
        <Icon $name="Telegram" aria-hidden />
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

// Masked icon that inherits color
const Icon = styled.span<{ $name: string}>`
  display: inline-block;
  width: 38px;
  height: 38px;
  background-color: currentColor;
  mask: url(${(p) => `/icons/${p.$name}.svg`}) no-repeat center / contain;
  -webkit-mask: url(${(p) => `/icons/${p.$name}.svg`}) no-repeat center / contain;

  @media ${QUERIES.mobile} {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 358px) {
    width: 25px;
    height: 25px;
  }
`;
