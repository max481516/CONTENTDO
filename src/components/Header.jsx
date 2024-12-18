import Navbar from "./Navbar";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <Title>CONTENT DO</Title>
      <VideoContainer>
        <BackgroundVideoElement
          id="background-video"
          autoPlay
          muted
          playsInline
          webkit-playsinline
          loop
        >
          <source
            src="https://res.cloudinary.com/dqs3mkxnr/video/upload/v1734452482/BackgroundVideo_nucfzh.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </BackgroundVideoElement>
      </VideoContainer>
      <Navbar />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: relative;
  height: 70dvh;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: calc(140rem / 16);
  position: absolute;
  bottom: 0;
  left: 3rem;
  line-height: 1;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BackgroundVideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.35);
`;
