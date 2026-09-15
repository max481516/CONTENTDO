"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CONSENT_STORAGE_KEY,
  ConsentRecord,
  purgeMetrikaData,
  readConsent,
  writeConsent,
} from "./consentStorage";

interface ConsentContextValue {
  /** false до чтения localStorage на клиенте (SSR-безопасно) */
  isReady: boolean;
  /** null — действующего решения нет (баннер должен быть показан) */
  consent: ConsentRecord | null;
  isBannerOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  /** Повторно открыть баннер (кнопка «Настройки cookie») */
  openSettings: () => void;
  /** Закрыть баннер без изменения решения; работает только если решение уже есть */
  closeBanner: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentRecord | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setIsBannerOpen(stored === null);
    setIsReady(true);
    // A rejected visitor may still carry _ym_* leftovers written by a
    // previously running counter right before the reload — clean them up.
    if (stored !== null && !stored.analytics) purgeMetrikaData();

    // Keep tabs in sync when the decision changes elsewhere
    const onStorage = (event: StorageEvent) => {
      if (event.key !== null && event.key !== CONSENT_STORAGE_KEY) return;
      const next = readConsent();
      setConsent(next);
      setIsBannerOpen(next === null);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const acceptAll = useCallback(() => {
    setConsent(writeConsent(true));
    setIsBannerOpen(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    const hadAnalytics = consent?.analytics === true;
    setConsent(writeConsent(false));
    setIsBannerOpen(false);
    purgeMetrikaData();
    // A running Metrika/Webvisor instance can only be stopped by reloading
    if (hadAnalytics) window.location.reload();
  }, [consent]);

  const openSettings = useCallback(() => setIsBannerOpen(true), []);

  const closeBanner = useCallback(() => {
    if (consent !== null) setIsBannerOpen(false);
  }, [consent]);

  const value = useMemo<ConsentContextValue>(
    () => ({
      isReady,
      consent,
      isBannerOpen,
      acceptAll,
      rejectNonEssential,
      openSettings,
      closeBanner,
    }),
    [
      isReady,
      consent,
      isBannerOpen,
      acceptAll,
      rejectNonEssential,
      openSettings,
      closeBanner,
    ]
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
}
