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

  @media ${QUERIES.mobile} {
    padding: 0.8rem 2em;
  }
`;

const titleStyles = css`
  font-family: "Jura", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  text-align: center;
  font-size: calc(50rem / 16);
  padding: 0 0 2rem;
  text-transform: uppercase;
  color: var(--color-details-secondary);

  @media ${QUERIES.mobile} {
    font-size: calc(30rem / 16);
  }
`;

const inputStyles = css`
  padding: 0.6rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: #222;
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;

  &:focus {
    background-color: #333;
  }

  @media ${QUERIES.mobile} {
    padding: 0.5rem;
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 358px) {
    padding: 0.2rem;
    font-size: 0.7rem;
  }
`;

export { BREAKPOINTS, QUERIES, buttonStyles, titleStyles, inputStyles };
