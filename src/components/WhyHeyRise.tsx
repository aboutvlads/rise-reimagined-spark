
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, SmilePlus, TrendingUp } from 'lucide-react';
import AnimatedText from './AnimatedText';

const WhyHeyRise = () => {
  const features = [
    {
      icon: <Star size={24} />,
      title: "Easy to Use",
      description: "Our user-friendly platform simplifies the process of building your online presence."
    },
    {
      icon: <SmilePlus size={24} />,
      title: "Engaging Experiences",
      description: "Design dynamic and personalized customer journeys that captivate your audience."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Growth-Focused",
      description: "Leverage tools and insights to optimize your online business and increase sales."
    }
  ];

  return (
    <section id="why-heyrise" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Why HeyRise?
            </h2>
          }
          delay={100}
        />
        
        <AnimatedText
          text={
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              With HeyRise, you have everything you need to launch and expand your
              online business. Our intuitive toolkit empowers you to craft seamless
              customer experiences, boost sales, and drive business growth.
            </p>
          }
          delay={200}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-black mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <Button 
          className="bg-rise-orange hover:bg-rise-orange/90 text-white rounded-md text-lg px-6 py-5 h-auto"
        >
          Get Started Free
        </Button>
      </div>
    </section>
  );
};

export default WhyHeyRise;
