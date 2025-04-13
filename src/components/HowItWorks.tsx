
import React from 'react';
import { LightbulbIcon, MessageSquare, LineChart } from 'lucide-react';
import AnimatedText from './AnimatedText';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Understand",
      description: "Use conversational AI to detect buyer needs and segment audiences with intent-driven insights.",
      icon: <LightbulbIcon size={40} className="text-rise-orange" />
    },
    {
      number: 2,
      title: "Engage",
      description: "Deliver personalized product suggestions and support across all key touchpoints—chat, email, web.",
      icon: <MessageSquare size={40} className="text-rise-orange" />
    },
    {
      number: 3,
      title: "Convert",
      description: "Empower sales teams to close deals with data-backed recommendations and real-time performance analytics.",
      icon: <LineChart size={40} className="text-rise-orange" />
    }
  ];

  return (
    <section className="py-20 bg-rise-light-gray">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-rise-orange/10 text-rise-orange rounded-full text-sm font-medium mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue">
                Streamlined Process, Powerful Results
              </h2>
            </div>
          }
          delay={100}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedText
              key={index}
              text={
                <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                  <div className="absolute top-0 right-0 bg-rise-orange text-white text-lg font-bold w-12 h-12 flex items-center justify-center rounded-bl-lg">
                    {step.number}
                  </div>
                  <div className="p-8 pt-12 text-center">
                    <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-rise-light-blue rounded-full">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-rise-dark-blue mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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

export default HowItWorks;
