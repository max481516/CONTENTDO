import styled from "styled-components";
import { QUERIES } from "../constants";

export default function SuccessMessage() {
  return (
    <SuccessMessageText>Спасибо! Мы скоро вам ответим.</SuccessMessageText>
  );
}

const SuccessMessageText = styled.p`
  color: var(--color-body-primary);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;

  @media ${QUERIES.mobile} {
    font-size: 1.2rem;
  }

  @media (max-width: 358px) {
    font-size: 1rem;
  }
`;
