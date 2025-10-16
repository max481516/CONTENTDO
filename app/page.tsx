"use client";

import { Suspense } from "react";
import styled from "styled-components";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Portfolio from "../src/components/Portfolio";
import AboutUs from "../src/components/AboutUs";
import PriceInfo from "../src/components/PriceInfo";
import ContactUs from "../src/components/ContactUs";
import Footer from "../src/components/Footer";
import LoadingSpinner from "../src/components/LoadingSpinner";
import { QUERIES } from "../src/constants.js";

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Header />
      <Main>
        <Hero />
        <Portfolio />
        <AboutUs />
        <PriceInfo />
        <ContactUs />
      </Main>
      <Footer />
    </Suspense>
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
