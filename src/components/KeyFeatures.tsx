
import React from 'react';
import { MessageSquare, LineChart, Globe, Building } from 'lucide-react';
import AnimatedText from './AnimatedText';

const KeyFeatures = () => {
  const features = [
    {
      icon: <MessageSquare size={32} />,
      title: "Conversational Journeys",
      description: "Craft tailored flows with AI + human handoff."
    },
    {
      icon: <LineChart size={32} />,
      title: "Sales Intelligence",
      description: "Get deep insights into what drives conversions and how customers behave."
    },
    {
      icon: <Globe size={32} />,
      title: "Multilingual Capabilities",
      description: "Serve customers in multiple languages out of the box."
    },
    {
      icon: <Building size={32} />,
      title: "B2B2C & Retail Ready",
      description: "Optimized for complex industries where timing and personalization matter most."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-rise-orange/10 text-rise-orange rounded-full text-sm font-medium mb-4">
                Key Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue">
                Powerful Tools for Growth
              </h2>
            </div>
          }
          delay={100}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedText
              key={index}
              text={
                <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 bg-rise-light-blue rounded-full flex items-center justify-center mb-6 text-rise-orange">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-rise-dark-blue mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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

export default KeyFeatures;
