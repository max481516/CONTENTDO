import { css } from "styled-components";

const BREAKPOINTS = {
  laptopMax: 1499,
  largeTabletMax: 1099,
  tabletMax: 769,
  mobileMax: 549,
};

const QUERIES = {
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  largeTabletAndDown: `(max-width: ${BREAKPOINTS.largeTabletMax / 16}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  mobile: `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
};

const buttonStyles = css`
  padding: 1rem 2rem;
  border: 2px solid var(--color-details-primary);
  background-color: transparent;
  color: var(--color-details-primary);
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-details-primary);
    color: var(--color-details-secondary);
  }

  &:focus,
  &:active {
    border-color: var(--color-details-secondary);
    background-color: var(--color-details-primary);
    color: var(--color-details-secondary);
  }
`;

const titleStyles = css`
  text-align: center;
  font-size: calc(50rem / 16);
  padding: 0 0 2rem;
`;

export { BREAKPOINTS, QUERIES, buttonStyles, titleStyles };
