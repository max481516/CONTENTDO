import VK from "../assets/VK.svg";
import Insta from "../assets/Insta.svg";
import YT from "../assets/YT.svg";
import TikTok from "../assets/TikTok.svg";
import styled from "styled-components";
import { QUERIES } from "../constants";

// TypeScript: Define the shape of props this component accepts
interface SocialIconsProps {
  className?: string; // The "?" means this prop is optional
}

export default function SocialIcons({ className }: SocialIconsProps) {
  return (
    <SocialItems className={className}>
      <SocialItem>
        <SocialLink
          href="https://m.vk.com/contentdo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ВКонтакте"
        >
          <VK width={49} height={49} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://www.instagram.com/content_do"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Insta width={41} height={41} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <TikTok width={50} height={50} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://www.youtube.com/@SkillQuant"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <YT width={50} height={38} />
        </SocialLink>
      </SocialItem>
    </SocialItems>
  );
}

const SocialItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  flex-wrap: wrap;

  @media ${QUERIES.mobile} {
    gap: 1rem;
    width: 65%;
  }

  @media (max-width: 358px) {
    width: 71%;
  }
`;

const SocialItem = styled.div``;

const SocialLink = styled.a`
  color: var(--color-body-primary);

  &:hover {
    color: var(--color-details-primary);
    transition: color 0.3s ease;
  }

  svg {
    display: block;
  }
`;
