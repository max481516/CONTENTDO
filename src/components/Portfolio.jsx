import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css/bundle";

import video1 from "../assets/video.MP4";
import video2 from "../assets/video1.MOV";
import video3 from "../assets/video3.MOV";
import styled from "styled-components";

export default function Portfolio() {
  return (
    <PortfolioWrapper>
      <Title>НАШИ ПРОЕКТЫ</Title>
      <CarouselContainer>
        <Swiper
          effect="coverflow"
          centeredSlides={true}
          initialSlide={0}
          slidesPerView={2}
          loopedSlides={4}
          grabCursor={true}
          loop={true}
          spaceBetween={-200}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[Navigation, EffectCoverflow]}
        >
          <SwiperSlide>
            <Video src={video1} controls />
          </SwiperSlide>
          <SwiperSlide>
            <Video src={video2} controls />
          </SwiperSlide>
          <SwiperSlide>
            <Video src={video3} controls />
          </SwiperSlide>
          <SwiperSlide>
            <Video src={video3} controls />
          </SwiperSlide>
        </Swiper>
      </CarouselContainer>
    </PortfolioWrapper>
  );
}

const PortfolioWrapper = styled.div``;

const Title = styled.h2`
  text-align: center;
  font-size: calc(50rem / 16);
  padding: 2rem 0;
`;

const CarouselContainer = styled.div`
  padding: 2rem 54px;

  .swiper-slide {
    border-radius: 10px;
  }

  /* Darken/dim non-active slides */
  .swiper-slide:not(.swiper-slide-active) {
    filter: brightness(0.4);
    transition: filter 0.3s ease;
    transform: scale(0.8) !important;
  }

  /* Make the center slide bigger */
  .swiper-slide-active {
    position: relative;
    transform: scale(1.1) !important; /* Adjust this value as desired */
    transition: transform 0.3s ease;
  }

  /* Add pronounced border shadows to the center slide */
  .swiper-slide-active::before,
  .swiper-slide-active::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    pointer-events: none;
    z-index: 2;
  }

  .swiper-slide-active::before {
    left: -80px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 30%,
      rgba(0, 0, 0, 0.9) 70%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  .swiper-slide-active::after {
    right: -80px;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 30%,
      rgba(0, 0, 0, 0.9) 70%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

const Video = styled.video`
  border-radius: 4px !important;
`;
