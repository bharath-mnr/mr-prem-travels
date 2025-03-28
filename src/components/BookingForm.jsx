import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    startDate: '',
    endDate: '',
    location: '',
    peopleCount: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp message
    const message = `New Booking Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Start Date: ${formData.startDate}
End Date: ${formData.endDate}
Location: ${formData.location}
Number of People: ${formData.peopleCount}`;

    // WhatsApp number to send the message
    const phoneNumber = '+918270057500';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    try {
      // Open WhatsApp with pre-filled message
      window.open(whatsappUrl, '_blank');
      
      // Reset form and show success message
      setFormData({
        name: '',
        phone: '',
        email: '',
        startDate: '',
        endDate: '',
        location: '',
        peopleCount: ''
      });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Book Your Travel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input 
            type="tel" 
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required 
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input 
              type="date" 
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input 
              type="date" 
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Location
          </label>
          <input 
            type="text" 
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required 
            placeholder="Where do you want to travel?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="peopleCount" className="block text-sm font-medium text-gray-700 mb-1">
            Number of People
          </label>
          <input 
            type="number" 
            id="peopleCount"
            name="peopleCount"
            value={formData.peopleCount}
            onChange={handleChange}
            required 
            min="1"
            placeholder="How many people are traveling?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Book Now'}
        </button>

        {submitSuccess && (
          <div className="text-green-600 text-center mt-2">
            Booking request sent successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;