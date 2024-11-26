import { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa6";
import Logo from "../assets/logo.svg?react";
import { QUERIES } from "../constants.js";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      <LogoContainer href="/">
        <StyledLogo />
      </LogoContainer>
      <MenuToggle onClick={toggleMobileMenu} aria-label="Toggle Menu">
        <FaBars />
      </MenuToggle>
      <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
        <NavLink>
          <a href="#hero">Home</a>
        </NavLink>
        <NavLink>
          <a href="#portfolio">Portfolio</a>
        </NavLink>
        <NavLink>
          <a href="#about">About</a>
        </NavLink>
        <NavLink>
          <a href="#price">Pricing</a>
        </NavLink>
        <NavLink>
          <a href="#contact">Contact</a>
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
`;

const LogoContainer = styled.a`
  height: auto;
  width: 125px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
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
  }
`;

const NavLinks = styled.ul`
  font-family: Mon;
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;

  @media ${QUERIES.tabletAndDown} {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "block" : "none")};
    position: absolute;
    top: 100%;
    right: 0;
    background: #333;
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-details-primary);
    }
  }
`;

export default Navbar;
