import styled from "styled-components";
import { titleStyles, QUERIES } from "../constants.js";
import AboutUsText from "../assets/AboutUsText.svg?react";
import Smoke from "../assets/Smoke.svg?react";

export default function AboutUs() {
  return (
    <Wrapper>
      <Title id="AboutUs">О НАС</Title>
      <Paragraph>
        {" "}
        <FirstWords>Наша компания </FirstWords>это сообщество людей , которые{" "}
        <ColoredWords>по-настоящему</ColoredWords> любят и умеют делать видео.
        Для нас это не просто работа — это способ говорить, вдохновлять,
        рассказывать истории и создавать что-то настоящее. Берём на себя{" "}
        <ColoredWords> полный цикл</ColoredWords> продакшна: разработку идеи,
        написание сценария, съёмку, монтаж, цветокоррекцию, графику, визуальные
        эффекты и звуковое оформление.
      </Paragraph>
      <DecorativeContainer>
        <RelativeContainer>
          <DecorativeText>
            <AboutUsText />
          </DecorativeText>
          {/* <StyledSmoke src={smoke} /> */}
          <StyledSmoke />
        </RelativeContainer>
      </DecorativeContainer>
      <Paragraph>
        {" "}
        <Space></Space>Мы занимаемся <ColoredWords>Съемкой</ColoredWords> экшна,{" "}
        <ColoredWords>постановкой</ColoredWords> трюковых сцен и сценических
        боёв: Для сложных сцен мы заранее создаём превизы (снимаем визуальные
        раскадровки), приглашаем каскадеров и актеров, постановщика трюков, экшн
        оператора, чтобы продумать динамику, ритм и точную хореографию, для
        всех.
      </Paragraph>
      <Paragraph>
        Мы верим, что качественное видео - это важный инструмент для любого
        бизнеса в нынешней цифровой эпохе. Мы стараемся создавать{" "}
        <ColoredWords> уникальный контент</ColoredWords>, который вызывает
        интерес и вдохновение. Нам важен не только{" "}
        <ColoredWords>результат</ColoredWords>, но и безопасность, поэтому
        уделяем внимание к каждой детали.{" "}
      </Paragraph>
      <Conclusion>
        Обращайтесь к нам, и мы <ColoredWords> готовы</ColoredWords> заняться
        реализацией вашей идеи <ColoredWords> уже сегодня.</ColoredWords>
      </Conclusion>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  // reducing bottom margin for second Paragraph
  & > p:nth-child(4) {
    margin-bottom: calc(32rem / 16);
  }
`;

const Title = styled.h2`
  ${titleStyles}
  margin-top: 4rem;

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

  @media ${QUERIES.tabletAndDown} {
    font-size: calc(17rem / 16);
    margin-bottom: calc(66rem / 16);
  }

  @media ${QUERIES.mobile} {
    font-size: calc(14rem / 16);
    margin-bottom: 1.5rem;
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

  @media ${QUERIES.tabletAndDown} {
    margin-left: 0;
  }
`;

const ColoredWords = styled.span`
  color: var(--color-details-primary);
`;

const DecorativeContainer = styled.div`
  margin-top: -30%;
  margin-bottom: -25%;

  @media ${QUERIES.laptopAndDown} {
    margin-bottom: -20%;
  }

  @media ${QUERIES.largeTabletAndDown} {
    margin-top: -25%;
    margin-bottom: -15%;
  }

  @media ${QUERIES.mobile} {
    margin-top: -15%;
    margin-bottom: -5%;
  }
`;

const RelativeContainer = styled.div`
  margin: 0 -3rem;
  display: block;
  width: 100vw;
  height: auto;
  object-fit: cover;
  position: relative;

  @media ${QUERIES.tabletAndDown} {
    margin: 0 -2rem;
  }

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

  @media ${QUERIES.tabletAndDown} {
    transform: translate(-50%, -50%) scale(1.3);
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
