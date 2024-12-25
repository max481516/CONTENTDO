import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";
import { titleStyles } from "../mixins";

export default function Portfolio() {
  return (
    <PortfolioWrapper>
      <Title>НАШИ ПРОЕКТЫ</Title>
      <RelativeWrapper>
        <button className="swiper-button-prev" />
        <button className="swiper-button-next" />

        <CarouselContainer>
          <Swiper
            effect="coverflow"
            centeredSlides={true}
            initialSlide={0}
            slidesPerView={2}
            loopedSlides={4}
            loop={true}
            spaceBetween={-200}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, EffectCoverflow]}
          >
            <SwiperSlide>
              <VideoSlide
                src="https://res.cloudinary.com/dqs3mkxnr/video/upload/v1734536816/video2_c8fe03.mp4"
                title="Nemo enim ipsam"
                description="Nemo enim ipsam voluptatem quia voluptas sit"
              />
            </SwiperSlide>

            <SwiperSlide>
              <VideoSlide
                src="https://res.cloudinary.com/dqs3mkxnr/video/upload/v1734536756/video1_niv0lb.mp4"
                title="Nemo enim ipsam"
                description="Nemo enim ipsam voluptatem quia voluptas sit"
              />
            </SwiperSlide>

            <SwiperSlide>
              <VideoSlide
                src="https://res.cloudinary.com/dqs3mkxnr/video/upload/v1734536756/video3_sbde3r.mov"
                title="Nemo enim ipsam"
                description="Nemo enim ipsam voluptatem quia voluptas sit"
              />
            </SwiperSlide>

            <SwiperSlide>
              <VideoSlide
                src="https://res.cloudinary.com/dqs3mkxnr/video/upload/f_auto,q_auto/v1734536763/video4_j2hftg.mp4"
                title="Nemo enim ipsam"
                description="Nemo enim ipsam voluptatem quia voluptas sit"
              />
            </SwiperSlide>
          </Swiper>
        </CarouselContainer>
      </RelativeWrapper>
    </PortfolioWrapper>
  );
}

function VideoSlide({ src, title, description }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef(null);

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
    resetToOverlay();
  };

  return (
    <SlideInner>
      <VideoWrapper>
        <Video
          ref={videoRef}
          playsInline
          muted
          preload="metadata"
          onEnded={handleVideoEnded}
          onPause={handleVideoPaused}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support HTML5 video.
        </Video>
        {showOverlay && (
          <Overlay>
            <ButtonCircle>
              <PlayButton onClick={handlePlayClick}>
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
  transition: transform 0.3s ease;
  padding-bottom: 3rem;
  background-color: hsla(0, 0%, 5%, 1);

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
`;

const PlayButton = styled.button`
  font-size: 2.5rem;

  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const PortfolioWrapper = styled.div`
  margin-top: calc(96rem / 16);
`;

const Title = styled.h2`
  ${titleStyles}
`;

const RelativeWrapper = styled.div`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    z-index: 10;
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

  .swiper-slide:not(.swiper-slide-active) ${SlideInner} {
    transform: scale(0.8);
    transition: transform 0.3s ease;
    filter: brightness(0.5);
  }

  .swiper-slide-active ${SlideInner} {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

const Video = styled.video`
  display: block;
  width: 100%;
  height: auto;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VideoTitle = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  margin: 0;
`;

const VideoDescription = styled.p`
  font-size: calc(12rem / 16);
  text-transform: capitalize;
  color: var(--color-body-secondary);
`;
