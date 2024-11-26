import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <AboutUs />
        <Price />
        <Info />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
