import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImpactsSection from './components/ImpactsSection';
import WhoWeHelpSection from './components/WhoWeHelpSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhereDoWeStandSection from './components/WhereDoWeStandSection';
import OurExpertiseSection from './components/OurExpertise';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ImpactsSection />
      <WhereDoWeStandSection />
      <OurExpertiseSection/>
      <WhoWeHelpSection />
      {/* <AboutUsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
