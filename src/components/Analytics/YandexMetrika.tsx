"use client";
/* global process */

import Script from "next/script";
import { useConsent } from "@/components/CookieConsent/ConsentProvider";

const YM_ID = Number(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID) || 104808419;

/**
 * Yandex Metrika loads ONLY after the visitor accepts analytics cookies
 * in the cookie banner (152-ФЗ). Nothing is injected before that, so no
 * request to mc.yandex.ru and no `_ym_*` cookie exists without consent.
 */
export default function YandexMetrika() {
  const { isReady, consent } = useConsent();

  if (!isReady || !consent?.analytics) return null;

  return (
    <Script id="ym-tag" strategy="afterInteractive">
      {`
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}', 'ym');

        if (!window.__ymInit) {
          window.__ymInit = true;
          ym(${YM_ID}, 'init', { ssr: true, webvisor: true, clickmap: true, ecommerce: 'dataLayer', accurateTrackBounce: true, trackLinks: true });
        }
      `}
    </Script>
  );
}
