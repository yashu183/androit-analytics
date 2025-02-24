import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">Unlock the Power of Your Data</h1>
        <p className="text-lg text-gray-600 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="bg-blue-500 text-white py-3 px-8 text-lg rounded-md hover:bg-blue-600">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;