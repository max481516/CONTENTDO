import styled from "styled-components";
import { titleStyles, QUERIES } from "../constants.js";
import video from "../assets/BackgroundVideo.mp4";

export default function AboutUs() {
  return (
    <Wrapper>
      <VideoBackground autoPlay muted loop playsInline src={video} />
      <ContentWrapper>
        <Title id="AboutUs">О НАС</Title>
        <Paragraph>
          {" "}
          <FirstWords>Наша компания </FirstWords>— это не просто студия, а
          творческое пространство, где рождаются{" "}
          <ColoredWords>яркие истории.</ColoredWords> Мы не просто снимаем и
          монтируем — мы передаём <ColoredWords>эмоции,</ColoredWords> вовлекаем
          зрителя и превращаем идеи в визуальные образы. От концепции до
          финального рендера: сценарий, съёмка, постпродакшн, графика и звук —{" "}
          <ColoredWords>всё под ключ,</ColoredWords> с искренней увлечённостью
          процессом.
        </Paragraph>
        <Paragraph>
          {" "}
          <Space></Space>
          Наша <ColoredWords>специализация</ColoredWords> — экшен-съемка и{" "}
          постановка трюков, но мы создаём видео
          <ColoredWords> любого формата:</ColoredWords> от рекламы до кино. Для
          сложных сцен заранее делаем превизы (визуальные раскадровки),
          привлекаем каскадёров, постановщиков боёв и экшн-операторов, чтобы{" "}
          <ColoredWords>продумать </ColoredWords>
          динамику, хореографию и зрелищность. А ещё —{" "}
          <ColoredWords>снимаем </ColoredWords> интервью, презентации,
          музыкальные клипы и работаем с CGI.{" "}
          <ColoredWords>Главное для нас </ColoredWords> — энергия кадра, будь то
          драка, диалог или рекламный ролик.
        </Paragraph>

        <Paragraph>
          Мы верим, что качественное видео — это важный инструмент для любого
          бизнеса в нынешнюю цифровую эпоху. Мы создаём{" "}
          <ColoredWords>уникальный контент,</ColoredWords> который вызывает
          интерес и вдохновляет. Нам важен не только результат, но и процесс,
          поэтому мы уделяем внимание каждой детали, чтобы достичь того что вам
          именно <ColoredWords>нужно.</ColoredWords>
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
  width: 100vw;
  left: 50%; /* to cancel horizontal overflow */
  margin-left: -50vw;
  height: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
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
  min-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
  opacity: 0.6;
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
  margin: 0 auto calc(62rem / 16);

  width: 90%;
  line-height: 1.4;

  @media ${QUERIES.largeTabletAndDown} {
    width: 100%;
  }

  @media ${QUERIES.tabletAndDown} {
    font-size: calc(17rem / 16);
    padding: 0 1rem;
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
/* dqw */
