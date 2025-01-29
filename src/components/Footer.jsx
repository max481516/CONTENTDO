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

      <MobileVersionContainer>
        <Socials>
          <SocialItems>
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
          </SocialItems>
          <FooterCopyright>
            © 2023 – ContentDo – все права защищены
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

const FooterLinkItem = styled.li``;

const FooterLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: var(--color-details-primary);
    transition: color 0.3s ease;
  }

  @media ${QUERIES.mobile} {
    font-size: calc(12rem / 16);
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
  gap: 4rem;
  list-style: none;
  margin-top: 3rem;

  @media ${QUERIES.mobile} {
    margin-left: 2rem;
    margin-top: 0;
    gap: 3rem;
  }
`;

const SocialItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  flex-wrap: wrap;

  @media ${QUERIES.mobile} {
    gap: 1rem;
    width: 80%;
  }
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
  padding-bottom: 1rem;

  @media ${QUERIES.mobile} {
    font-size: calc(8rem / 16);
    padding-bottom: 0;
  }
`;
