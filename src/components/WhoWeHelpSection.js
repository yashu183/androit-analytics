import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faChartLine,
  faBuildingColumns, 
} from '@fortawesome/free-solid-svg-icons';

const IndustryCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-primary-dark mb-4">
      <FontAwesomeIcon icon={icon} className="text-3xl" />
    </div>
    <h3 className="text-xl font-bold text-primary-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const WhoWeHelpSection = () => {
  const industries = [
    {
      icon: faRocket,
      title: "Startups",
      description: "We help early-stage companies build scalable data solutions, turning raw data into insights for growth."
    },
    {
      icon: faChartLine,
      title: "Mid-Sized Companies",
      description: "We optimize data pipelines, implement business intelligence, and provide AI-driven decision-making tools."
    },
    {
      icon: faBuildingColumns,
      title: "Large Enterprises",
      description: "We enhance existing data strategies, implement enterprise-scale AI, and drive digital transformation."
    },
  ];

  return (
    <section id="who-we-help" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Who can we help?</h2>
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
            className="inline-block bg-primary text-secondary font-bold font-medium px-8 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
