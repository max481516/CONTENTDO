import styled from "styled-components";
import { titleStyles, QUERIES } from "../constants.js";
import AboutUsText from "../assets/AboutUsText.svg?react";
import Smoke from "../assets/Smoke.svg?react";

export default function AboutUs() {
  return (
    <>
      <Title id="AboutUs">О НАС</Title>
      <Paragraph>
        {" "}
        <FirstWords>Наша компания </FirstWords>это профессиональный{" "}
        <ColoredWords>видеопроизводственный продакшн</ColoredWords>, который
        предоставляет полный цикл услуг в создании качественных видео-контента.
        Мы создаем и производим мультимедийные проекты
        <ColoredWords> любой сложности</ColoredWords> для наших клиентов. Мы
        также предоставляем услуги в области аудио-визуального оборудования и
        технической поддержки на мероприятиях. Мы можем обеспечить
        профессиональное <ColoredWords>освещение, аудиозапись</ColoredWords> и
        системы мультимедиа для любого жанра, будь то корпоративное событие,
        свадьба, театральный спектакль, выставка или концерт.
      </Paragraph>
      <DecorationContainer>
        <DecorativeText>
          <AboutUsText />
        </DecorativeText>
        {/* <StyledSmoke src={smoke} /> */}
        <StyledSmoke />
      </DecorationContainer>
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

  @media ${QUERIES.mobile} {
    margin-top: calc(46rem / 16);
  }
`;

const Paragraph = styled.p`
  font-size: calc(19rem / 16);
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-body-primary);
  margin-bottom: calc(86rem / 16);

  @media ${QUERIES.mobile} {
    font-size: calc(14rem / 16);
    margin-bottom: 1.5rem;
  }

  &:nth-of-type(1) {
    margin-bottom: -24rem;
    @media ${QUERIES.mobile} {
      margin-bottom: -2rem;
    }
  }

  &:nth-of-type(2) {
    margin-top: -20rem;
    @media ${QUERIES.mobile} {
      margin-top: -2rem;
    }
  }
`;

const FirstWords = styled.span`
  font-size: calc(35rem / 16);
  text-transform: capitalize;
  font-weight: 800;
  color: var(--color-details-secondary);
  margin-left: 14rem;

  @media ${QUERIES.mobile} {
    font-size: calc(25rem / 16);
    margin-left: 0;
  }
`;

const Space = styled.span`
  margin-left: 34rem;

  @media ${QUERIES.mobile} {
    margin-left: 0;
  }
`;

const ColoredWords = styled.span`
  color: var(--color-details-primary);
`;

const ColoredWords2 = styled.span`
  color: var(--color-details-secondary);
`;

const DecorationContainer = styled.div`
  margin: 0 -3rem;
  display: block;
  width: 100vw;
  height: auto;
  object-fit: cover;
  position: relative;

  @media ${QUERIES.mobile} {
    margin: 0 -1rem;
  }
`;

const DecorativeText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
  z-index: 2;

  @media ${QUERIES.mobile} {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const StyledSmoke = styled(Smoke)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Conclusion = styled.p`
  text-align: center;
  color: var(--color-body-secondary);
  font-size: calc(20rem / 16);

  @media ${QUERIES.mobile} {
    font-size: calc(13rem / 16);
    padding: 0 1rem;
  }
`;
