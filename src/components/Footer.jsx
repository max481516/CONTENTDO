import styled from "styled-components";
import VK from "../assets/VK.svg?react";
import Insta from "../assets/Insta.svg?react";
import YT from "../assets/YT.svg?react";
import TikTok from "../assets/TikTok.svg?react";
import { QUERIES } from "../constants";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterNav aria-label="Footer navigation">
        <FooterLinks>
          <FooterLinkItem>
            <FooterLink href="#Portfolio">Проекты</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#AboutUs">О нас</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#Pricing">Стоимость</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#Header">В начало</FooterLink>
          </FooterLinkItem>
        </FooterLinks>
      </FooterNav>

      <Socials>
        <SocialItem>
          <SocialLink
            href="https://m.vk.com/contentdo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ВКонтакте"
          >
            <VK />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            href="https://www.instagram.com/content_do"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Insta />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            href="https://www.youtube.com/@SkillQuant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <YT />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <TikTok />
          </SocialLink>
        </SocialItem>
      </Socials>

      <FooterCopyright>© 2023 – ContentDo – все права защищены</FooterCopyright>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer``;

const FooterNav = styled.nav`
  margin-top: calc(96rem / 16);
  display: flex;
  justify-content: center;
`;

const FooterLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
  list-style: none;

  @media ${QUERIES.mobile} {
    gap: 1rem;
  }
`;

const FooterLinkItem = styled.li``;

const FooterLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: var(--color-details-primary);
    transition: color 0.3s ease;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  list-style: none;
  margin-top: 4rem;
`;

const SocialItem = styled.div``;

const SocialLink = styled.a`
  color: var(--color-body-primary);

  &:hover {
    color: var(--color-details-primary);
    transition: color 0.3s ease;
  }
`;

const FooterCopyright = styled.small`
  display: block;
  width: fit-content;
  margin: 4rem auto 0;
  padding-bottom: 6rem;
`;
