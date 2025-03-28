// seo-config.js
export const SEOConfig = {
  siteName: "M.R. Prem Tour's Travels",
  defaultTitle: "Madurai Taxi Service | 24/7 Cab Booking | Thirumangalam Transfers",
  defaultDescription: "Reliable taxi services in Madurai and Thirumangalam. Professional AC/Non-AC cabs, airport transfers, outstation trips, and local transportation. Book now for comfortable and affordable travel!",
  baseUrl: "https://www.mrpremtravels.com", // Updated domain (hypothetical)
  
  keywords: [
    "Madurai taxi service",
    "Thirumangalam taxi",
    "Madurai cab booking",
    "Outstation cabs Madurai",
    "M.R. Prem Tours and Travels",
    "24/7 taxi service",
    "Car rental Madurai",
    "Thirumangalam transportation",
    "Local taxi service",
    "Airport transfers Madurai"
  ],
  
  businessInfo: {
    name: "M.R. Prem Tour's Travels",
    address: {
      street: "Thirumangalam",
      city: "Madurai",
      state: "Tamil Nadu",
      postalCode: "625706", // Added a typical Thirumangalam postal code
      country: "India"
    },
    phone: "+919787614630",
    alternatePhone: "+918270057500",
    email: "wwwmaharaja4@gmail.com",
    openingHours: "24/7",
    priceRange: "₹₹-₹₹₹",
    serviceArea: [
      "Madurai",
      "Thirumangalam",
      "Trichy",
      "Coimbatore",
      "Chennai"
    ],
    socialProfiles: {
      // Added placeholders - replace with actual social media links when available
      facebook: "#",
      instagram: "#",
      whatsApp: "+919787614630"
    }
  }
};

// Structured Data Generation
export const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "TransportService",
  "name": SEOConfig.businessInfo.name,
  "telephone": SEOConfig.businessInfo.phone,
  "email": SEOConfig.businessInfo.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SEOConfig.businessInfo.address.street,
    "addressLocality": SEOConfig.businessInfo.address.city,
    "addressRegion": SEOConfig.businessInfo.address.state,
    "postalCode": SEOConfig.businessInfo.address.postalCode,
    "addressCountry": SEOConfig.businessInfo.address.country
  },
  "areaServed": SEOConfig.businessInfo.serviceArea,
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": SEOConfig.businessInfo.phone,
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Tamil"]
  }
});

// Meta Tag Configuration
export const setMetaTags = (pageTitle = '', pageDescription = '') => {
  const title = pageTitle ? `${pageTitle} | ${SEOConfig.siteName}` : SEOConfig.defaultTitle;
  const description = pageDescription || SEOConfig.defaultDescription;
  
  document.title = title;
  
  const metaTags = [
    { name: 'description', content: description },
    { name: 'keywords', content: SEOConfig.keywords.join(', ') },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'local business' },
    { name: 'author', content: SEOConfig.businessInfo.name },
    { name: 'robots', content: 'index, follow' },
    { name: 'geo.region', content: 'IN-TN' },
    { name: 'geo.placename', content: 'Madurai' }
  ];

  // Update or create meta tags
  metaTags.forEach(tag => {
    let element = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      document.head.appendChild(element);
    }
    
    Object.keys(tag).forEach(attr => {
      element.setAttribute(attr === 'property' ? 'property' : 'name', tag[attr]);
    });
  });
};

// Initialize SEO
export const initializeSEO = () => {
  setMetaTags();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(generateStructuredData());
  document.head.appendChild(script);
};

// Initialize when page loads
if (document.readyState === 'complete') {
  initializeSEO();
} else {
  window.addEventListener('load', initializeSEO);
}

export default SEOConfig;