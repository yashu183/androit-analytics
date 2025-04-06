import React from 'react';
import { ExternalLink } from 'lucide-react';

const WhereDoWeStandSection = () => {
  const maturityLevels = [
    {
      number: "1",
      title: "We Are Data Newbies",
      description: "Your organization is in the early stages of collecting and storing data. You may have basic data available, but it's not yet being analyzed or used to make decisions.",
      challenges: [
        "Limited understanding of data usage.",
        "Manual processes for data collection and storage.",
        "Lack of structured data pipelines or systems."
      ],
      solutions: [
        "Implement a foundational data strategy.",
        "Set up data collection and storage systems using cloud platforms.",
        "Provide basic training on data literacy for your team."
      ]
    },
    {
      number: "2",
      title: "We Have Some Data Insights",
      description: "You're leveraging some data insights, but decision-making is still largely intuition-based. You may have reports and basic analysis, but advanced analytics and predictive insights are missing.",
      challenges: [
        "Insights are limited to historical analysis.",
        "Lack of automation in reporting.",
        "Difficulty translating insights into actionable strategies."
      ],
      solutions: [
        "Implement automated reporting and business intelligence tools.",
        "Develop descriptive analytics for deeper understanding.",
        "Train your team on leveraging data for strategic decision-making."
      ]
    },
    {
      number: "3",
      title: "We Are Data-Driven",
      description: "You're using data to make informed decisions, but opportunities exist to optimize processes and increase efficiency through advanced analytics. Predictive and prescriptive analytics are not fully leveraged.",
      challenges: [
        "Limited use of predictive modeling and machine learning.",
        "Inconsistent use of data across different departments.",
        "Difficulty in real-time decision-making."
      ],
      solutions: [
        "Use predictive analytics for demand forecasting, customer segmentation, and risk assessment.",
        "Introduce real-time dashboards for instant decision-making.",
        "Optimize processes through data-driven strategies."
      ]
    },
    {
      number: "4",
      title: "We Are Advanced",
      description: "Your organization leverages AI, machine learning, and real-time analytics to drive decision-making. You're looking to scale your efforts and stay ahead of the competition through continuous innovation.",
      challenges: [
        "Difficulty scaling AI/ML models across the organization.",
        "Managing data governance and security.",
        "Staying updated with the latest advancements in data science."
      ],
      solutions: [
        "Develop scalable AI and machine learning models.",
        "Implement robust data governance and compliance practices.",
        "Leverage cutting-edge techniques like deep learning and NLP for advanced insights."
      ]
    }
  ];

  return (
    <section id = "services">
      <div className="pt-10 pb-14 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
        <div className='container mx-auto px-4'>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl font-bold font-bold mb-2">
            Where Do You Stand with Data?
            </h2>
            <hr className='w-6/12 m-auto border-2 border-primary'></hr>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {maturityLevels.map((level, index) => (
              <div 
                key={index}
                className="w-4/5 md:w-2/5 lg:w-23.5% py-7 px-4 bg-secondary text-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2 group relative"
              >
                <div className="p-6 h-full">
                  {/* Front content (always visible) */}
                  <div className="flex flex-col h-full">
                    <div className="text-6xl font-light text-primary mb-3">
                      {level.number}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {level.title}
                    </h3>
                    <p className="text-white mb-4">
                      {level.description}
                    </p>
                  </div>
                  
                  {/* Back content (visible on hover) - initially hidden */}
                  <div className="absolute inset-0 bg-secondary text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto transform translate-y-8 group-hover:translate-y-0">
                    <h3 className="text-xl text-center font-semibold text-primary mb-3">
                      {level.title}
                    </h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary">Challenges:</h4>
                      <ul className="list-disc pl-5 text-white text-sm">
                        {level.challenges.map((challenge, idx) => (
                          <li key={idx} className="mb-1">{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary">Potential Solutions:</h4>
                      <ul className="list-disc pl-5 text-white text-sm">
                        {level.solutions.map((solution, idx) => (
                          <li key={idx} className="mb-1">{solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <a 
          className="mt-12 py-3 px-8 block w-fit bg-primary hover:bg-primary/90 text-secondary font-semibold font-medium rounded-full text-sm items-center gap-2 transition-all duration-300"
          href="https://forms.gle/mi9os2Yry9ZetxU69"
          target='_blank'
          rel='noreferrer'
        >
          <div className='flex'>
            <p>Begin Your Journey</p>
            <ExternalLink size={18} className='ml-2' />
          </div>
        </a>
      </div>
    </section>
    );
};

export default WhereDoWeStandSection;