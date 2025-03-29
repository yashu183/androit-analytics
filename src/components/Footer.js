import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faTwitter, 
  faFacebook, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import AndroitAnalyticsLogo from '../images/AndroitAnalyticsLogo.jpeg'; 


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <img src={AndroitAnalyticsLogo} alt="Company Logo" />
              </div>
              <span className="text-2xl font-bold text-white">
                Androit <span className="text-yellow-500">Analytics</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering businesses with data-driven insights and innovative solutions 
              for sustainable growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {/* <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li> */}
              <h4 className="hover:text-white transition-colors">Services</h4>
              <h4 className="hover:text-white transition-colors">Solutions</h4>
              <h4 className="hover:text-white transition-colors">Industries</h4>
              <h4 className="hover:text-white transition-colors">About Us</h4>
              <h4 className="hover:text-white transition-colors">Contact</h4>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#analytics" className="hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#engineering" className="hover:text-white transition-colors">Data Engineering</a></li>
              <li><a href="#cloud" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#ai" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
              <li><a href="#bi" className="hover:text-white transition-colors">Business Intelligence</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li>123 Data Street</li>
              <li>Tech City, TC 12345</li>
              <li>United States</li>
              <li className="pt-2">
                <a href="mailto:contact@androitanalytics.com" className="hover:text-white transition-colors">
                  contact@androitanalytics.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © {currentYear} Androit Analytics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
