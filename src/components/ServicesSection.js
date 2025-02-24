import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-300 rounded-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Data Analysis</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="p-6 border border-gray-300 rounded-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Data Visualization</h3>
            <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="p-6 border border-gray-300 rounded-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Machine Learning</h3>
            <p className="text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;