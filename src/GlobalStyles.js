import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
//COLOR VARIABLES
:root {
  --color-body-primary: hsla(0, 0%, 71%, 1);
  --color-body-secondary: hsla(0, 0%, 33%, 1);
  --color-details-primary: hsla(206, 77%, 47%, 1);
  --color-details-secondary: hsla(0, 0%, 95%, 1);
  --color-details-tertiary: hsla(0, 0%, 12%, 1);
}

//FONTS


@font-face {
  font-family: 'TitleFont';
  src: url('/fonts/adventure.woff2') format('woff2'),
       url('/fonts/adventure.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

//KEYFRAMES
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

//CSS RESET
  *,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
  font-size: 16px;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  padding: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}

//FORMSPREE RESET
/* reset */
form input,
form select,
form textarea,
form fieldset,
form optgroup,
form label,
.StripeElement {
  font-family: inherit;
  font-size: 100%;
  color: inherit;
  border: none;
  border-radius: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
}
form label,
form legend {
  font-size: 0.825rem;
  margin-bottom: 0.5rem;
}
/* border, padding, margin, width */
form input,
form select,
form textarea,
.StripeElement {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.75em 1rem;
  margin-bottom: 1.5rem;
}
form input:focus,
form select:focus,
form textarea:focus,
.StripeElement:focus {
  background-color: white;
  outline-style: solid;
  outline-width: thin;
  outline-color: gray;
  outline-offset: -1px;
}
form [type="text"],
form [type="email"],
.StripeElement {
  width: 100%;
}
form [type="button"],
form [type="submit"],
form [type="reset"] {
  width: auto;
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}
form [type="button"]:focus,
form [type="submit"]:focus,
form [type="reset"]:focus {
  outline: none;
}

form select {
  text-transform: none;
}

//Global Styles


body {
  color: var(--color-details-secondary);
  font-size: calc(19rem/16);
  font-family: "Manrope", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  background-color: hsla(0, 0%, 5%, 1);
}
`;

export default GlobalStyles;
