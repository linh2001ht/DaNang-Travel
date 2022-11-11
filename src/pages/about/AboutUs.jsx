import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ScrollToTop from '../../components/ScrollToTop';
import About from '../../components/About';


const AboutUs = () => {
  return <div>
      <ScrollToTop />
      <Navbar />
      <About />
      <Footer />
  </div>;
};

export default AboutUs;