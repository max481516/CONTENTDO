"use client";

import { Suspense } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import AboutUs from "@/components/AboutUs";
import PriceInfo from "@/components/PriceInfo";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";
import { QUERIES } from "@/constants";

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
