import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import styled from "styled-components";
import { QUERIES } from "./constants";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

function App() {
  return (
    <>
      <OverlayScrollbarsComponent defer>
        <Header />
        <Main>
          <Hero />
          <Portfolio />
          <AboutUs />
          <Price />
          <Info />
          <ContactUs />
        </Main>
        <Footer />
      </OverlayScrollbarsComponent>
    </>
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

export default App;
