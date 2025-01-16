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

function App() {
  return (
    <>
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
    </>
  );
}

const Main = styled.main`
  padding: 0 3rem;

  @media ${QUERIES.mobile} {
    padding: 0 1rem;
  }
`;

export default App;
