"use client";

import Link from "next/link";
import styled, { css } from "styled-components";
import { QUERIES } from "@/constants";
import SocialIcons from "./SocialIcons";
import { useConsent } from "./CookieConsent/ConsentProvider";
import { LEGAL_DOCS, OPERATOR } from "@/legal/operator";

export default function Footer() {
  const { openSettings } = useConsent();

  return (
    <FooterContainer>
      <FooterNav aria-label="Footer navigation">
        <FooterLinks>
          <FooterLinkItem>
            <FooterLink href="/#Portfolio">Проекты</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="/#AboutUs">О нас</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="/#Pricing">Стоимость</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="/#Header">В начало</FooterLink>
          </FooterLinkItem>
        </FooterLinks>
      </FooterNav>

      <MobileVersionContainer>
        <Socials>
          <SocialIcons />
          <LegalNav aria-label="Правовая информация">
            <LegalLinks>
              <li>
                <LegalLink href={LEGAL_DOCS.privacy.path}>
                  Политика конфиденциальности
                </LegalLink>
              </li>
              <li>
                <LegalLink href={LEGAL_DOCS.consent.path}>
                  Согласие на обработку персональных данных
                </LegalLink>
              </li>
              <li>
                <LegalButton type="button" onClick={openSettings}>
                  Настройки cookie
                </LegalButton>
              </li>
            </LegalLinks>
          </LegalNav>
          <FooterCopyright>
            © 2025 – ContentDo – все права защищены
            <OperatorLine>
              {OPERATOR.name} · ИНН {OPERATOR.inn} · ОГРН {OPERATOR.ogrn}
            </OperatorLine>
          </FooterCopyright>
        </Socials>
      </MobileVersionContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
  padding-bottom: 3rem;

  @media ${QUERIES.mobile} {
    flex-direction: row;
    gap: 2rem;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const FooterLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
  list-style: none;
  padding: 0;

  @media ${QUERIES.mobile} {
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
    height: 60%;
    margin-left: 1rem;
  }
`;

const FooterLinkItem = styled.li`
  color: var(--color-details-secondary);
`;

const FooterLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  font-family: var(--font-jura), sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: calc(20rem / 16);

  &:hover {
    color: var(--color-details-primary);
    transition: color 0.3s ease;
  }

  @media ${QUERIES.mobile} {
    font-size: calc(14rem / 16);
  }
`;

const MobileVersionContainer = styled.div`
  @media ${QUERIES.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  margin-top: 3rem;

  @media ${QUERIES.mobile} {
    align-items: flex-start;
    margin-left: 2rem;
    margin-top: 0;
    gap: 1.25rem;
  }
`;

const LegalNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const LegalLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.75rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media ${QUERIES.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
`;

const legalLinkStyles = css`
  font-family: var(--font-jura), sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 700;
  font-size: calc(14rem / 16);
  color: var(--color-body-primary);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-details-primary);
  }

  @media ${QUERIES.mobile} {
    font-size: calc(11rem / 16);
  }
`;

const LegalLink = styled(Link)`
  ${legalLinkStyles}
`;

const LegalButton = styled.button`
  ${legalLinkStyles}
  background: none;
  border: none;
  padding: 0;
  text-align: left;
`;

const FooterCopyright = styled.small`
  padding-bottom: 1rem;
  text-align: center;

  @media ${QUERIES.mobile} {
    font-size: calc(8rem / 16);
    padding-bottom: 0;
    text-align: left;
  }
`;

const OperatorLine = styled.span`
  display: block;
  margin-top: 0.35rem;
  color: var(--color-body-secondary);
  font-size: calc(12rem / 16);

  @media ${QUERIES.mobile} {
    font-size: calc(8rem / 16);
  }
`;
