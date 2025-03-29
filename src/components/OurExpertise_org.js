import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  // faIndustry, 
  // faStore, 
  // faHospital, 
  // faUniversity, 
  // faHandshake,
  faMicrochip,
  faMagnifyingGlassChart,
  faChessRook,
  faChartSimple,
  faCloudArrowUp
  
} from '@fortawesome/free-solid-svg-icons';

const DepartmentCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-blue-600 mb-4">
      <FontAwesomeIcon icon={icon} className="text-3xl" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const OurExpertiseSection = () => {
  const departments = [
    {
      icon: faBuilding,
      title: "Business Intelligence (BI) Solutions",
      description: "We craft advanced BI solutions, transforming raw data into actionable insights and visualizations."
    },
    {
      icon: faMicrochip,
      title: "AI & Machine Learning Solutions",
      description: "Our AI and ML solutions predict trends, automate processes, and enhance decision-making."
    },
    {
      icon: faMagnifyingGlassChart,
      title: "Advanced Data Analytics",
      description: "We help organizations uncover patterns and trends for strategic decisions through data analysis."
    },
    {
      icon: faChessRook,
      title: "Data Strategy & Governance",
      description: "We develop data strategies and governance frameworks ensuring quality, security, and compliance."
    },
    {
      icon: faChartSimple,
      title: "Data Visualization & Storytelling",
      description: "We design impactful data visualizations that simplify complexity and enhance insight communication."
    },
    {
      icon: faCloudArrowUp,
      title: "Cloud & Big Data Solutions",
      description: "We build scalable cloud and big data solutions for real-time analytics and innovation."
    }
  ];

  return (
    <section id="who-we-help" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our data solutions are designed to help organizations across various industries unlock their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((industry, index) => (
            <DepartmentCard key={index} {...industry} />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see your industry? Our flexible solutions can be tailored to meet the unique needs of any business.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Discuss Your Requirements
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default OurExpertiseSection;
