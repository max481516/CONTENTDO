"use client";

import styled from "styled-components";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import Header from "../src/components/Header.jsx";
import Hero from "../src/components/Hero.jsx";
import Portfolio from "../src/components/Portfolio.jsx";
import AboutUs from "../src/components/AboutUs.jsx";
import PriceInfo from "../src/components/PriceInfo.jsx";
import ContactUs from "../src/components/ContactUs.jsx";
import Footer from "../src/components/Footer.jsx";
import { QUERIES } from "../src/constants.js";

export default function Page() {
  return (
    <OverlayScrollbarsComponent
      options={{
        scrollbars: {
          autoHide: "scroll",
          clickScroll: true,
          theme: "os-theme-light",
        },
      }}
      className="os-theme-light"
      defer
    >
      <Header />
      <Main>
        <Hero />
        <Portfolio />
        <AboutUs />
        <PriceInfo />
        <ContactUs />
      </Main>
      <Footer />
    </OverlayScrollbarsComponent>
  );
}

const Main = styled.main`
  padding: 0 3rem;
  @media ${QUERIES.largeTabletAndDown} {
    padding: 0 2.5rem;
  }
  @media ${QUERIES.tabletAndDown} {
    padding: 0 2rem;
  }
  @media ${QUERIES.mobile} {
    padding: 0 1rem;
  }
`;
