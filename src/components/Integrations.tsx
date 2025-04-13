
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                Integrations & Tools
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Connect with Your Favorite Tools
              </h2>
            </div>
          }
          delay={100}
        />
        
        <div className="max-w-4xl mx-auto">
          <AnimatedText
            text={
              <div className="bg-white shadow-sm rounded-lg p-8 border border-gray-100">
                <p className="text-center text-lg text-gray-700 mb-8">Easily connect with:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                  {integrations.map((integration, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <p className="font-medium text-gray-800">{integration}</p>
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
