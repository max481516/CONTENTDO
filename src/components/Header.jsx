import Navbar from "./Navbar";
import styled from "styled-components";
import HeaderLogo from "../assets/logo.svg?react";
import { QUERIES } from "../constants";

export default function Header() {
  return (
    <HeaderContainer id="Header">
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
            src="https://res.cloudinary.com/dqs3mkxnr/video/upload/v1738167667/output_pfqe7f.mp4"
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
  height: 65dvh;

  @media ${QUERIES.mobile} {
    height: 30dvh;
  }
`;

const HeaderLogoContainer = styled.div`
  position: absolute;
  padding-bottom: 8px;
  bottom: 0;
  width: 55%;
  left: 3rem;
  line-height: 1;

  @media ${QUERIES.mobile} {
    width: 82%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledHeaderLogo = styled(HeaderLogo)`
  color: var(--color-details-secondary);
  height: 100%;
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

  @media ${QUERIES.mobile} {
    transform: scale(1);
  }
`;
