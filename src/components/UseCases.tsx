
import React from 'react';
import { ShoppingBag, LineChart, Building } from 'lucide-react';
import AnimatedText from './AnimatedText';

const UseCases = () => {
  const cases = [
    {
      icon: <ShoppingBag size={36} className="text-rise-orange" />,
      title: "Retail",
      description: "Turn browsers into buyers with real-time product matching."
    },
    {
      icon: <LineChart size={36} className="text-rise-orange" />,
      title: "Finance",
      description: "Guide users through complex decisions with personalized assistance."
    },
    {
      icon: <Building size={36} className="text-rise-orange" />,
      title: "B2B2C",
      description: "Streamline communication and increase lead quality across long buyer journeys."
    }
  ];

  return (
    <section className="py-20 bg-rise-light-gray">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-rise-orange/10 text-rise-orange rounded-full text-sm font-medium mb-4">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue">
                Solutions for Every Industry
              </h2>
            </div>
          }
          delay={100}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cases.map((useCase, index) => (
            <AnimatedText
              key={index}
              text={
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-rise-dark-blue/5 p-8 flex items-center justify-center">
                    {useCase.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-rise-dark-blue mb-3">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
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

export default UseCases;
