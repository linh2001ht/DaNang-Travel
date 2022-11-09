import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Top from "./components/Top"
import Testimonials from "./components/Testimonials";
import Subcribe from "./components/Subcribe"
export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Top />
      <Recommend />
      <Subcribe></Subcribe>
      <Footer />
    </div>
  );
}
