import Navbar from "./Navbar";
import styled from "styled-components";
import { QUERIES } from "@/constants";
import Logo from "@/assets/logo.svg";

export default function Header() {
  return (
    <HeaderContainer id="Header">
      <HeaderLogoContainer>
        <StyledHeaderLogo />
      </HeaderLogoContainer>
      <VideoContainer>
        <BackgroundVideoElement
          id="background-video"
          title="Фоновое видео CONTENTDO"
          aria-label="Декоративное фоновое видео"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/dqs3mkxnr/video/upload/so_9.5,w_1920,h_1080,c_thumb,g_auto/v1738167667/output_pfqe7f.jpg"
          loop
        >
          <source
            src="https://res.cloudinary.com/dqs3mkxnr/video/upload/v1738167667/output_pfqe7f.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video
        </BackgroundVideoElement>
      </VideoContainer>
      <Navbar />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: relative;
  height: 65dvh;

  @media ${QUERIES.mobile} {
    height: 35dvh;
  }

  @media (max-width: 358px) {
    height: 45dvh;
  }
`;

const HeaderLogoContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 55%;
  left: calc(3px * 16);
  line-height: 1;

  @media ${QUERIES.mobile} {
    width: 100%;
    left: 0;
    padding-left: 8px;
  }
`;

const StyledHeaderLogo = styled(Logo)`
  color: var(--color-details-secondary);
  height: 100%;

  @media ${QUERIES.mobile} {
    height: 39px;
    width: auto;
    max-width: 100%;
  }

  @media (max-width: 358px) {
    height: calc(34rem / 16);
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  overflow: hidden;
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
