import React, { useEffect } from 'react';
import { initializeSEO } from './seo-config';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import SpecialRoutes from './components/SpecialRoutes';
import WhatsAppButton from './components/WhatsAppButton';
import VehicleTypes from './components/VehicleTypes';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    // Initialize SEO configurations
    initializeSEO();
  }, []);

  return (
    <div className="app-container">
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <SpecialRoutes />
        <VehicleTypes/>
      </main>
      
      {/* Sticky/Footer Elements */}
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;