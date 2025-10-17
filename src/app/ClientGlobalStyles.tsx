"use client";

import { createGlobalStyle } from "styled-components";
import GlobalStyles from "@/styles/GlobalStyles";

const Vars = createGlobalStyle`
  :root {
    --color-body-primary: hsla(0, 0%, 71%, 1);
    --color-body-secondary: hsla(0, 0%, 33%, 1);
    --color-details-primary: #08a4a7;
    --color-details-secondary: hsla(0, 0%, 95%, 1);
    --color-details-tertiary: hsla(0, 0%, 12%, 1);
    --color-background: hsla(0, 0%, 5%, 1);
  }
`;

export default function ClientGlobalStyles() {
  return (
    <>
      <Vars />
      <GlobalStyles />
    </>
  );
}
