import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../assets/LogoSmall.svg?react";
import { QUERIES } from "../constants.js";
import VK from "../assets/VK.svg?react";
import Insta from "../assets/Insta.svg?react";
import YT from "../assets/YT.svg?react";
import TikTok from "../assets/TikTok.svg?react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsClosing(true); // Trigger closing animation
      setIsMobileMenuOpen(false); // Immediately update the icon
      setTimeout(() => {
        setIsClosing(false); // Reset closing state
      }, 400); // Match the animation duration
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const handleLinkClick = () => {
    setIsClosing(true); // Trigger closing animation
    setIsMobileMenuOpen(false); // Immediately update the icon
    setTimeout(() => {
      setIsClosing(false); // Reset closing state
    }, 400);
  };

  // Lock scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }
  }, [isMobileMenuOpen]);

  return (
    <NavbarContainer aria-label="navigation">
      <LogoContainer href="/">
        <StyledLogo />
      </LogoContainer>
      <MenuToggle onClick={toggleMobileMenu} aria-label="Toggle Menu">
        {isMobileMenuOpen ? <StyledIoCloseOutline size={45} /> : <FaBars />}
      </MenuToggle>
      <NavLinks isMobileMenuOpen={isMobileMenuOpen} isClosing={isClosing}>
        <NavLinksCenterWrapper>
          <NavLink>
            <a href="#AboutUs" onClick={handleLinkClick}>
              О нас
            </a>
          </NavLink>
          <NavLink>
            <a href="#Pricing" onClick={handleLinkClick}>
              Стоимость
            </a>
          </NavLink>
          <NavLink>
            <a href="#Contacts" onClick={handleLinkClick}>
              Контакты
            </a>
          </NavLink>
        </NavLinksCenterWrapper>
        <SocialLinksContainer>
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
        </SocialLinksContainer>
      </NavLinks>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  position: relative;
  top: 0;
  z-index: 10;
  //ios height fix
  height: calc(64px + env(safe-area-inset-top));

  @media ${QUERIES.mobile} {
    padding: 1rem 1rem;
  }
`;

const LogoContainer = styled.a`
  height: auto;
  width: 100px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding-top: 16px;

  @media ${QUERIES.mobile} {
    width: 80px;
    padding-top: 8px;
  }
`;

const StyledLogo = styled(Logo)`
  height: 100%;
  width: auto;
  color: var(--color-details-primary);
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  @media ${QUERIES.tabletAndDown} {
    display: block;
    z-index: 20;
  }
`;

const StyledIoCloseOutline = styled(IoCloseOutline)`
  margin: -4px -4px 0 0;
`;

const NavLinksCenterWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  @media ${QUERIES.tabletAndDown} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1; /* Takes up available space */
    gap: 3rem;
    margin-top: 64px; /* Compensates for navbar height */
  }
`;

const NavLinks = styled.ul`
  list-style: none;

  margin: 0;
  padding: 0;

  @media ${QUERIES.tabletAndDown} {
    display: ${({ isMobileMenuOpen, isClosing }) =>
      isMobileMenuOpen || isClosing ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    gap: 3rem;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(20px);
    padding: 1rem;
    width: 100dvw;
    height: 100vh;
    min-height: -webkit-fill-available;
    transform-origin: top right;
    animation: ${({ isClosing }) =>
      isClosing
        ? "fadeOut 0.3s forwards ease-out"
        : "fadeIn 0.3s forwards ease-out"};
  }
`;

const NavLink = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 1.4rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-details-primary);
    }

    @media ${QUERIES.tabletAndDown} {
      font-size: 2rem;
      text-transform: uppercase;
    }
  }
`;

const SocialLinksContainer = styled.div`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 6rem;
    margin-top: auto;
  }
`;

const SocialItem = styled.div``;

const SocialLink = styled.a`
  color: var(--color-details-secondary);
`;

export default Navbar;
