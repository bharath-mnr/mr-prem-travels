import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VehicleTypes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const vehicleTypes = [
    {
      type: 'Sedan',
      image: '/sedan.png',
      rentalPlans: [
        {
          distance: 'Above 250 km (Per day)',
          perKmCost: '₹13',
          driverBetta: '₹300',
          extraCharges: 'Toll, parking, Hills station charges extra'
        },
        {
          distance: 'Below 250 km (Per day)',
          rentPerDay: '₹1600',
          fuelCostPerKm: '₹10',
          driverBetta: 'No',
          extraCharges: 'Toll, parking, Hills station charges extra'
        }
      ]
    },
    {
        type: 'SUV',
        image: '/Suv1.png',
        rentalPlans: [
          {
            distance: 'Above 250 km (Per day)',
            perKmCost: '₹16',
            driverBetta: '₹400',
            extraCharges: 'Toll, parking, Hills station charges extra'
          },
          {
            distance: 'Below 250 km (Per day)',
            rentPerDay: '₹2000',
            fuelCostPerKm: '₹11',
            driverBetta: 'No',
            extraCharges: 'Toll, parking, Hills station charges extra'
          }
        ]
      },
      {
        type: 'Inova Crysta',
        image: '/Innova.PNG',
        rentalPlans: [
          {
            distance: 'Above 250 km (Per day)',
            perKmCost: '₹21',
            driverBetta: '₹400',
            extraCharges: 'Toll, parking, Hills station charges extra'
          },
          {
            distance: 'Below 250 km (Per day)',
            rentPerDay: '₹2500',
            fuelCostPerKm: '₹16',
            driverBetta: 'No',
            extraCharges: 'Toll, parking, Hills station charges extra'
          }
        ]
      },
      {
        type: 'Tempo',
        image: '/Tempo.PNG',
        rentalPlans: [
          {
            distance: 'Above 250 km (Per day)',
            perKmCost: '₹21',
            driverBetta: '₹500',
            extraCharges: 'Toll, parking, Hills station charges extra'
          },
          {
            distance: 'Below 250 km (Per day)',
            rentPerDay: '₹2600',
            fuelCostPerKm: '₹16',
            driverBetta: 'No',
            extraCharges: 'Toll, parking, Hills station charges extra'
          }
        ]
      },
      {
        type: '18 Seater',
        image: '/18.png',
        rentalPlans: [
          {
            distance: 'Above 250 km (Per day)',
            perKmCost: '₹29',
            driverBetta: '₹500',
            extraCharges: 'Toll, parking, Hills station charges extra'
          },
          {
            distance: 'Below 250 km (Per day)',
            rentPerDay: '₹4000',
            fuelCostPerKm: '₹19',
            driverBetta: 'No',
            extraCharges: 'Toll, parking, Hills station charges extra'
          }
        ]
      },
      {
        type: '21 Seater',
        image: '/Bus.png',
        rentalPlans: [
          {
            distance: 'Above 250 km (Per day)',
            perKmCost: '₹38',
            driverBetta: '₹500',
            extraCharges: 'Toll, parking, Hills station charges extra'
          },
          {
            distance: 'Below 250 km (Per day)',
            rentPerDay: '₹5200',
            fuelCostPerKm: '₹28',
            driverBetta: 'No',
            extraCharges: 'Toll, parking, Hills station charges extra'
          }
        ]
      },
     
    // ... other vehicle types can be added similarly
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % vehicleTypes.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? vehicleTypes.length - 1 : prevIndex - 1
    );
  };

  const handleBookNow = () => {
    const vehicle = vehicleTypes[currentIndex];
    const whatsappNumber = '919787614630';
    const message = `I'm interested in booking the ${vehicle.type}. Could you provide more details?`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Select Your Vehicle
        </h2>
        
        <div className="relative max-w-xl mx-auto">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={handlePrev} 
              className="bg-white/70 p-2 rounded-full shadow-md hover:bg-white"
            >
              <ChevronLeft className="text-amber-600" />
            </button>
          </div>
          
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={handleNext} 
              className="bg-white/70 p-2 rounded-full shadow-md hover:bg-white"
            >
              <ChevronRight className="text-amber-600" />
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="relative">
              <img 
                src={vehicleTypes[currentIndex].image} 
                alt={vehicleTypes[currentIndex].type} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="text-2xl font-bold">{vehicleTypes[currentIndex].type}</h3>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              {vehicleTypes[currentIndex].rentalPlans.map((plan, planIndex) => (
                <div key={planIndex} className="border-b pb-4 last:border-b-0">
                  <h4 className="text-lg font-semibold mb-2">{plan.distance}</h4>
                  <div className="grid grid-cols-2 gap-4 text-gray-700">
                    {plan.perKmCost && (
                      <div>
                        <p className="font-semibold">Per KM Cost</p>
                        <p>{plan.perKmCost}</p>
                      </div>
                    )}
                    {plan.rentPerDay && (
                      <div>
                        <p className="font-semibold">Rent Per Day</p>
                        <p>{plan.rentPerDay}</p>
                      </div>
                    )}
                    {plan.fuelCostPerKm && (
                      <div>
                        <p className="font-semibold">Fuel Cost Per KM</p>
                        <p>{plan.fuelCostPerKm}</p>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold">Driver Betta</p>
                      <p>{plan.driverBetta}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-semibold">Extra Charges</p>
                      <p className="text-sm">{plan.extraCharges}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center mt-4">
                <button 
                  onClick={handleBookNow}
                  className="bg-green-500 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition-colors flex items-center"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="white" 
                    className="mr-2"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                  </svg>
                  Book on WhatsApp
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {vehicleTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleTypes;