"use client";

import { titleStyles } from "../constants";
import styled from "styled-components";

export default function LoadingSpinner() {
  return (
    <Container>
      <Spinner />
      <Text>Загрузка...</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  min-height: 100vh;
  background-color: var(--color-background);
`;

const Spinner = styled.div`
  width: 56px;
  height: 56px;
  border: 4px solid var(--color-details-tertiary);
  border-top-color: var(--color-details-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Text = styled.p`
  ${titleStyles}
  font-size: 1.25rem;
  color: var(--color-body-primary);
  font-weight: 500;
  letter-spacing: 0.02em;
`;
