
import React from 'react';
import AnimatedText from './AnimatedText';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    "HubSpot",
    "Salesforce",
    "Shopify",
    "Intercom",
    "WhatsApp Business",
    "More…"
  ];

  return (
    <section className="py-20 bg-rise-light-gray">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-rise-orange/10 text-rise-orange rounded-full text-sm font-medium mb-4">
                Integrations & Tools
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue">
                Connect with Your Favorite Tools
              </h2>
            </div>
          }
          delay={100}
        />
        
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <AnimatedText
              text={
                <Card className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
                  <CardContent className="p-8">
                    <p className="text-center text-lg text-gray-700 mb-6">Easily connect with:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 text-center">
                      {integrations.map((integration, index) => (
                        <div key={index} className="bg-rise-light-blue/30 rounded-lg p-4 flex items-center gap-2">
                          <Check size={16} className="text-rise-orange" />
                          <p className="font-medium text-rise-dark-blue">{integration}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-500">Connect your existing systems for a seamless customer experience</p>
                    </div>
                  </CardContent>
                </Card>
              }
              delay={200}
            />
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <AnimatedText
              text={
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                      <img 
                        src="/lovable-uploads/b858a076-6cc5-4796-9cb8-5dfc42545f27.png" 
                        alt="HEYRISE cross-platform integration" 
                        className="w-full h-auto object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                      <img 
                        src="/lovable-uploads/9219ca0d-5b6b-41bc-827a-b79f56f90c3f.png" 
                        alt="HEYRISE with WhatsApp, Voice and Video integration" 
                        className="w-full h-auto object-cover rounded-t-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -left-6 bg-rise-orange/10 w-24 h-24 rounded-full z-0 blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 bg-rise-blue/10 w-32 h-32 rounded-full z-0 blur-xl"></div>
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

export default Integrations;
