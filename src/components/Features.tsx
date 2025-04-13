
import React from 'react';
import { BarChart3, Users, Zap, Globe, LineChart, ShieldCheck } from 'lucide-react';
import FeatureCard from './FeatureCard';
import AnimatedText from './AnimatedText';

const Features = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our intuitive onboarding process and ready-to-use templates.',
    },
    {
      icon: <Users size={24} />,
      title: 'Customer Insights',
      description: 'Understand your customers better with detailed analytics and behavior tracking.',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Sales Analytics',
      description: 'Track your performance with powerful reporting tools and actionable insights.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Reach',
      description: 'Expand your business worldwide with multi-currency and localization features.',
    },
    {
      icon: <LineChart size={24} />,
      title: 'Growth Tools',
      description: 'Leverage marketing automation and optimization tools to scale effectively.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Secure Payments',
      description: 'Process transactions securely with our PCI-compliant payment infrastructure.',
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-rise-light-gray">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text={
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue mb-4">
                Powerful features to <span className="text-rise-orange">drive your success</span>
              </h2>
            }
            delay={100}
          />
          
          <AnimatedText
            text={
              <p className="text-gray-600 text-lg">
                Everything you need to build, manage, and scale your online business in one integrated platform.
              </p>
            }
            delay={300}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Floating decoration */}
      <div className="absolute top-40 -left-20 w-40 h-40 rounded-full bg-rise-orange/5 animate-spin-slow"></div>
      <div className="absolute bottom-40 -right-20 w-60 h-60 rounded-full bg-rise-blue/5 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
    </section>
  );
};

export default Features;
