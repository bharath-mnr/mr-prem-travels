// components/Services.jsx
import React, { useState, useEffect, useMemo } from 'react';

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // SEO Metadata
  const pageTitle = "Taxi Services in Madurai | Airport Transfers | Mr Prem Travels";
  const pageDescription = "24/7 Taxi Services in Madurai: Airport transfers, city tours, corporate transport & wedding car rentals. Book AC/Non-AC cabs with GPS tracking.";
  
  // Using useMemo to memoize the keywords array
  const keywords = useMemo(() => [
    "madurai taxi services",
    "airport transfer madurai",
    "corporate taxi service",
    "wedding car rental madurai",
    "local taxi booking",
    "outstation cabs madurai"
  ], []);

  const services = [
    {
      title: 'City Tours',
      subtitle: 'Explore Local Destinations',
      description: 'Discover the hidden gems and iconic landmarks of our city with our expertly guided tours.',
      bgColor: '#0000fa',
      videoSrc: '/tour.mp4'
    },
    {
      title: 'Airport Transfers',
      subtitle: 'Reliable Transportation',
      description: 'Seamless and comfortable transfers to and from the airport, ensuring you never miss a flight.',
      bgColor: '#007bff',
      videoSrc: '/airport.mp4'
    },
    {
      title: 'Corporate Services',
      subtitle: 'Professional Travel Solutions',
      description: 'Tailored transportation services for businesses, ensuring comfort and punctuality for your team.',
      bgColor: '#17a2b8',
      videoSrc: 'https://framerusercontent.com/assets/8JalYGtFIswMyEMfKWvZtqiX7nk.mp4'
    },
    {
      title: 'Wedding & Events',
      subtitle: 'Special Occasion Transport',
      description: 'Make your special day memorable with our luxurious and reliable event transportation.',
      bgColor: '#28a745',
      videoSrc: '/wedding.mp4'
    }
  ];

  // Memoize the services array too to prevent unnecessary re-renders
  const memoizedServices = useMemo(() => services, []);

  useEffect(() => {
    // Page load animation
    setIsLoaded(true);
    
    // SEO Implementation
    document.title = pageTitle;
    
    // Update meta tags
    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Set meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', keywords.join(', '));
    updateOGTag('og:title', pageTitle);
    updateOGTag('og:description', pageDescription);
    updateOGTag('og:type', 'website');
    updateOGTag('og:url', window.location.href);
    
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TransportService",
      "serviceType": "Taxi Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Mr Prem Travels",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Madurai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "625706",
          "streetAddress": "Thirumangalam"
        },
        "priceRange": "₹₹-₹₹₹",
        "telephone": "+919787614630"
      },
      "areaServed": ["Madurai", "Thirumangalam", "Trichy", "Coimbatore"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Taxi Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airport Transfers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "City Tours"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'service-structured-data';
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptElement = document.getElementById('service-structured-data');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, [pageTitle, pageDescription, keywords]); // Now keywords is memoized and won't cause re-renders

  return (
    <div className="p-4 md:p-8 bg-gray-50">
      {/* Add semantic HTML elements */}
      <h1 className="sr-only">Taxi Services by Mr Prem Travels</h1>
      
      {/* Services grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {memoizedServices.map((service, index) => (
          <article 
            key={service.title} 
            className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
            itemScope 
            itemType="https://schema.org/Service"
          >
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-50"
                aria-hidden="true"
              >
                <source 
                  src={service.videoSrc}
                  type="video/mp4" 
                />
              </video>
            </div>

            {/* Content Overlay */}
            <div 
              className="relative z-10 p-8 text-white h-full flex flex-col justify-between"
              style={{ backgroundColor: service.bgColor + 'cc' }}
              aria-label={`${service.title} details`}
            >
              <div>
                <h4 className={`text-sm font-semibold uppercase tracking-widest mb-4 opacity-0 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Service
                </h4>
                
                <h2 
                  itemProp="name"
                  className={`text-3xl font-bold mb-4 transition-all duration-1000 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    {service.title.split(' ')[0]}
                  </span> {service.title.split(' ').slice(1).join(' ')}
                </h2>
                
                <h3 className={`text-xl font-medium mb-4 opacity-0 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  {service.subtitle}
                </h3>
                
                <p 
                  itemProp="description"
                  className={`text-lg opacity-0 transition-all duration-1000 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Services;