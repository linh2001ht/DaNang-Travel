import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Contact from "./components/Contact";
import Top from "./components/Top";
import Subcribe from "./components/Subcribe";
export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Top />
      <About />
      <Recommend />
      <Contact/>
      <Subcribe />
      <Footer />
    </div>
  );
}
