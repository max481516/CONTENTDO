import React from "react";
import "overlayscrollbars/styles/overlayscrollbars.css";
import "react-phone-number-input/style.css";
import "swiper/css/bundle";
import ClientGlobalStyles from "./ClientGlobalStyles";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import OverlayScrollbarsProvider from "./OverlayScrollbarsProvider";
import NetlifyFormsDetect from "./NetlifyFormsDetect";
import { Inter, Manrope, Jura } from "next/font/google";

export const metadata = {
  title: "CONTENTDO",
  description: "Next.js + TypeScript bootstrap",
};

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
  display: "block",
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
      <head />
      <body>
        {/* Hidden server-rendered forms for Netlify detection - must be outside client components */}
        <NetlifyFormsDetect />
        <StyledComponentsRegistry>
          <ClientGlobalStyles />
          <OverlayScrollbarsProvider />
          {children}
          <div id="modal-root" />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
