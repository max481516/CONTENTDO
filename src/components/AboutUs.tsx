"use client";

import styled from "styled-components";
import { titleStyles, QUERIES } from "@/constants";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const desktopVideo =
    "https://res.cloudinary.com/dqs3mkxnr/video/upload/v1745998900/BackgroundVideo_kchaip.mp4";
  const mobileVideo =
    "https://res.cloudinary.com/dqs3mkxnr/video/upload/v1745998900/BackgroundVideoMobile_wkrmr6.mp4";

  const [src, setSrc] = useState<string>(desktopVideo);

  useEffect(() => {
    const mq = window.matchMedia(QUERIES.mobile);
    // TypeScript: Type the event parameter for MediaQueryList
    const update = (e: MediaQueryListEvent | MediaQueryList) => {
      setSrc(e.matches ? mobileVideo : desktopVideo);
    };
    update(mq); // set initial media query state
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <Wrapper>
      <VideoBackground
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={src}
      ></VideoBackground>
      <ContentWrapper>
        <Title id="AboutUs">О НАС</Title>
        <Paragraph>
          {" "}
          <FirstWords>Мы </FirstWords>— сообщество людей, которые{" "}
          <ColoredWords>по-настоящему </ColoredWords>
          любят и умеют делать видео. Для нас это{" "}
          <ColoredWords>не просто</ColoredWords> работа — это способ говорить,
          вдохновлять, рассказывать истории и создавать что-то настоящее.
        </Paragraph>
        <Paragraph>
          {" "}
          <Space></Space>
          Для сложных сцен мы заранее <ColoredWords>создаём</ColoredWords>{" "}
          превизы (снимаем визуальные раскадровки), приглашаем каскадеров и
          актеров, постановщика трюков, экшн оператора, чтобы{" "}
          <ColoredWords>продумать</ColoredWords> динамику, ритм и точную
          хореографию, для всех. Обсуждаем всевозможные{" "}
          <ColoredWords>варианты</ColoredWords> реализации проекта,
          подготавливаем заранее оборудование, обсуждаем точный план действий.
        </Paragraph>

        <Paragraph>
          Берём на себя <ColoredWords>полный цикл </ColoredWords>продакшна:
          разработку идеи, написание сценария, съёмку, монтаж, цветокоррекцию,
          графику, визуальные эффекты и звуковое оформление. <br />
          Наша <ColoredWords>цель</ColoredWords> создавать кинематографичный,
          высококачественный контент.
        </Paragraph>

        <Conclusion>
          Обращайтесь к нам, и мы <ColoredWords> готовы</ColoredWords> заняться
          реализацией вашей идеи <ColoredWords> уже сегодня.</ColoredWords>
        </Conclusion>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  padding: 5rem 0;
  width: 100vw;
  left: 50%; /* to cancel horizontal overflow */
  margin-left: -50vw;
  height: 100%;
  overflow-y: visible;

  @media ${QUERIES.mobile} {
    padding: 1rem 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 100%; /* fill the wrapper */
  overflow-y: auto;
  // reducing bottom margin for second Paragraph
  & > p:nth-child(4) {
    margin-bottom: calc(32rem / 16);
  }


`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
  opacity: 0.6;
`;

const Title = styled.h2`
  ${titleStyles}
`;

const Paragraph = styled.p`
  font-size: calc(19rem / 16);
  font-weight: 600;
  font-family: "Jura", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  /* text-transform: uppercase; */
  color: var(--color-body-primary);
  margin: 0 auto calc(32rem / 16);

  width: 90%;
  line-height: 1.4;

  @media ${QUERIES.largeTabletAndDown} {
    width: 100%;
  }

  @media ${QUERIES.tabletAndDown} {
    font-size: calc(17rem / 16);
    padding: 0 1rem;
    margin: 0 auto calc(16rem / 16);
  }

  @media ${QUERIES.mobile} {
    font-size: calc(14rem / 16);
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

const Conclusion = styled.p`
  text-align: center;
  color: var(--color-body-secondary);
  font-size: calc(20rem / 16);

  @media ${QUERIES.mobile} {
    font-size: calc(13rem / 16);
    padding: 0 1rem;
  }
`;
