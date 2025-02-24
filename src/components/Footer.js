import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} My Data Site</p>
      </div>
    </footer>
  );
};

export default Footer;