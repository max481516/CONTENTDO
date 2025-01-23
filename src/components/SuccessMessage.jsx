import styled from "styled-components";
import { QUERIES } from "../constants";

export default function SuccessMessage() {
  return (
    <SuccessMessageText>Спасибо! Мы скоро вам ответим.</SuccessMessageText>
  );
}

const SuccessMessageText = styled.p`
  color: var(--color-details-secondary);
  text-align: center;
  font-size: 2rem;
  font-weight: 800;

  @media ${QUERIES.mobile} {
    font-size: 1.5rem;
  }
`;
