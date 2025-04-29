import { useEffect } from "react";
import {
  OverlayScrollbarsComponent,
  useOverlayScrollbars,
} from "overlayscrollbars-react";
import "overlayscrollbars/styles/overlayscrollbars.css"; // Use this path if needed
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
/* import PriceInfo from "./components/PriceInfo"; */
import Portfolio from "./components/Portfolio";
/* import Price from "./components/Price"; */
import styled from "styled-components";
import { QUERIES } from "./constants";

function App() {
  // Initialize OS on the body element
  const [initBodyOS] = useOverlayScrollbars({
    options: {
      scrollbars: {
        autoHide: "scroll",
        clickScroll: true,
        theme: "os-theme-light", // Choose your theme here
      },
    },
    defer: true,
    events: {
      initialized: () => console.log("OverlayScrollbars initialized on body"),
    },
  });

  useEffect(() => {
    // Pass the body element as the target for OS initialization
    initBodyOS(document.body);
  }, [initBodyOS]);

  return (
    <>
      {/* Optionally, you can also wrap your main content in an OS component */}
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
          {/* <Price /> */}
          {/* <PriceInfo /> */}
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
