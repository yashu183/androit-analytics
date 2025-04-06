import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import AndroitAnalyticsLogo from '../images/AndroitAnalyticsLogo.png'; 


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-24 h-24 rounded-full flex items-center justify-center">
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
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={22} />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              <Twitter size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook size={22} />
              </a> */}
              <a href="https://www.instagram.com/androit.analytics?igsh=MWNtaHg4ZXZubnlpZg==" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#impacts" className="hover:text-primary transition-colors">Industries</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#expertise" className="hover:text-primary transition-colors">Our Expertise</a></li>
              <li><a href="#contact-us" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-2">
              <li>Data Analytics</li>
              <li>Data Engineering</li>
              <li>Cloud Solutions</li>
              <li>AI & Machine Learning</li>
              <li>Business Intelligence</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-2">
              <li>Hyderabad</li>
              <li>Telangana</li>
              <li>India</li>
              <li className="pt-2">
                email : <span> </span>
                <a href="mailto:contact@androitanalytics.com" className="hover:text-primary transition-colors">
                  androit.analytics@gmail.com
                </a>
              </li>
              <li>
                mobile : <span> </span>
                <a href="tel:+919502266088" className="hover:text-primary transition-colors">
                +91 95022 66088
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
              {/* eslint-disable-next-line */}
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              {/* eslint-disable-next-line */}
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              {/* eslint-disable-next-line */}
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
