import styled from "styled-components";
import { titleStyles, buttonStyles, QUERIES } from "../constants";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

export default function ContactUs() {
  const { isOpen, modalType, openModal, closeModal } = useModal();

  return (
    <Wrapper>
      <Title id="Contacts">Связаться с нами</Title>
      <InfoText>
        Если у вас есть вопросы или вы готовы начать сотрудничество с нами,
        пожалуйста, свяжитесь как можно скорее! Мы с радостью ответим на все
        ваши вопросы. Если вы готовы заказать проект, воспользуйтесь кнопкой
        «Заказать проект» в{" "}
        <OrderLink href="#order-btn">начале сайта.</OrderLink>
      </InfoText>
      <Button onClick={() => openModal("contact")}>Связаться!</Button>
      <Modal isOpen={isOpen} modalType={modalType} onClose={closeModal} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: calc(75rem / 16);

  @media ${QUERIES.mobile} {
    margin-top: calc(46rem / 16);
  }
`;

const Title = styled.h2`
  ${titleStyles}

  padding: 0;
`;

const InfoText = styled.p`
  max-width: 60%;
  margin-top: calc(42rem / 16);
  text-align: center;

  @media ${QUERIES.largeTabletAndDown} {
    max-width: 80%;
  }

  @media ${QUERIES.mobile} {
    max-width: 100%;
    font-size: calc(13rem / 16);
    margin-top: calc(24rem / 16);
  }
`;

const Button = styled.button`
  ${buttonStyles}
  text-transform: uppercase;
  display: block;
  max-width: 426px;
  width: 100%;
  margin-top: calc(56rem / 16);

  @media ${QUERIES.mobile} {
    margin-top: calc(24rem / 16);
  }
`;

const OrderLink = styled.a`
  text-decoration: underline;
  color: var(--color-body-primary);
  cursor: pointer;

  &:hover {
    color: var(--color-details-primary);
    transition: color 0.2s ease-in-out;
  }
`;
