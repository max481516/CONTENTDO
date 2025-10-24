"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";
import { titleStyles, QUERIES } from "@/constants";

export default function Portfolio() {
  // TypeScript: Check if window exists (client-side only) to avoid SSR error
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 550;

  return (
    <PortfolioWrapper>
      <Title id="Portfolio">НАШИ ПРОЕКТЫ</Title>
      <RelativeWrapper>
        <button className="swiper-button-prev" aria-label="Предыдущий слайд" />
        <button className="swiper-button-next" aria-label="Следующий слайд" />

        <CarouselContainer>
          <Swiper
            effect={isMobile ? "slide" : "coverflow"}
            centeredSlides={true}
            initialSlide={0}
            slidesPerView={isMobile ? 1.15 : 2}
            loop={true}
            spaceBetween={isMobile ? -25 : -200}
            coverflowEffect={
              isMobile
                ? undefined
                : {
                    rotate: 0,
                    stretch: -200,
                    depth: 30,
                    modifier: 1,
                    slideShadows: false,
                  }
            }
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, EffectCoverflow]}
            threshold={30}
            touchRatio={1}
            resistance={false}
            freeMode={true}
          >
            <SwiperSlide>
              <VideoSlide
                src="https://res.cloudinary.com/dqs3mkxnr/video/upload/v1734536816/video2_c8fe03.mp4"
                poster="https://res.cloudinary.com/dqs3mkxnr/video/upload/so_0,w_1920,h_1080,c_thumb,g_auto/v1734536816/video2_c8fe03.jpg"
                title="Новый взгляд"
                description="Рекламный ролик кабинета психиатра: помощь и поддержка для душевного равновесия."
              />
            </SwiperSlide>
            <SwiperSlide>
              <VideoSlide
                src="https://res.cloudinary.com/dqs3mkxnr/video/upload/v1745824362/rap-1_mfgzqi.mp4"
                poster="https://res.cloudinary.com/dqs3mkxnr/video/upload/so_3,w_1920,h_1080,c_thumb,g_auto/v1745824362/rap-1_mfgzqi.jpg"
                title="Ритмы улиц"
                description="Сборник динамичных рэп-клипов — энергия, стиль и уличная культура."
              />
            </SwiperSlide>

            <SwiperSlide>
              <VideoSlide
                src="https://res.cloudinary.com/dqs3mkxnr/video/upload/v1745824362/rap-2_lofvry.mp4"
                poster="https://res.cloudinary.com/dqs3mkxnr/video/upload/so_0,w_1920,h_1080,c_thumb,g_auto/v1745824362/rap-2_lofvry.jpg"
                title="Фридомклаб - Мне все равно"
                description="Клип российского исполнителя с атмосферой эмоций и яркой подачей."
              />
            </SwiperSlide>

            <SwiperSlide>
              <VideoSlide
                src="https://res.cloudinary.com/dqs3mkxnr/video/upload/v1745824368/shrink-1_ozswsu.mp4"
                poster="https://res.cloudinary.com/dqs3mkxnr/video/upload/so_8,w_1920,h_1080,c_thumb,g_auto/v1745824368/shrink-1_ozswsu.jpg"
                title="Шаг к гармонии"
                description="Вторая реклама кабинета психиатра, подчеркивающая доверие и заботу о каждом пациенте."
              />
            </SwiperSlide>
          </Swiper>
        </CarouselContainer>
      </RelativeWrapper>
    </PortfolioWrapper>
  );
}

// TypeScript: Define props for the VideoSlide component
interface VideoSlideProps {
  src: string;
  poster: string;
  title: string;
  description: string;
}

