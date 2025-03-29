import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import AndroitAnalyticsLogo from '../images/AndroitAnalyticsLogo.jpeg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                {/* <div className="text-white text-lg font-bold">A</div> */}
                <img src={AndroitAnalyticsLogo} alt="Company Logo" />
              </div>
              <span className="text-2xl font-bold">
                Androit <span className="text-yellow-500">Analytics</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#impacts" className="text-gray-600 hover:text-blue-600">Industries</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#expertise" className="text-gray-600 hover:text-blue-600">Our Expertise</a>
            {/* <a href="#resources" className="text-gray-600 hover:text-blue-600">Resources</a> */}
            <a href="#company" className="text-gray-600 hover:text-blue-600">Company</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-blue-600 px-4">Services</a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-600 px-4">Solutions</a>
              <a href="#industries" className="text-gray-600 hover:text-blue-600 px-4">Industries</a>
              <a href="#resources" className="text-gray-600 hover:text-blue-600 px-4">Resources</a>
              <a href="#company" className="text-gray-600 hover:text-blue-600 px-4">Company</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 mx-4 rounded-full hover:bg-blue-700 text-center">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
