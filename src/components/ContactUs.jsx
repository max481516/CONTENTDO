import styled from "styled-components";
import { titleStyles, buttonStyles } from "../constants";

export default function ContactUs() {
  return (
    <>
      <Title>Связаться с нами</Title>
      <InfoText>
        Если у вас есть любые вопросы, или вы готовы начать с нами
        сотрудничество, пишете нам как можно скорее. Мы будем рады на все
        ответить и предоставить вам самый лучший сервис, сервис который достоин
        вас и вашего времени!
      </InfoText>
      <Button>Связаться!</Button>
    </>
  );
}

const Title = styled.h2`
  ${titleStyles}
  margin-top: calc(150rem / 16);
`;

const InfoText = styled.p`
  max-width: 60%;
  margin: calc(42rem / 16) auto 0;
  text-align: center;
`;

const Button = styled.button`
  ${buttonStyles}
  text-transform: uppercase;
  display: block;
  max-width: 426px;
  width: 100%;
  margin: calc(56rem / 16) auto 0;
`;
