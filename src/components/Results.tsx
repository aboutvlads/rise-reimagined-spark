
import React from 'react';
import AnimatedText from './AnimatedText';
import { Card, CardContent } from '@/components/ui/card';

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
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <AnimatedText
                  key={index}
                  text={
                    <Card className="bg-white border border-gray-100 shadow-md overflow-hidden">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-4xl font-bold text-rise-orange mb-2">{stat.value}</h3>
                        <p className="text-gray-600">{stat.label}</p>
                      </CardContent>
                    </Card>
                  }
                  delay={200 + index * 100}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <AnimatedText
              text={
                <div className="relative h-full">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <img 
                      src="/lovable-uploads/d39d74b4-a3df-4766-a2a8-26935e245563.png" 
                      alt="HEYRISE interface showing customer chat and profile" 
                      className="w-full object-cover rounded-t-xl"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-rise-dark-blue mb-2">Real-time Customer Insights</h3>
                      <p className="text-gray-600">HEYRISE provides real-time customer data and actionable insights to help sales teams convert more effectively.</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-rise-light-blue/30 w-24 h-24 rounded-full z-0 blur-xl"></div>
                </div>
              }
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
