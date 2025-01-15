import styled from "styled-components";
import VK from "../assets/VK.svg?react";
import Insta from "../assets/Insta.svg?react";
import YT from "../assets/YT.svg?react";
import TikTok from "../assets/TikTok.svg?react";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterNav aria-label="Footer navigation">
        <FooterLinks>
          <FooterLinkItem>
            <FooterLink href="#">Проекты</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#">О нас</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#">Стоимость</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#">Контакты</FooterLink>
          </FooterLinkItem>
        </FooterLinks>
      </FooterNav>

      <Socials>
        <SocialItem>
          <SocialLink href="#" aria-label="ВКонтакте">
            <VK />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href="#" aria-label="Instagram">
            <Insta />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href="#" aria-label="YouTube">
            <YT />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href="#" aria-label="TikTok">
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
  padding-bottom: 8rem;
`;
