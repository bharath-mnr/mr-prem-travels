import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SpecialRoutes = () => {
  // SEO Metadata
  const pageTitle = "Special Taxi Routes from Madurai | Mr Prem Travels Tour Packages";
  const pageDescription = "Book premium taxi services for popular routes: Madurai to Rameswaram, Kodaikanal, Kanyakumari & Kerala. AC cab packages with experienced drivers.";
  const keywords = [
    "madurai taxi routes",
    "rameswaram taxi service",
    "kodaikanal tour package",
    "kanyakumari taxi from madurai",
    "munnar taxi booking",
    "thekkady travel package"
  ];

  useEffect(() => {
    // Update document meta tags
    document.title = pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords.join(', '));

    // Structured Data for Carousel
    const carouselSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": destinations.map((destination, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": destination.name,
          "image": destination.image,
          "description": `Book Taxi from Madurai to ${destination.name} - Daily Packages & Round Trips Available`,
          "offeredBy": {
            "@type": "LocalBusiness",
            "name": "M.R Prem Tour's Travels",
            "telephone": "+919787614630"
          }
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(carouselSchema);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const destinations = [
    { 
      name: "Madurai", 
      image: "/Madurai.jpg",
      routeInfo: "Local City Tours & Temple Visits"
    },
    { 
      name: "Rameswaram", 
      image: "/Rameswaram.jpg",
      routeInfo: "Pilgrimage Taxi Package (165km | 3.5hrs)"
    },
    { 
      name: "Munnar", 
      image: "/Kerala.jpg",
      routeInfo: "Hill Station Tour (160km | 4hrs)"
    },
    { 
      name: "Kanyakumari", 
      image: "/Kanyakumari.jpg",
      routeInfo: "Sunrise/Sunset Trips (240km | 5hrs)"
    },
    { 
      name: "Thiruvananthapuram", 
      image: "/Thiruvananthapuram.jpg",
      routeInfo: "Kerala Capital Route (270km | 6hrs)"
    },
    { 
      name: "Kodaikkanal", 
      image: "/Kodaikkanal.jpg",
      routeInfo: "Mountain Drive (120km | 3hrs)"
    },
    { 
      name: "Varkala", 
      image: "/Varkala.jpg",
      routeInfo: "Beach Getaway Package (300km | 7hrs)"
    },
    { 
      name: "Thekkady", 
      image: "/Thekkady.jpg",
      routeInfo: "Wildlife Safari Tours (140km | 4hrs)"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "M.R Prem Tour's Travels",
          "image": destinations.map(d => d.image),
          "priceRange": "₹₹-₹₹₹",
          "telephone": "+919787614630",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madurai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "625706"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "9.9252",
            "longitude": "78.1198"
          },
          "sameAs": ["#"]
        })}
      </script>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Side Text with Semantic HTML */}
          <header className="lg:w-1/3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium <span className="text-amber-600">Travel Routes</span><br />
              from Madurai
            </h1>
            <p className="text-lg text-gray-600">
              Reliable taxi services for popular South Indian destinations. 
              Daily packages & round trips with experienced drivers.
            </p>
          </header>

          {/* Carousel with ARIA Labels */}
          <div className="lg:w-2/3 w-full" role="region" aria-label="Popular travel routes">
            <Slider {...sliderSettings} className="slick-slider">
              {destinations.map((destination, index) => (
                <div key={index} className="px-2 focus:outline-none">
                  <article className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={destination.image}
                      alt={`Taxi service from Madurai to ${destination.name} - ${destination.routeInfo}`}
                      loading="lazy"
                      className="w-full h-96 object-cover transform hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h2 className="text-2xl font-bold text-white">
                        {destination.name}
                      </h2>
                      <p className="text-white/90 mt-2">
                        {destination.routeInfo}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialRoutes;