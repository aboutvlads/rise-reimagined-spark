
import React from 'react';
import { Users, HeartHandshake, LineChart } from 'lucide-react';
import AnimatedText from './AnimatedText';

const WhoItsFor = () => {
  const targetAudiences = [
    {
      icon: <Users size={32} className="text-rise-orange" />,
      title: "Sales Teams",
      description: "Give your reps the data and conversation tools to succeed."
    },
    {
      icon: <HeartHandshake size={32} className="text-rise-orange" />,
      title: "Customer Success",
      description: "Maintain customer relationships with seamless, scalable interactions."
    },
    {
      icon: <LineChart size={32} className="text-rise-orange" />,
      title: "Marketing & CX",
      description: "Deliver memorable brand experiences at every touchpoint."
    }
  ];

  return (
    <section className="py-20 bg-rise-light-gray">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-rise-orange/10 text-rise-orange rounded-full text-sm font-medium mb-4">
                Who It's For
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue">
                Designed for Teams That Drive Growth
              </h2>
            </div>
          }
          delay={100}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {targetAudiences.map((audience, index) => (
            <AnimatedText
              key={index}
              text={
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center mx-auto mb-6">
                    {audience.icon}
                  </div>
                  <h3 className="text-xl font-bold text-rise-dark-blue mb-4">
                    <span className="text-rise-orange">✅</span> {audience.title}
                  </h3>
                  <p className="text-gray-600">{audience.description}</p>
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

export default WhoItsFor;
