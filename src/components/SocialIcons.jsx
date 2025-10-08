import VK from "../assets/VK.svg";
import Insta from "../assets/Insta.svg";
import YT from "../assets/YT.svg";
import TikTok from "../assets/TikTok.svg";
import styled from "styled-components";
import { QUERIES } from "../constants";

export default function SocialIcons({ className }) {
  return (
    <SocialItems className={className}>
      <SocialItem>
        <SocialLink
          href="https://m.vk.com/contentdo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ВКонтакте"
        >
          <VK prefixId="icon-1" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://www.instagram.com/content_do"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Insta prefixId="icon-2" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <TikTok prefixId="icon-4" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://www.youtube.com/@SkillQuant"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <YT prefixId="icon-3" />
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
`;
