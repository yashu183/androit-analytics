import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faIndustry, 
  faStore, 
  faHospital, 
  faUniversity, 
  faHandshake 
} from '@fortawesome/free-solid-svg-icons';

const IndustryCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-blue-600 mb-4">
      <FontAwesomeIcon icon={icon} className="text-3xl" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const WhoWeHelpSection = () => {
  const industries = [
    {
      icon: faBuilding,
      title: "Enterprise Organizations",
      description: "Large-scale businesses looking to transform their data infrastructure and analytics capabilities."
    },
    {
      icon: faIndustry,
      title: "Manufacturing",
      description: "Optimize production processes and supply chain with data-driven insights and predictive analytics."
    },
    {
      icon: faStore,
      title: "Retail & E-commerce",
      description: "Enhance customer experience and optimize inventory management through advanced analytics."
    },
    {
      icon: faHospital,
      title: "Healthcare",
      description: "Improve patient care and operational efficiency with secure, compliant data solutions."
    },
    {
      icon: faUniversity,
      title: "Financial Services",
      description: "Drive better financial decisions with real-time analytics and risk assessment tools."
    },
    {
      icon: faHandshake,
      title: "Startups & SMBs",
      description: "Scale your business with cost-effective data solutions tailored to your growth needs."
    }
  ];

  return (
    <section id="who-we-help" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Who Can We Help?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our data solutions are designed to help organizations across various industries unlock their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see your industry? Our flexible solutions can be tailored to meet the unique needs of any business.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
