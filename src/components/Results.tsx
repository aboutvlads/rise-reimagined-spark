
import React from 'react';
import AnimatedText from './AnimatedText';

const Results = () => {
  const stats = [
    {
      value: "+38%",
      label: "increase in conversion rates"
    },
    {
      value: "2.5x",
      label: "higher engagement via personalized chat"
    },
    {
      value: "-43%",
      label: "response time for sales reps"
    },
    {
      value: "+51%",
      label: "upsell success rate with AI recommendations"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-rise-orange/10 text-rise-orange rounded-full text-sm font-medium mb-4">
                Results That Speak
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue">
                Measurable Impact on Your Business
              </h2>
            </div>
          }
          delay={100}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedText
              key={index}
              text={
                <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-md text-center">
                  <h3 className="text-4xl font-bold text-rise-orange mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              }
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
