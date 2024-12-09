import Navbar from "./Navbar";
import styled from "styled-components";
/* import BackgroundVideo from "../assets/BackgroundVideo.mp4"; */

export default function Header() {
  return (
    <HeaderContainer>
      <Title>CONTENT DO</Title>
      <VideoContainer>
        <BackgroundVideoElement autoPlay muted loop>
          {/* <source src={BackgroundVideo} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </BackgroundVideoElement>
      </VideoContainer>
      <Navbar />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: relative;
  height: 65dvh;
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
  transform: scale(1.1);
`;
