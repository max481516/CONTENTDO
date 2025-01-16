import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../assets/logo.svg?react";
import { QUERIES } from "../constants.js";

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
  position: sticky;
  top: 0;
  z-index: 10;

  @media ${QUERIES.mobile} {
    padding: 1rem 1rem;
  }
`;

const LogoContainer = styled.a`
  height: auto;
  width: 198px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;

  @media ${QUERIES.mobile} {
    width: 150px;
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

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;

  @media ${QUERIES.tabletAndDown} {
    display: ${({ isMobileMenuOpen, isClosing }) =>
      isMobileMenuOpen || isClosing ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    gap: 3rem;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1rem;
    width: 100%;
    height: 100dvh;
    animation: ${({ isClosing }) =>
      isClosing ? "fadeOut 0.4s forwards ease" : "fadeIn 0.4s forwards ease"};
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

    @media ${QUERIES.mobile} {
      font-size: 2rem;
      text-transform: uppercase;
    }
  }
`;

export default Navbar;
