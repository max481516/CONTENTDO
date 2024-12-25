import Navbar from "./Navbar";
import styled from "styled-components";
import HeaderLogo from "../assets/HeaderLogo.svg?react";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <StyledHeaderLogo />
      </HeaderLogoContainer>
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
            src="https://res.cloudinary.com/dqs3mkxnr/video/upload/f_auto/v1734452482/BackgroundVideo_nucfzh.mp4"
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

const HeaderLogoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 3rem;
  line-height: 1;
`;

const StyledHeaderLogo = styled(HeaderLogo)`
  color: var(--color-body-primary);
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
