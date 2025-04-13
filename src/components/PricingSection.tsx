
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import AnimatedText from './AnimatedText';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started.",
      price: isAnnual ? 29 : 39,
      features: [
        "Up to 1,000 customers",
        "Basic analytics",
        "Standard support",
        "2 team members",
        "Core features"
      ]
    },
    {
      name: "Professional",
      description: "For growing businesses with advanced needs.",
      price: isAnnual ? 79 : 99,
      popular: true,
      features: [
        "Up to 10,000 customers",
        "Advanced analytics",
        "Priority support",
        "10 team members",
        "All core features",
        "Marketing automation",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large-scale operations.",
      price: isAnnual ? 199 : 249,
      features: [
        "Unlimited customers",
        "Custom analytics",
        "24/7 dedicated support",
        "Unlimited team members",
        "All features",
        "Advanced security",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-rise-light-gray relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text={
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue mb-4">
                Simple, transparent <span className="text-rise-orange">pricing</span>
              </h2>
            }
            delay={100}
          />
          
          <AnimatedText
            text={
              <p className="text-gray-600 text-lg mb-8">
                Choose the plan that fits your business needs and scale as you grow.
              </p>
            }
            delay={300}
          />
          
          <AnimatedText
            text={
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white p-1 rounded-full shadow-sm inline-flex">
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      isAnnual 
                        ? 'bg-rise-orange text-white shadow-sm' 
                        : 'text-gray-600 hover:text-rise-orange'
                    }`}
                  >
                    Annual
                    {isAnnual && <span className="ml-2 text-xs font-normal">Save 20%</span>}
                  </button>
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      !isAnnual 
                        ? 'bg-rise-orange text-white shadow-sm' 
                        : 'text-gray-600 hover:text-rise-orange'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>
            }
            delay={400}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-rise-orange relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-rise-orange text-white text-xs font-bold uppercase py-1 px-3 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-rise-dark-blue mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-rise-dark-blue">${plan.price}</span>
                  <span className="text-gray-500 ml-2">/ month</span>
                  {isAnnual && (
                    <div className="text-xs text-gray-500 mt-1">Billed annually</div>
                  )}
                </div>
                
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? 'bg-rise-orange hover:bg-rise-orange/90 text-white' 
                      : 'bg-white border border-rise-orange/60 text-rise-orange hover:bg-rise-orange/5'
                  }`}
                >
                  Get Started
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle size={18} className="text-rise-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
