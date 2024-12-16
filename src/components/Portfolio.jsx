import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
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
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Video src={video1} controls></Video>
          </SwiperSlide>
          <SwiperSlide>
            <Video src={video2} controls></Video>
          </SwiperSlide>
          <SwiperSlide>
            <Video src={video3} controls></Video>
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
  padding: 2rem 16px;
`;

const Video = styled.video``;
