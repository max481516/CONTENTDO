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
          <Icon $name="VK" aria-hidden />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://www.instagram.com/content_do"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Icon $name="Insta" aria-hidden />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <Icon $name="TikTok" aria-hidden />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://www.youtube.com/@SkillQuant"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <Icon $name="YT" aria-hidden />
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

// Generic masked icon, tinted by currentColor
const Icon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: currentColor;
  mask: url(${(p) => `/icons/${p.$name}.svg`}) no-repeat center / contain;
  -webkit-mask: url(${(p) => `/icons/${p.$name}.svg`}) no-repeat center / contain;
`;
