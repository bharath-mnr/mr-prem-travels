import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SpecialRoutes = () => {
  const destinations = [
    { name: "Madurai", image: "/Madurai.jpg" },
    { name: "Rameswaram", image: "/Rameswaram.jpg" },
    { name: "Munnar", image: "/Kerala.jpg" },
    { name: "Kanyakumari", image: "/Kanyakumari.jpg" },
    { name: "Thiruvananthapuram", image: "/Thiruvananthapuram.jpg" },
    { name: "Kodaikkanal", image: "/Kodaikkanal.jpg" },
    { name: "Varkala", image: "/Varkala.jpg" },
    { name: "Thekkady ", image: "/Thekkady.jpg" }
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Side Text */}
          <div className="lg:w-1/3">
            <h5 className="text-2xl font-bold text-gray-800 mb-4">
              M.R PREM TOUR'S TRAVELS
            </h5>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <br className="hidden md:block" />
              <span className="text-amber-600">Special Routes</span>
            </h1>
          </div>

          {/* Right Side Carousel */}
          <div className="lg:w-2/3 w-full">
            <Slider {...sliderSettings} className="slick-slider">
              {destinations.map((destination, index) => (
                <div key={index} className="px-2 focus:outline-none">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      loading="lazy"
                      className="w-full h-96 object-cover transform hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white">
                        {destination.name}
                      </h3>
                    </div>
                  </div>
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