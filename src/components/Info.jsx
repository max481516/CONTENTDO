import styled from "styled-components";
import Union from "../assets/Union.svg?react";
import { QUERIES } from "../constants";

export default function Info() {
  return (
    <Wrapper>
      <Card>
        <Text>
          Почему мы <br /> не можем сразу сказать точную стоимость?
        </Text>
        <Decoration>
          <Union />
        </Decoration>
      </Card>
      <Card>
        <Text>
          Все просто, мы подходим к каждому клиенту <br /> и заданию
          индивидуально, <br /> мы не делаем все по шаблонам.
        </Text>
        <Number>01</Number>
      </Card>
      <Card>
        <Text>
          {" "}
          Стоимость зависит только от ваших пожеланий, мы можем исполнить
          абсолютно все, что вам нужно.
        </Text>
        <Number>02</Number>
      </Card>
      <Card>
        <Text>
          {" "}
          В финальную стоимость входят зарплаты дополнительным актерам,
          каскадерам, а также аренда оборудования, площадок для съемки,
          реквизита, и всего остального что нужно именно для вашего проекта.
        </Text>
        <Number>03</Number>
      </Card>
      <Card>
        Все цены <br /> обговариваются отдельно.
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: calc(75rem / 16) auto 0;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px;
  grid-gap: 1rem;

  @media ${QUERIES.mobile} {
    display: none;
  }
`;

const Card = styled.div`
  position: relative;
  border: 1px solid var(--color-details-tertiary);
  border-radius: 10px;
  text-align: start;

  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background-color: var(--color-details-tertiary);

    @media ${QUERIES.mobile} {
      grid-column: 1 / 3;
    }
  }

  &:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    @media ${QUERIES.mobile} {
      grid-column: 2 / 3;
    }

    > :first-child {
      max-width: 296px;
    }
  }

  &:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;

    @media ${QUERIES.mobile} {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    > :first-child {
      width: 328px;
    }
  }

  &:nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    @media ${QUERIES.mobile} {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
    }

    > :first-child {
      width: 820px;
    }
  }

  &:nth-child(5) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    background-color: hsl(0, 2.4390243902439024%, 8.03921568627451%);

    @media ${QUERIES.mobile} {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
  }
`;

const Text = styled.p`
  position: absolute;
  text-align: start;
  font-size: calc(19rem / 16);
  width: 239px;
  bottom: 25px;
  left: 20px;
`;

const Decoration = styled.div`
  position: absolute;
  top: 15px;
  right: 18px;
`;

const Number = styled.p`
  color: var(--color-details-tertiary);
  font-family: Inter;
  font-size: calc(20rem / 16);
  font-weight: 700;
  position: absolute;
  top: 15px;
  right: 18px;
`;
