import React from 'react';

const StatCard = ({ icon, number, label }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-primary mb-4">
      {/* <FontAwesomeIcon icon={icon} className="text-4xl" /> */}
    </div>
    <div className="text-3xl font-bold text-secondary mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const AboutUsSection = () => {
  const stats = [
    {
      icon: "faTrophy",
      number: "10+",
      label: "Years Experience"
    },
    {
      icon: "faUsers",
      number: "200+",
      label: "Happy Clients"
    },
    {
      icon: "faGlobe",
      number: "15+",
      label: "Countries Served"
    },
    {
      icon: "faCertificate",
      number: "50+",
      label: "Data Experts"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Transforming Businesses Through{' '}
              <span className="text-primary">Data Innovation</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Androit Analytics, we're passionate about helping businesses harness the power of their data. 
              Our team of experts combines deep technical knowledge with business acumen to deliver 
              solutions that drive real results.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We believe in the transformative power of data analytics and are committed to helping 
              organizations make data-driven decisions that lead to sustainable growth and competitive 
              advantage.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-primary hover:bg-primary-dark text-secondary px-8 py-3 rounded-full transition-all duration-300 font-semibold"
            >
              Learn More About Us
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Trusted By <span className="text-primary">Industry Leaders</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Replace with actual client logos */}
            <div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center">
              <span className="text-primary-light">Client 1</span>
            </div>
            <div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center">
              <span className="text-primary-light">Client 2</span>
            </div>
            <div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center">
              <span className="text-primary-light">Client 3</span>
            </div>
            <div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center">
              <span className="text-primary-light">Client 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
