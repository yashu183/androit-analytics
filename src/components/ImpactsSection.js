import React from 'react';
import { ExternalLink } from 'lucide-react';

const ImpactCard = ({ title, content, points, source }) => (
  <div className="bg-secondary text-white w-4/5 md:w-2/5 lg:w-30% p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <h2 className="text-xl text-primary text-center font-semibold mb-4">{title}</h2>
    <p className="text-white mb-2">{content}</p>
    <ul className="text-white list-disc pl-5 mb-4">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    <a 
      className="m-auto block w-fit bg-primary hover:bg-primary/90 text-secondary font-semibold px-4 py-2 rounded-full text-sm items-center gap-2 transition-all duration-300"
      href={source}
      target='_blank'
      rel='noreferrer'
    >
      <div className='flex'>
        <p>Learn more</p>
        <ExternalLink size={18} className='ml-2' />
      </div>
    </a>
  </div>
);

const ImpactsSection = () => {
  const impacts = [
    {
      title: 'Predictive Maintenance in Manufacturing: General Electric',
      content: `GE uses data science to predict maintenance, reducing downtime and boosting efficiency in aviation and energy.`,
      points: [
        "30% decrease in unexpected maintenance events in GE's aviation division.",
        "15% operational efficiency improvement in GE’s wind turbines through predictive maintenance.",
        "$50 million saved in maintenance costs across GE's divisions using predictive maintenance.",
      ],
      source: 'https://www.turing.com/resources/data-science-case-studies#case-study-predictive-maintenance-in-manufacturing',
    },
    {
      title: 'Personalized Recommendations in E-commerce: Amazon',
      content: 'Amazon uses data science to personalize shopping by analyzing customer data, boosting sales and fostering loyalty with suggestions.',
      points: [
        "35% of Amazon’s sales come from personalized recommendations, boosting revenue and engagement.",
        'Personalization encourages repeat purchases, improving long-term customer engagement.',
        'Data-driven recommendations refine product suggestions, enhancing the customer experience.',
      ],
      source: 'https://www.turing.com/resources/data-science-case-studies#case-study-e-commerce-personalization-and-recommendation-systems',
    },
    {
      title: 'Fraud Detection in Finance: PayPal',
      content: "PayPal's Advanced AI powered Fraud Detection System By analyzing transaction data, user behavior, and other relevant factors.",
      points: [
        '99.9% accuracy rate in identifying and blocking fraudulent transactions in real time',
        '$2 billion saved in potential losses with Proactive fraud prevention measures.',
        "40% reduction in fraud rate through PayPal's continuous monitoring and data-driven approach.",
      ],
      source: 'https://www.turing.com/resources/data-science-case-studies#case-study-fraud-detection-and-prevention-in-finance',
    },
  ];

  return (
    <section id="impacts" className="py-14 min-h-[calc(100vh-80px)] bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">The Power of Data Science Across Industries</h2>
          <hr className='w-6/12 m-auto border-2 border-primary'></hr>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {impacts.map((impact, index) => (
            <ImpactCard key={index} {...impact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactsSection;