function VideoSlide({ src, poster, title, description }: VideoSlideProps) {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  // TypeScript: Ref must specify it points to an HTMLVideoElement
  const videoRef = useRef<HTMLVideoElement>(null);

  // VideoObject structured data for SEO
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": poster,
    "contentUrl": src,
    "uploadDate": "2024-12-01", // Adjust per video if needed
    "publisher": {
      "@type": "Organization",
      "name": "CONTENTDO",
      "url": "https://contentdo.ru"
    }
  };

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video) {
      setShowOverlay(false);
      video.controls = true;
      video.play();
    }
  };

  const resetToOverlay = () => {
    const video = videoRef.current;
    if (video) {
      video.controls = false;
    }
    setShowOverlay(true);
  };

  const handleVideoEnded = () => {
    resetToOverlay();
  };

  const handleVideoPaused = () => {
    const video = videoRef.current;
    // don't reset overlay if the pause was due to scrubbing/seeking
    if (video && video.seeking) return;
    resetToOverlay();
  };

  return (
    <SlideInner>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <VideoWrapper>
        <Video
          ref={videoRef}
          title={title}
          aria-label={`Видео: ${title}`}
          playsInline
          muted
          preload="metadata"
          poster={poster}
          onEnded={handleVideoEnded}
          onPause={handleVideoPaused}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support HTML5 video.
        </Video>

        {showOverlay && (
          <Overlay>
            <ButtonCircle>
              <PlayButton onClick={handlePlayClick} aria-label={`Воспроизвести видео: ${title}`}>
                <IoMdPlay />
              </PlayButton>
            </ButtonCircle>
          </Overlay>
        )}
      </VideoWrapper>

      <Description>
        <VideoTitle>{title}</VideoTitle>
        <VideoDescription>{description}</VideoDescription>
      </Description>
    </SlideInner>
  );
}

const SlideInner = styled.div`
  position: relative;
  background: transparent;

  //SHADOWS
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    pointer-events: none;
    z-index: 2;
  }

  &::before {
    left: -80px;
    background: linear-gradient(
      to right,
      hsla(0, 0%, 5%, 0) 0%,
      hsla(0, 0%, 5%, 0.2) 30%,
      hsla(0, 0%, 5%, 0.9) 70%,
      hsla(0, 0%, 5%, 1) 100%
    );

    @media ${QUERIES.mobile} {
      left: 0;
      background: none;
    }
  }

  &::after {
    right: -80px;
    background: linear-gradient(
      to left,
      hsla(0, 0%, 5%, 0) 0%,
      hsla(0, 0%, 5%, 0.2) 30%,
      hsla(0, 0%, 5%, 0.9) 70%,
      hsla(0, 0%, 5%, 1) 100%
    );
    @media ${QUERIES.mobile} {
      left: 0;
      background: none;
    }
  }
`;

const VideoWrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const ButtonCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);

  @media ${QUERIES.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const PlayButton = styled.button`
  font-size: 2.5rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  @media ${QUERIES.mobile} {
    font-size: 1.5rem;
  }
`;

const PortfolioWrapper = styled.div`
  margin-top: calc(96rem / 16);
  margin-bottom: 3rem;
  padding: 0 116px;

  @media ${QUERIES.largeTabletAndDown} {
    padding: 0;
  }

  @media ${QUERIES.mobile} {
    margin-top: calc(48rem / 16);
  }
`;

const Title = styled.h2`
  ${titleStyles}
`;

const RelativeWrapper = styled.div`
  position: relative;

  @media ${QUERIES.mobile} {
    margin: 0 -16px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    color: var(--color-details-primary);
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    z-index: 10;

    @media ${QUERIES.mobile} {
      display: none;
    }
  }

  .swiper-button-prev {
    background-color: hsla(0, 0%, 5%, 1);
    left: -10px;
  }

  .swiper-button-next {
    background-color: hsla(0, 0%, 5%, 1);
    right: -10px;
  }
`;

const CarouselContainer = styled.div`
  padding: 2rem 54px;

  @media ${QUERIES.mobile} {
    padding: 0;
  }

  .swiper-slide:not(.swiper-slide-active) ${SlideInner} {
    transform: scale(0.8);
    transition: transform 0.3s ease;
    filter: brightness(0.5);
    background: transparent;

    @media ${QUERIES.mobile} {
      filter: brightness(1);
    }
  }

  .swiper-slide-active ${SlideInner} {
    /* transform: scale(1.1); */

    transition: transform 0.3s ease;
  }
`;

const Video = styled.video`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;

  @media ${QUERIES.mobile} {
    border-radius: 10px;
    height: 300px;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;

  .swiper-slide:not(.swiper-slide-active) & {
    display: none;
  }

  @media ${QUERIES.mobile} {
    flex-direction: column;
  }
`;

const VideoTitle = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  margin: 0;

  @media ${QUERIES.tabletAndDown} {
    font-size: 0.8rem;
  }

  @media ${QUERIES.mobile} {
    font-size: 0.8rem;
  }
`;

const VideoDescription = styled.p`
  font-size: 0.8rem;
  width: 60%;
  color: var(--color-body-secondary);

  @media ${QUERIES.mobile} {
    width: 100%;
    font-size: calc(10rem / 16);
  }
`;
