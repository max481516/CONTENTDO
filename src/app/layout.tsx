import React from "react";
import "overlayscrollbars/styles/overlayscrollbars.css";
import "react-phone-number-input/style.css";
import "swiper/css/bundle";
import ClientGlobalStyles from "./ClientGlobalStyles";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import OverlayScrollbarsProvider from "./OverlayScrollbarsProvider";
import { Inter, Manrope, Jura } from "next/font/google";
import { siteMetadata } from "./metadata";
import OrganizationSchema from "@/components/StructuredData/OrganizationSchema";
import ServiceSchema from "@/components/StructuredData/ServiceSchema";
import YandexMetrika from "@/components/Analytics/YandexMetrika";
import { ConsentProvider } from "@/components/CookieConsent/ConsentProvider";
import CookieConsentBanner from "@/components/CookieConsent/CookieConsentBanner";

export const metadata = siteMetadata;

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});
const jura = Jura({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-jura",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${manrope.variable} ${jura.variable}`}
    >
      <head>
        <OrganizationSchema />
        <ServiceSchema />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ClientGlobalStyles />
          <OverlayScrollbarsProvider />
          <ConsentProvider>
            {children}
            <CookieConsentBanner />
            {/* Consent-gated: renders nothing until analytics cookies are accepted */}
            <YandexMetrika />
          </ConsentProvider>
          <div id="modal-root" />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
