// seo-config.js
export const SEOConfig = {
  siteName: "Mr Prem Travels",
  defaultTitle: "Mr Prem Travels | Premier Taxi Services in Madurai",
  defaultDescription: "24/7 Madurai taxi booking for airport transfers, outstation trips & local rides. AC/Non-AC cabs available. Reliable car rental service in Thirumangalam, Trichy & Tamil Nadu. Book now!",
  baseUrl: "https://www.mrpremtravels.com",
  
  keywords: [
    "madurai taxi",
    "madurai taxi service",
    "madurai taxi booking",
    "thirumangalam taxi",
    "car rental madurai",
    "cab service madurai",
    "airport taxi madurai",
    "outstation cabs madurai",
    "taxi in madurai",
    "car hire madurai",
    "rental car madurai",
    "local taxi service",
    "24/7 taxi service",
    "m.r. prem travels",
    "taxi to coimbatore",
    "chennai taxi service",
    "trichy cab booking",
    "taxi fare madurai",
    "best taxi service madurai",
    "taxi rates madurai",
    "car rental with driver",
    "one way taxi madurai",
    "round trip taxi",
    "madurai to theni taxi",
    "madurai to dindigul taxi",
    "cheap taxi service",
    "luxury car rental madurai",
    "tempo traveller hire",
    "self drive cars madurai",
    "group transportation",
    "wedding car rental"
  ],
  
  businessInfo: {
    name: "M.R. Prem Tour's Travels",
    address: {
      street: "Thirumangalam",
      city: "Madurai",
      state: "Tamil Nadu",
      postalCode: "625706",
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
    { property: 'og:type', content: 'website' },
    { name: 'author', content: SEOConfig.businessInfo.name },
    { name: 'robots', content: 'index, follow' },
    { name: 'geo.region', content: 'IN-TN' },
    { name: 'geo.placename', content: 'Madurai' },
    { property: 'og:url', content: window.location.href },
    { property: 'og:site_name', content: SEOConfig.siteName }
  ];

  metaTags.forEach(tag => {
    const [attrType, attrValue] = tag.property ? ['property', tag.property] : ['name', tag.name];
    let element = document.querySelector(`meta[${attrType}="${attrValue}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      document.head.appendChild(element);
    }
    
    element.setAttribute(attrType, attrValue);
    element.setAttribute('content', tag.content);
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