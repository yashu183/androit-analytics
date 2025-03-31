import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-secondary text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-3xl mb-6 text-primary">
          Transforming Data into Intelligent Decisions
          </h2>
          <h1 className="text-3xl md:text-6xl font-bold mb-12">
          Your Data Holds the Answers <br /> 
          We Help You Unlock Them.
          </h1>
          <button 
            className="bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-4 rounded-full text-lg inline-flex items-center gap-2 transition-all duration-300"
            onClick={() => window.location.href = '#contact'}
          >
            Get a Free Consultation
            <ArrowRight />
          </button>
        </div>

        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
