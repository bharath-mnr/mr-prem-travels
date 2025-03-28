// seo-config.js
export const SEOConfig = {
    siteName: "Mr. Prem Tour's & Travels",
    defaultTitle: "Prem Taxi Service Madurai | 24/7 Cab Booking | Airport Transfers",
    defaultDescription: "Book reliable taxi services in Madurai with Mr. Prem Tour's & Travels. AC/Non-AC cabs, airport transfers, outstation trips, and hourly rentals. Best rates guaranteed!",
    baseUrl: "https://www.mrpremtoursmadurai.com",
    keywords: [
      "Madurai taxi service",
      "Taxi booking Madurai",
      "Airport taxi Madurai",
      "Outstation cabs Madurai",
      "Mr. Prem Tours and Travels",
      "24/7 taxi service Madurai",
      "Car rental Madurai",
      "Reliable taxi service Tamil Nadu"
    ],
    businessInfo: {
      name: "Mr. Prem Tour's & Travels",
      address: {
        street: "123 Main Road",
        city: "Madurai",
        state: "Tamil Nadu",
        postalCode: "625001",
        country: "India"
      },
      phone: "+919787614630",
      email: "booking@mrpremtoursmadurai.com",
      openingHours: "24/7",
      priceRange: "₹₹-₹₹₹",
      socialProfiles: {
        facebook: "https://facebook.com/mrpremtoursmadurai",
        instagram: "https://instagram.com/mrpremtoursmadurai"
      }
    }
  };
  
  // Structured Data (JSON-LD)
  export const generateStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SEOConfig.businessInfo.name,
    "image": `${SEOConfig.baseUrl}/images/logo.jpg`,
    "telephone": SEOConfig.businessInfo.phone,
    "email": SEOConfig.businessInfo.email,
    "priceRange": SEOConfig.businessInfo.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEOConfig.businessInfo.address.street,
      "addressLocality": SEOConfig.businessInfo.address.city,
      "addressRegion": SEOConfig.businessInfo.address.state,
      "postalCode": SEOConfig.businessInfo.address.postalCode,
      "addressCountry": SEOConfig.businessInfo.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.9252",
      "longitude": "78.1198"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": Object.values(SEOConfig.businessInfo.socialProfiles)
  });
  
  // Meta Tag Configuration
  export const setMetaTags = (pageTitle = '', pageDescription = '') => {
    const title = pageTitle ? `${pageTitle} | ${SEOConfig.siteName}` : SEOConfig.defaultTitle;
    const description = pageDescription || SEOConfig.defaultDescription;
    
    // Update document tags
    document.title = title;
    
    // Meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: SEOConfig.keywords.join(', ') },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: `${SEOConfig.baseUrl}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${SEOConfig.baseUrl}/images/twitter-card.jpg` },
      { name: 'robots', content: 'index, follow' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'author', content: SEOConfig.siteName },
      { name: 'geo.region', content: 'IN-TN' },
      { name: 'geo.placename', content: 'Madurai' }
    ];
  
    // Add/Update meta tags
    metaTags.forEach(tag => {
      let element = document.querySelector(`meta[${'name' in tag ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      
      Object.keys(tag).forEach(attr => {
        element.setAttribute(attr === 'property' ? 'property' : 'name', tag[attr]);
      });
    });
  
    // Add canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = window.location.href;
  };
  
  // Initialize SEO
  export const initializeSEO = () => {
    // Set default meta tags
    setMetaTags();
  
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(generateStructuredData());
    document.head.appendChild(script);
  };
  
  // Initialize when loaded
  if (document.readyState === 'complete') {
    initializeSEO();
  } else {
    window.addEventListener('load', initializeSEO);
  }