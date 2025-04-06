import React from 'react';
import { Rocket, ChartLine, Landmark } from 'lucide-react';

const IndustryCard = ({ icon, title, description }) => (
  <div className="bg-secondary text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-white leading-relaxed">{description}</p>
  </div>
);

const WhoWeHelpSection = () => {
  const industries = [
    {
      icon: <Rocket size={30} strokeWidth={2} />,
      title: "Startups",
      description: "We help early-stage companies build scalable data solutions, turning raw data into insights for growth."
    },
    {
      icon: <ChartLine size={30} strokeWidth={2} />,
      title: "Mid-Sized Companies",
      description: "We optimize data pipelines, implement business intelligence, and provide AI-driven decision-making tools."
    },
    {
      icon: <Landmark size={30} strokeWidth={2} />,
      title: "Large Enterprises",
      description: "We enhance existing data strategies, implement enterprise-scale AI, and drive digital transformation."
    },
  ];

  return (
    <section id="who-we-help">
      <div className="container min-h-[calc(100vh-80px)] mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Who can we help?</h2>
          <hr className='w-2/12 m-auto border-2 border-primary'></hr>
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
            href="#contact-us"
            className="inline-block bg-primary text-secondary font-bold font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
