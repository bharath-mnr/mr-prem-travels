import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const imageCarousel = [
    '/Car1.png',
    '/car2.png',
    '/car3.png',
    '/car4.png',
  ];

  useEffect(() => {
    setIsLoaded(true);

    let interval;
    const startInterval = () => {
      interval = setInterval(() => {
        setActiveImage((prev) => (prev + 1) % imageCarousel.length);
      }, 5000);
    };
    
    startInterval();
    return () => clearInterval(interval);
  }, [imageCarousel.length]);

  const openWhatsAppChat = () => {
    const phoneNumber = '+918270057500';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hello! I am interested in your travel services.')}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleBookingModal = () => {
    setIsBookingModalOpen(!isBookingModalOpen);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="h-full w-full object-cover object-center filter brightness-50"
        >
          <source src="/car vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className={`transform transition-all duration-1000 ${
              isLoaded ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-12 opacity-0'
            }`}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                className="h-12 w-12 md:h-16 md:w-16 fill-white"
              >
                <path d="M80 40H20c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V44c0-2.2-1.8-4-4-4z"/>
                <circle cx="25" cy="60" r="8" className="fill-amber-400"/>
                <circle cx="75" cy="60" r="8" className="fill-amber-400"/>
                <path d="M85 35h-5c-1.1 0-2-.9-2-2v-3c0-2.2-1.8-4-4-4H26c-2.2 0-4 1.8-4 4v3c0 1.1-.9 2-2 2h-5c-2.8 0-5 2.2-5 5v10c0 2.8 2.2 5 5 5h70c2.8 0 5-2.2 5-5V40c0-2.8-2.2-5-5-5z" className="fill-white opacity-80"/>
              </svg>
            </div>
            <span className={`text-white font-bold text-xl md:text-2xl transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              M.R PREM TOUR'S
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="tel:+918270057500"
              className={`text-white hover:text-amber-400 transition-all duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Contact: +91 9787614630
            </a>
            <button 
              onClick={toggleMobileMenu}
              className="text-white animate-pulse"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-[100] bg-black/90 md:hidden">
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                <a 
                  href="tel:+918270057500"
                  className="text-2xl text-white hover:text-amber-400 transition-colors"
                >
                  📞 +91 9787614630
                </a>
                <button 
                  onClick={toggleMobileMenu}
                  className="absolute top-6 right-6 text-white"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Carousel */}
      <div className={`hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-30 w-[300px] lg:w-[400px] h-[200px] lg:h-[300px] ml-4 lg:ml-12 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`}>
        <div className="relative h-full w-full">
          {imageCarousel.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                index === activeImage 
                  ? 'scale-100 opacity-100' 
                  : 'scale-110 opacity-0'
              }`}
              alt={`Premium Vehicle ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex space-x-2">
            {imageCarousel.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  index === activeImage ? 'bg-amber-400 w-12' : 'bg-white/50'
                }`}
                aria-label={`Show vehicle ${index + 1}`}
              />
            ))}
          </div>
          <span className="text-white font-bold bg-black/40 px-3 py-1 rounded-full text-sm">
            {activeImage + 1}/{imageCarousel.length}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center md:text-left md:items-end md:justify-center px-4 md:pr-16 lg:pr-24">
        <div className="space-y-6 max-w-4xl md:mr-0 md:ml-[350px] lg:ml-[450px]">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            <div className={`overflow-hidden inline-block transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}>
              <span className="inline-block animate-slideUp bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Premium Travel
              </span>
            </div>
            <div className={`overflow-hidden inline-block transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}>
              <span className="inline-block animate-slideUp delay-100 text-white">
                Redefined
              </span>
            </div>
          </h1>
          
          <p className={`text-lg md:text-2xl text-white/90 max-w-3xl mb-8 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Experience luxury journeys with our modern fleet. 24/7 service for all your travel needs.
          </p>

          <div className={`flex justify-center md:justify-start space-x-4 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={toggleBookingModal}
              className="bg-amber-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-400 transition-all transform hover:scale-105 flex items-center justify-center group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Carousel - Centered at Bottom */}
      <div className={`md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-[250px] h-[180px] rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-x-[-50%]' : 'opacity-0 translate-x-20'
      }`}>
        <div className="relative h-full w-full">
          {imageCarousel.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                index === activeImage 
                  ? 'scale-100 opacity-100' 
                  : 'scale-110 opacity-0'
              }`}
              alt={`Premium Vehicle ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex space-x-2">
            {imageCarousel.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  index === activeImage ? 'bg-amber-400 w-12' : 'bg-white/50'
                }`}
                aria-label={`Show vehicle ${index + 1}`}
              />
            ))}
          </div>
          <span className="text-white font-bold bg-black/40 px-3 py-1 rounded-full text-sm">
            {activeImage + 1}/{imageCarousel.length}
          </span>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4">
          <div className="relative w-full max-w-md">
            <button 
              onClick={toggleBookingModal}
              className="absolute -top-10 right-0 text-white hover:text-amber-400"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <BookingForm />
          </div>
        </div>
      )}

      {/* Scroll Prompt */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center transition-all duration-1000 delay-1500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <span className="text-white text-sm mb-2 animate-pulse">Explore More</span>
        <svg 
          className="w-6 md:w-8 h-6 md:h-8 text-white animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;