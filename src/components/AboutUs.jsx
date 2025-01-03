import styled from "styled-components";
import { titleStyles } from "../constants.js";
import AboutUsText from "../assets/AboutUsText.svg?react";
import Smoke from "../assets/Smoke.svg?react";

export default function AboutUs() {
  return (
    <>
      <Title>О НАС</Title>
      <Paragraph>
        {" "}
        <FirstWords>Наша компания </FirstWords>это профессиональный{" "}
        <ColoredWords>видеопроизводственный продакшн</ColoredWords>, который
        предоставляет полный цикл услуг в создании качественных видео-контента.
        Мы создаем и производим мультимедийные проекты
        <ColoredWords>любой сложности</ColoredWords> для наших клиентов. Мы
        также предоставляем услуги в области аудио-визуального оборудования и
        технической поддержки на мероприятиях. Мы можем обеспечить
        профессиональное <ColoredWords>освещение, аудиозапись</ColoredWords> и
        системы мультимедиа для любого жанра, будь то корпоративное событие,
        свадьба, театральный спектакль, выставка или концерт.
      </Paragraph>
      <DcorationContainer>
        <DecorativeText>
          <AboutUsText />
        </DecorativeText>
        <DecorativeImage>
          <Smoke />
        </DecorativeImage>
      </DcorationContainer>
      <Paragraph>
        {" "}
        <Space></Space>Мы предлагаем
        <ColoredWords> широкий спектр услуг</ColoredWords>, начиная от
        разработки концепции видео и написания сценария по вашим требованиям и
        пожеланиям, до создания полноценной кинематографической работы - от
        короткометражного фильма до полнометражного кино. Мы заботимся о каждой
        детали работы по производству видео материалов, включая
        <ColoredWords2>
          {" "}
          съемку, редактирование, цветокоррекцию, создание спецэффектов и
          звуковое оформление.
        </ColoredWords2>
      </Paragraph>
      <Paragraph>
        Мы верим, что качественное видео - это важный инструмент для любого
        бизнеса в нынешней цифровой эпохе. Мы стараемся создавать{" "}
        <ColoredWords> уникальный контент</ColoredWords>, который вызывает
        интерес и вдохновение. Мы готовы создать для вас презентацию полного
        цикла работы кино, чтобы вы смогли оценить наши профессиональные навыки
        в создании качественного видео-контента.{" "}
      </Paragraph>
      <Conclusion>
        Обращайтесь к нам, и мы <ColoredWords> готовы</ColoredWords> заняться
        реализацией вашей идеи <ColoredWords> уже сегодня.</ColoredWords>
      </Conclusion>
    </>
  );
}

const Title = styled.h2`
  ${titleStyles}
  margin-top: 6rem;
`;

const Paragraph = styled.p`
  font-size: calc(19rem / 16);
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-body-primary);
  margin-bottom: calc(86rem / 16);
`;

const FirstWords = styled.span`
  font-size: calc(35rem / 16);
  text-transform: capitalize;
  font-weight: 800;
  color: var(--color-details-secondary);
  margin-left: 14rem;
`;

const Space = styled.span`
  margin-left: 34rem;
`;

const ColoredWords = styled.span`
  color: var(--color-details-primary);
`;

const ColoredWords2 = styled.span`
  color: var(--color-details-secondary);
`;

const DcorationContainer = styled.div`
  position: relative;
`;

const DecorativeText = styled.div`
  width: fit-content;
  margin: 0 auto calc(98rem / 16);
`;

const DecorativeImage = styled.div`
  position: absolute;
  top: -60vh;
  margin-right: -48px;
`;

const Conclusion = styled.p`
  text-align: center;
  color: var(--color-body-secondary);
  font-size: calc(20rem / 16);
`;
