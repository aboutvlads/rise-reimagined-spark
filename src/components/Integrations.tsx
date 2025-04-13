
import React from 'react';
import AnimatedText from './AnimatedText';

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
        
        <div className="max-w-4xl mx-auto">
          <AnimatedText
            text={
              <div className="bg-white shadow-md rounded-lg p-8 border border-gray-100">
                <p className="text-center text-lg text-gray-700 mb-8">Easily connect with:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                  {integrations.map((integration, index) => (
                    <div key={index} className="bg-rise-light-blue/30 rounded-lg p-4">
                      <p className="font-medium text-rise-dark-blue">{integration}</p>
                    </div>
                  ))}
                </div>
              </div>
            }
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
