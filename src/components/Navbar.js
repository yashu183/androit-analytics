import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-800 no-underline">
          My Data Site
        </a>
        <div className="flex gap-5">
          <a href="#services" className="text-gray-500 no-underline hover:text-gray-700">Services</a>
          <a href="#about" className="text-gray-500 no-underline hover:text-gray-700">About Us</a>
          <a href="#contact" className="text-gray-500 no-underline hover:text-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;