import styled from "styled-components";
import { buttonStyles } from "../constants";

export default function Hero() {
  return (
    <HeroContainer>
      <Title>
        <FirstWord>делаем </FirstWord>контент!
      </Title>

      <Description>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit,
      </Description>
      <SubDescription>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia voluptas sit aspernatur aut odit aut fugit{" "}
      </SubDescription>
      <Button>ЗАКАЗАТЬ ПРОЕКТ</Button>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 65%;
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  grid-template-rows: auto 1fr auto; /* Explicit row heights */
  grid-gap: 1rem; /* Space between rows/columns */
  align-items: stretch; /* Ensures all rows stretch to the same height */
  padding: 0 2rem 0;
`;

const Title = styled.h1`
  font-size: calc(90rem / 16);
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
  ${buttonStyles};
`;
