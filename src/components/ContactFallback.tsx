"use client";

import styled from "styled-components";
import { IoCallOutline } from "react-icons/io5";
import EmailIcon from "@/assets/Email.svg";
import TelegramIcon from "@/assets/Telegram.svg";
import { QUERIES } from "@/constants";
import { CONTACTS, telHref } from "@/legal/operator";

interface ContactFallbackProps {
  variant: "contact" | "order";
}

/**
 * Shown inside the modal instead of the lead forms while FORMS_ENABLED is
 * false (see src/legal/operator.ts). Collects nothing: plain links only.
 */
export default function ContactFallback({ variant }: ContactFallbackProps) {
  return (
    <Wrapper>
      <Title>
        {variant === "order" ? "Заказать проект" : "Связаться с нами"}
      </Title>
      <Text>
        Форма на сайте временно отключена. Напишите или позвоните нам — обсудим
        проект и ответим на вопросы.
      </Text>
      <List>
        <Item>
          <IconWrap aria-hidden>
            <IoCallOutline />
          </IconWrap>
          <Details>
            <Label>Телефон</Label>
            <ContactLink href={telHref(CONTACTS.phone)}>
              {CONTACTS.phone}
            </ContactLink>
          </Details>
        </Item>
        <Item>
          <IconWrap aria-hidden>
            <EmailIcon />
          </IconWrap>
          <Details>
            <Label>Почта</Label>
            <ContactLink href={`mailto:${CONTACTS.email}`}>
              {CONTACTS.email}
            </ContactLink>
          </Details>
        </Item>
        <Item>
          <IconWrap aria-hidden>
            <TelegramIcon />
          </IconWrap>
          <Details>
            <Label>Telegram</Label>
            <ContactLink
              href={`https://t.me/${CONTACTS.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{CONTACTS.telegram}
            </ContactLink>
          </Details>
        </Item>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: var(--color-body-primary);
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media ${QUERIES.mobile} {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 358px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  color: var(--color-body-primary);
  text-align: center;
  font-size: 1rem;
  margin: 0 0 1.5rem;

  @media ${QUERIES.mobile} {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: #222;
  color: var(--color-body-primary);
  transition: border-color 0.3s ease, color 0.3s ease;

  &:hover {
    border-color: var(--color-details-primary);
    color: var(--color-details-primary);
  }

  @media ${QUERIES.mobile} {
    padding: 0.6rem 0.8rem;
    gap: 0.75rem;
  }
`;

const IconWrap = styled.span`
  display: flex;
  flex: 0 0 auto;
  color: inherit;
  font-size: 28px;

  svg {
    display: block;
    width: 28px;
    height: 28px;
  }

  @media ${QUERIES.mobile} {
    font-size: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const Details = styled.span`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const Label = styled.span`
  font-size: 0.75rem;
  color: var(--color-body-secondary);
`;

const ContactLink = styled.a`
  color: var(--color-details-secondary);
  text-decoration: none;
  font-size: 1.05rem;
  overflow-wrap: anywhere;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-details-primary);
  }

  @media ${QUERIES.mobile} {
    font-size: 0.9rem;
  }
`;
