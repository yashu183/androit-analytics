import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
const ExpertiseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');

  // Sample expertise data - replace with your actual content
  const expertiseCards = [
    {
      id: 1,
      title: "Business Intelligence (BI) Solutions",
      description: "We craft advanced BI solutions, transforming raw data into actionable insights and visualizations.",
      icon: faBuilding
    },
    {
      id: 2,
      title: "AI & Machine Learning Solutions",
      description: "Our AI and ML solutions predict trends, automate processes, and enhance decision-making.",
      icon: faMicrochip
    },
    {
      id: 3,
      title: "Advanced Data Analytics",
      description: "We help organizations uncover patterns and trends for strategic decisions through data analysis.",
      icon: faMagnifyingGlassChart
    },
    {
      id: 4,
      title: "Data Strategy & Governance",
      description: "We develop data strategies and governance frameworks ensuring quality, security, and compliance.",
      icon: faChessRook
    },
    {
      id: 5,
      title: "Data Visualization & Storytelling",
      description: "We design impactful data visualizations that simplify complexity and enhance insight communication.",
      icon: faChartSimple
    },
    {
      id: 6,
      title: "Cloud & Big Data Solutions",
      description: "We build scalable cloud and big data solutions for real-time analytics and innovation.",
      icon: faCloudArrowUp
    }
    
  ];

  const goToPrevious = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? expertiseCards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === expertiseCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Reset animation direction after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection('');
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="expertise">
      <div className="w-full max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary-dark">Our Expertise</h2>
        
        <div className="relative overflow-hidden py-4">
          {/* Cards container */}
          <div className="relative h-80">
            {expertiseCards.map((card, index) => {
              // Only render nearby cards for performance
              if (Math.abs(index - currentIndex) > 2 && 
                  !(index === expertiseCards.length - 1 && currentIndex === 0) && 
                  !(index === 0 && currentIndex === expertiseCards.length - 1)) {
                return null;
              }
              
              let position = "left-full opacity-0";
              let zIndex = 0;
              let scale = "scale-95";
              
              if (index === currentIndex) {
                position = "left-0 opacity-100";
                zIndex = 30;
                scale = "scale-100";
              } else if (
                (index === currentIndex + 1) || 
                (currentIndex === expertiseCards.length - 1 && index === 0)
              ) {
                position = "left-3/4 opacity-50";
                zIndex = 20;
              } else if (
                (index === currentIndex - 1) || 
                (currentIndex === 0 && index === expertiseCards.length - 1)
              ) {
                position = "left-neg-3/4 opacity-50";
                zIndex = 20;
              }
              
              let transitionClass = "transform transition-all duration-500 ease-in-out";
              if (direction === 'left') {
                transitionClass += " animate-slide-left";
              } else if (direction === 'right') {
                transitionClass += " animate-slide-right";
              }
              
              return (
                <div
                  key={card.id}
                  className={`absolute w-full ${position} ${scale} ${transitionClass}`}
                  style={{ zIndex }}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 h-64 flex flex-col justify-between border border-gray-200">
                    <div className="text-6xl mb-4 text-center justify-items-center text-primary-dark">
                      <FontAwesomeIcon icon={card.icon} className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center text-primary-dark">{card.title}</h3>
                    <p className="text-gray-600 text-center">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={goToPrevious}
              className="bg-primary hover:primary-dark text-white rounded-full p-2 focus:outline-none transition-colors duration-300 flex items-center"
              aria-label="Previous expertise"
            >
              <ArrowLeft size={24} />
            </button>
            
            {/* Pagination indicators */}
            <div className="flex items-center space-x-2">
              {expertiseCards.map((_, index) => (
                <span 
                  key={index} 
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="bg-primary hover:primary-dark text-white rounded-full p-2 focus:outline-none transition-colors duration-300 flex items-center"
              aria-label="Next expertise"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCarousel;