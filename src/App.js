import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Ads from "./components/Ads";
import News from "./pages/News";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Ads />
      <News />
      <Footer />
    </>
  );
}
