import styled from "styled-components";
import { QUERIES } from "../constants";
import ContactIcons from "./ContactIcons";

export default function ErrorMessage() {
  return (
    <ErrorContainer>
      <FailMessage>
        Извините, произошла ошибка, свяжитесь с нами другим удобным способом
      </FailMessage>
      <ContactIcons />
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media ${QUERIES.mobile} {
    gap: 1.2rem;
  }

  @media (max-width: 358px) {
    gap: 0.8rem;
  }
`;

const FailMessage = styled.p`
  color: var(--color-details-secondary);
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
