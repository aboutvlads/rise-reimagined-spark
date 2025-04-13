
import React from 'react';
import { Check, Languages, BrainCircuit, Zap } from 'lucide-react';
import AnimatedText from './AnimatedText';

const WhyHeyRise = () => {
  const features = [
    {
      icon: <Languages size={24} />,
      text: "Multilingual support (English, German & more)"
    },
    {
      icon: <BrainCircuit size={24} />,
      text: "Real-time buyer intent detection"
    },
    {
      icon: <Zap size={24} />,
      text: "AI-assisted recommendations"
    },
    {
      icon: <Check size={24} />,
      text: "Seamless handover between AI and human agents"
    }
  ];

  return (
    <section id="why-heyrise" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-rise-orange/10 text-rise-orange rounded-full text-sm font-medium mb-4">
                Why HEYRISE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue mb-8">
                Turn Conversations into Conversions
              </h2>
            </div>
          }
          delay={100}
        />
        
        <AnimatedText
          text={
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
              HEYRISE bridges the gap between human expertise and AI, giving your sales teams 
              powerful tools to connect, convert, and grow.
            </p>
          }
          delay={200}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedText
              key={index}
              text={
                <div className="flex items-center bg-white shadow-sm rounded-lg p-4 border border-gray-100">
                  <div className="text-rise-orange mr-4">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700">{feature.text}</p>
                </div>
              }
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHeyRise;
