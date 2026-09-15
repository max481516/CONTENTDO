"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { buttonStyles, QUERIES } from "@/constants";
import { LEGAL_DOCS } from "@/legal/operator";
import { useConsent } from "./ConsentProvider";

export default function CookieConsentBanner() {
  const {
    isReady,
    isBannerOpen,
    consent,
    acceptAll,
    rejectNonEssential,
    closeBanner,
  } = useConsent();
  const acceptRef = useRef<HTMLButtonElement>(null);
  const hasDecision = consent !== null;

  // When reopened from «Настройки cookie», move focus into the dialog.
  // On the very first automatic display we deliberately do not steal focus.
  useEffect(() => {
    if (isBannerOpen && hasDecision) acceptRef.current?.focus();
  }, [isBannerOpen, hasDecision]);

  // Escape closes the banner only when a decision already exists,
  // so dismissing never counts as implied consent.
  useEffect(() => {
    if (!isBannerOpen || !hasDecision) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBanner();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isBannerOpen, hasDecision, closeBanner]);

  if (!isReady || !isBannerOpen) return null;

  return (
    <Banner
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-text"
    >
      {hasDecision && (
        <CloseButton
          type="button"
          onClick={closeBanner}
          aria-label="Закрыть без изменений"
        >
          <IoCloseOutline />
        </CloseButton>
      )}
      <Title id="cookie-consent-title">Мы используем cookie</Title>
      <Text id="cookie-consent-text">
        Технически необходимые cookie обеспечивают работу сайта. С вашего
        согласия мы также подключаем сервис Яндекс Метрика (включая Вебвизор)
        для анализа посещаемости. До нажатия «Принять» аналитические cookie не
        устанавливаются. Подробнее — в{" "}
        <PolicyLink href={LEGAL_DOCS.privacy.path}>
          Политике конфиденциальности
        </PolicyLink>
        .
      </Text>
      <Actions>
        <AcceptButton ref={acceptRef} type="button" onClick={acceptAll}>
          Принять
        </AcceptButton>
        <RejectButton type="button" onClick={rejectNonEssential}>
          Отклонить
        </RejectButton>
      </Actions>
    </Banner>
  );
}

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Banner = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1rem;
  margin: 0 auto;
  width: min(calc(100% - 2rem), 760px);
  /* Above page content and swiper controls, below the mobile menu (100) and Modal (1000) */
  z-index: 50;
  padding: 1.5rem 1.75rem;
  padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));
  background: var(--color-details-tertiary);
  border: 1px solid hsla(0, 0%, 100%, 0.06);
  border-radius: 10px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  color: var(--color-body-primary);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideUp} 0.3s ease-out;
  }

  @media ${QUERIES.mobile} {
    bottom: 0.5rem;
    width: calc(100% - 1rem);
    padding: 1.1rem 1.1rem;
    padding-bottom: calc(1.1rem + env(safe-area-inset-bottom));
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  background: none;
  border: none;
  color: var(--color-body-primary);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-details-secondary);
  }

  svg {
    display: block;
  }
`;

const Title = styled.h2`
  font-family: var(--font-jura), sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-size: calc(18rem / 16);
  text-transform: uppercase;
  color: var(--color-details-secondary);
  margin-bottom: 0.5rem;
  padding-right: 1.5rem;

  @media ${QUERIES.mobile} {
    font-size: calc(15rem / 16);
  }
`;

const Text = styled.p`
  font-size: calc(15rem / 16);
  line-height: 1.5;
  margin: 0;

  @media ${QUERIES.mobile} {
    font-size: calc(13rem / 16);
  }
`;

const PolicyLink = styled(Link)`
  text-decoration: underline;
  color: var(--color-details-secondary);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-details-primary);
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.25rem;

  @media ${QUERIES.mobile} {
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 1rem;
  }
`;

const AcceptButton = styled.button`
  ${buttonStyles}
  padding: 0.7rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;

  @media ${QUERIES.mobile} {
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: calc(14rem / 16);
  }
`;

const RejectButton = styled(AcceptButton)`
  border-color: var(--color-body-secondary);
  color: var(--color-body-primary);

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    border-color: var(--color-details-primary);
    color: var(--color-details-primary);
  }
`;
