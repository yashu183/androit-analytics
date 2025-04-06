import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AndroitAnalyticsLogo from '../images/AndroitAnalyticsLogo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary text-white shadow-md shadow-white/10 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src={AndroitAnalyticsLogo} alt="Company Logo" />
              </div>
              <span className="text-2xl font-bold">
                Androit <span className="text-primary">Analytics</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#impacts" className="text-white hover:text-primary">Industries</a>
            <a href="#services" className="text-white hover:text-primary">Services</a>
            <a href="#expertise" className="text-white hover:text-primary">Our Expertise</a>
            <a href="#contact-us" className="text-white hover:text-primary">Contact Us</a>
            {/* <a href="#contact" className="bg-primary text-secondary font-semibold px-6 py-2 rounded-full hover:bg-primary/90">
              Contact Us
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-white hover:text-primary px-4">Services</a>
              <a href="#solutions" className="text-white hover:text-primary px-4">Solutions</a>
              <a href="#industries" className="text-white hover:text-primary px-4">Industries</a>
              <a href="#resources" className="text-white hover:text-primary px-4">Resources</a>
              <a href="#contact-us" className="text-white hover:text-primary px-4">Contact Us</a>
              {/* <a href="#contact" className="bg-primary text-secondary px-6 py-2 mx-4 rounded-full hover:bg-primary/90 text-center">
                Contact Us
              </a> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
