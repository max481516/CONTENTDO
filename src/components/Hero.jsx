import styled from "styled-components";
import { buttonStyles } from "../constants";

export default function Hero() {
  return (
    <HeroContainer>
      <Title>
        <FirstWord>делаем </FirstWord>контент!
      </Title>

      <Description>
        Мы предлагаем широкий спектр услуг, начиная от разработки концепции
        видео и написания сценария по вашим требованиям и пожеланиям, до
        создания полноценной кинематографической работы, клипа, рекламы.
      </Description>
      <SubDescription>
        Команда состоит из действующих - режиссеров, экшн операторов,
        звукорежиссеров, монтажеров, дизайнеров и других профессионалов,
        обладающих богатым опытом работы в сфере видеопроизводства.{" "}
      </SubDescription>
      <Button>ЗАКАЗАТЬ ПРОЕКТ</Button>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 65%;
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 1rem;
  align-items: stretch;
  padding: 0 2rem 0;
`;

const Title = styled.h1`
  font-size: calc(90rem / 16);
  color: var(--color-body-primary);
  text-align: end;
  line-height: 1;
  margin-bottom: 1rem;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;

const FirstWord = styled.span`
  color: var(--color-details-primary);
`;

const Description = styled.p`
  text-align: end;
  line-height: 1.5;
  margin: 0;
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  align-self: stretch; /* Stretches content to fill height */
`;

const SubDescription = styled.p`
  font-size: calc(16rem / 16);
  color: var(--color-body-secondary);
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: stretch; /* Matches height with left column */
  margin: 0; /* Removes default spacing */
`;

const Button = styled.button`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  align-self: stretch; /* Matches height with left column */
  ${buttonStyles}
`;
