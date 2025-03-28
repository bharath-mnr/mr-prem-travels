import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-4">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 100 100" 
              className="h-16 w-16 fill-amber-400"
            >
              <path d="M80 40H20c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V44c0-2.2-1.8-4-4-4z"/>
              <circle cx="25" cy="60" r="8" className="fill-white"/>
              <circle cx="75" cy="60" r="8" className="fill-white"/>
              <path d="M85 35h-5c-1.1 0-2-.9-2-2v-3c0-2.2-1.8-4-4-4H26c-2.2 0-4 1.8-4 4v3c0 1.1-.9 2-2 2h-5c-2.8 0-5 2.2-5 5v10c0 2.8 2.2 5 5 5h70c2.8 0 5-2.2 5-5V40c0-2.8-2.2-5-5-5z" className="fill-amber-400 opacity-80"/>
            </svg>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              M.R PREM TOUR'S TRAVELS
            </h2>
          </div>
          
          <div className="space-y-3 pl-4">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>MADURAI, THIRUMANGALAM</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>9787614630, 8270057500</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>wwwmaharaja4@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Google Maps Iframe */}
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3931.705703641455!2d77.97942837502845!3d9.790949990304096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNDcnMjcuNCJOIDc3wrA1OCc1NS4yIkU!5e0!3m2!1sen!2sin!4v1742990287440!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            className="border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 text-center border-t border-white/10 pt-6">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} M.R PREM TOUR'S TRAVELS. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;