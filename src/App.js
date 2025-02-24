import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;