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
    height: 35dvh;
  }

  @media (max-width: 358px) {
    height: 45dvh;
  }
`;

const HeaderLogoContainer = styled.div`
  position: absolute;
  padding-bottom: 8px;
  bottom: 0;
  width: 55%;
  left: calc(3px * 16);
  line-height: 1;

  @media ${QUERIES.mobile} {
    width: auto; /* Remove percentage-based width */
    left: 16px; /* Align to the right */
  }
`;

const StyledHeaderLogo = styled(HeaderLogo)`
  color: var(--color-details-secondary);
  height: 100%;

  @media ${QUERIES.mobile} {
    height: 39px; /* Exact match for 39px (39rem/16) */
    width: fit-content;
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
