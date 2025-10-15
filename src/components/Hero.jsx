"use client";

import styled from "styled-components";
import { buttonStyles, QUERIES } from "../constants";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

export default function Hero() {
  const { isOpen, modalType, openModal, closeModal } = useModal();
  return (
    <HeroContainer>
      <Title>
        <FirstWord>делаем </FirstWord>контент!
      </Title>
      <Description>
        <List>
          <li>
            {""}
            {""}Рекламные ролики для брендов{" "}
          </li>
          <li>Музыкальные клипы и трейлеры </li>
          <li>Разработка и постановка экшн сцен</li>
          <li>Монтаж, графика, звук</li>
          <li>Съёмка событий (концерты, танцы, спортивные мероприятия)</li>
        </List>
      </Description>
      <SubDescription>
        Действующие режиссёры, экшн-операторы, звукорежиссёры, монтажёры и
        дизайнеры — все мы объединены многолетним опытом в видеопроизводстве.
        Каждый специалист здесь — мастер своего дела, способный воплотить даже
        самые сложные проекты.
      </SubDescription>
      <Button id="order-btn" onClick={() => openModal("order")}>
        ЗАКАЗАТЬ ПРОЕКТ
      </Button>
      <Modal isOpen={isOpen} modalType={modalType} onClose={closeModal} />
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 65%;
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  grid-gap: 1rem;
  align-items: stretch;
  padding: 0 2rem 0;

  @media ${QUERIES.largeTabletAndDown} {
    margin: 0;
    width: 100%;
    padding: 0;
  }
`;

const Title = styled.h1`
  font-family: var(--font-jura), sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  font-size: calc(90rem / 16);
  color: var(--color-details-secondary);
  text-align: end;
  line-height: 1;
  margin-bottom: 1rem;
  grid-column: 1 / 3;
  grid-row: 1 / 2;

  @media ${QUERIES.laptopAndDown} {
    font-size: calc(76rem / 16);
  }

  @media ${QUERIES.largeTabletAndDown} {
    font-size: calc(60rem / 16);
  }

  @media ${QUERIES.tabletAndDown} {
    font-size: calc(48rem / 16);
  }

  @media ${QUERIES.mobile} {
    font-size: calc(36rem / 16);
  }

  @media (max-width: 358px) {
    font-size: calc(34rem / 16);
  }
`;

const FirstWord = styled.span`
  color: var(--color-details-primary);
`;

const Description = styled.p`
  text-align: end;
  line-height: 1.7;
  margin: 0;
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  align-self: stretch; /* Stretches content to fill height */

  @media ${QUERIES.mobile} {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    text-align: start;
  }
`;

const List = styled.ul`
  list-style: url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='%23319aaa' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0V12.8584H15.999L15.9992 12.8586L12.8605 16.0002L8.28223 11.3844L4.67694 15.826H0V11.375H8.27295L0.131794 3.167L3.27051 0.0253906L11.5692 8.39224V0H16Z' fill='%23319aaa'/%3E%3C/svg%3E%0A")
    inside;
  padding-left: 0;
  margin: 0;
`;

const SubDescription = styled.p`
  font-size: calc(18rem / 16);
  color: var(--color-body-secondary);
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: stretch; /* Matches height with left column */
  margin: 0; /* Removes default spacing */
  margin-top: 3px;

  @media ${QUERIES.mobile} {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }
`;

const Button = styled.button`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  align-self: stretch; /* Matches height with left column */
  ${buttonStyles}

  @media ${QUERIES.mobile} {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }
`;
