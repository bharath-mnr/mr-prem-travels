import React, { useState, useEffect } from 'react';

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger load animation
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: 'City Tours',
      subtitle: 'Explore Local Destinations',
      description: 'Discover the hidden gems and iconic landmarks of our city with our expertly guided tours.',
      bgColor: '#0000fa',
      videoSrc: 'src/assets/tour.mp4'
    },
    {
      title: 'Airport Transfers',
      subtitle: 'Reliable Transportation',
      description: 'Seamless and comfortable transfers to and from the airport, ensuring you never miss a flight.',
      bgColor: '#007bff',
      videoSrc: 'src/assets/airport.mp4'
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
      videoSrc: 'src/assets/wedding.mp4'
    }
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={service.title} 
            className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-50"
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
              style={{ backgroundColor: service.bgColor + 'cc' }} // Added transparency
            >
              <div>
                <h4 className={`text-sm font-semibold uppercase tracking-widest mb-4 opacity-0 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Service
                </h4>
                
                <h2 className={`text-3xl font-bold mb-4 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    {service.title.split(' ')[0]}
                  </span> {service.title.split(' ').slice(1).join(' ')}
                </h2>
                
                <h3 className={`text-xl font-medium mb-4 opacity-0 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  {service.subtitle}
                </h3>
                
                <p className={`text-lg opacity-0 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;