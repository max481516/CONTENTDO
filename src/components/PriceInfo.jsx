import styled from "styled-components";
import Union from "../assets/Union.svg?react";
import { QUERIES, titleStyles } from "../constants";

export default function PriceInfo() {
  return (
    <>
      <Title id="Pricing">СТОИМОСТЬ</Title>
      <Cards>
        <Card>
          <Text>
            Стоимость видео <br /> определяется индивидуально — потому что
            каждый проект уникален
          </Text>
          <Decoration>
            <Union />
          </Decoration>
        </Card>
        <Card>
          <Text>
            Мы не работаем по шаблонам — каждый ролик создаётся с нуля под ваши
            задачи
          </Text>
          <Number>01</Number>
        </Card>
        <Card>
          <Text>
            {" "}
            Мы ориентируемся на ваши идеи и финансовые возможности, чтобы
            предложить наилучшее решение.
          </Text>
          <Number>02</Number>
        </Card>
        <Card>
          <Text>
            {" "}
            На стоимость влияют следующие факторы: <br />
            - сложность съёмки (локации, актёры, реквизит, техника) <br />
            - объём постпродакшна <br />
            - сроки и сценарий <br />
          </Text>
          <Number>03</Number>
        </Card>
        <Card>
          <Text>
            Хотите картинку как в кино?
            <br /> Обращайтесь!
          </Text>
        </Card>
      </Cards>
    </>
  );
}

const Title = styled.h2`
  ${titleStyles}
  margin-top: 2rem;
`;

const Cards = styled.div`
  margin: 0 calc(75rem / 16) calc(75rem / 16);
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(190px, auto);
  grid-gap: 1rem;
  overflow-wrap: break-word;

  @media ${QUERIES.largeTabletAndDown} {
    margin: 0 calc(50rem / 16) calc(50rem / 16);
  }

  @media ${QUERIES.mobile} {
    margin: 0 calc(24rem / 16) calc(24rem / 16);
    grid-template-columns: 45vw 45vw;
    grid-auto-rows: 150px 170px 80px;
  }
`;

const Card = styled.div`
  position: relative;
  border: 1px solid var(--color-details-tertiary);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    color: var(--color-details-secondary);
    background-color: var(--color-details-tertiary);

    @media ${QUERIES.mobile} {
      grid-column: 1 / 2;
    }
  }

  &:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    @media ${QUERIES.mobile} {
      grid-column: 2 / 3;
    }
  }

  &:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;

    @media ${QUERIES.mobile} {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }

  &:nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    @media ${QUERIES.mobile} {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
      justify-content: center;
    }
  }

  &:nth-child(5) {
    color: var(--color-details-secondary);
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: hsl(0, 2.4390243902439024%, 8.03921568627451%);

    > :first-child {
      text-align: center;
    }

    @media ${QUERIES.mobile} {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
  }
`;

const Text = styled.p`
  font-family: "Jura", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  padding: 0.9rem;
  text-align: start;
  font-size: calc(19rem / 16);
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;

  @media ${QUERIES.largeTabletAndDown} {
    font-size: calc(16rem / 16);
  }

  @media ${QUERIES.tabletAndDown} {
    font-size: calc(15rem / 16);
  }

  @media ${QUERIES.mobile} {
    font-size: calc(12rem / 16);
  }

  @media (max-width: 358px) {
    font-size: calc(11rem / 16);
  }
`;

const Decoration = styled.div`
  position: absolute;
  top: 15px;
  right: 18px;
  @media ${QUERIES.mobile} {
    top: 10px;
    right: 12px;
  }
`;

const Number = styled.p`
  color: var(--color-details-tertiary);
  font-family: Inter;
  font-size: calc(20rem / 16);
  font-weight: 700;
  position: absolute;
  top: 15px;
  right: 18px;

  @media ${QUERIES.mobile} {
    top: 10px;
    right: 12px;
  }
`;
