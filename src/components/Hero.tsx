
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleDemoRequest = () => {
    toast({
      title: "Demo request received",
      description: "Our team will contact you shortly to schedule your demo."
    });
  };

  const handleFreeTrial = () => {
    toast({
      title: "Free trial initiated",
      description: "Welcome to HEYRISE! Your free trial has begun."
    });
  };

  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-rise-light-blue/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedText 
            text={
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rise-dark-blue leading-tight mb-6">
                <span className="text-rise-orange">HEYRISE</span>
                <br />
                <span className="text-gradient bg-gradient-to-r from-rise-dark-blue to-rise-blue">
                  Empowering Customer Relationships Through Conversation
                </span>
              </h1>
            }
            delay={200}
            once={true}
          />
          
          <AnimatedText
            text={
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Build meaningful connections, drive engagement, and grow revenue through personalized, AI-enhanced conversations.
              </p>
            }
            delay={400}
            once={true}
          />
          
          <AnimatedText
            text={
              <p className="text-lg text-gray-600 mb-10">
                Across retail, B2B2C, and finance, HEYRISE helps you understand buyer intent, 
                recommend relevant actions, and boost conversions.
              </p>
            }
            delay={500}
            once={true}
          />
          
          <AnimatedText
            text={
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-rise-orange hover:bg-rise-orange/90 text-white rounded-md text-lg px-6 py-2 h-auto"
                  onClick={handleFreeTrial}
                >
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  className="border-rise-orange text-rise-orange hover:bg-rise-orange/10 rounded-md text-lg px-6 py-2 h-auto"
                  onClick={handleDemoRequest}
                >
                  Book a Demo
                </Button>
              </div>
            }
            delay={600}
            once={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
