import styled from "styled-components";
import { QUERIES } from "../constants";
import SocialIcons from "./SocialIcons";

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
          <SocialIcons />
          <FooterCopyright>
            © 2025 – ContentDo – все права защищены
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
  font-family: "Jura", sans-serif;
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
  gap: 4rem;
  list-style: none;
  margin-top: 3rem;

  @media ${QUERIES.mobile} {
    margin-left: 2rem;
    margin-top: 0;
    gap: 2rem;
  }
`;

const FooterCopyright = styled.small`
  padding-bottom: 1rem;

  @media ${QUERIES.mobile} {
    font-size: calc(8rem / 16);
    padding-bottom: 0;
  }
`;
