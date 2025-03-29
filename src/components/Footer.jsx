import React from 'react';

const Footer = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "M.R Prem Tour's Travels",
    "image": "/logo.png",
    "priceRange": "₹₹-₹₹₹",
    "telephone": ["+919787614630", "+918270057500"],
    "email": "wwwmaharaja4@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thirumangalam",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "625706",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.7909499",
      "longitude": "77.9794283"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": ["#"] // Add social media links here
  };

  return (
    <footer className="bg-black/90 text-white py-16" role="contentinfo">
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-4">
        {/* Contact Information */}
        <div className="space-y-6" itemScope itemType="https://schema.org/LocalBusiness">
          <div className="flex items-center space-x-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 100 100" 
              className="h-16 w-16 fill-amber-400"
              aria-hidden="true"
            >
              {/* ... SVG paths ... */}
            </svg>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              <span itemProp="name">M.R PREM TOUR'S TRAVELS</span>
            </h2>
          </div>
          
          <div className="space-y-3 pl-4">
            <div className="flex items-center space-x-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* ... SVG path ... */}
              </svg>
              <span>
                <span itemProp="addressLocality">MADURAI</span>,{' '}
                <span itemProp="streetAddress">THIRUMANGALAM</span>,{' '}
                <span itemProp="addressRegion">TAMIL NADU</span>{' '}
                <span itemProp="postalCode">625706</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* ... SVG path ... */}
              </svg>
              <span>
                <a href="tel:+919787614630" itemProp="telephone" className="hover:text-amber-400 transition-colors">
                  9787614630
                </a>
                {', '}
                <a href="tel:+918270057500" itemProp="telephone" className="hover:text-amber-400 transition-colors">
                  8270057500
                </a>
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* ... SVG path ... */}
              </svg>
              <a href="mailto:wwwmaharaja4@gmail.com" itemProp="email" className="hover:text-amber-400 transition-colors">
                wwwmaharaja4@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Iframe */}
        <div 
          className="rounded-xl overflow-hidden shadow-2xl" 
          itemProp="hasMap" 
          itemType="https://schema.org/Map"
        >
          <iframe 
            title="Business Location Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3931.705703641455!2d77.97942837502845!3d9.790949990304096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNDclMjcuNCJOIDc3wrA1OCc1NS4yIkU!5e0!3m2!1sen!2sin!4v1742990287440!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            className="border-0"
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 text-center border-t border-white/10 pt-6">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} <span itemProp="name">M.R PREM TOUR'S TRAVELS</span>. All Rights Reserved.
        </p>
        <p className="mt-2 text-xs text-white/50">
          <a href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</a> |{' '}
          <a href="/terms-of-service" className="hover:text-amber-400 transition-colors">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;