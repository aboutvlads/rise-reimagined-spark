
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thanks for signing up!",
      description: "We'll be in touch soon."
    });
    setEmail('');
  };

  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-rise-gradient opacity-70"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rise-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-rise-orange/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <AnimatedText 
              text={
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rise-dark-blue leading-tight mb-6">
                  Build and scale your <span className="text-rise-orange">online business</span>
                </h1>
              }
              delay={200}
              once={true}
            />
            
            <AnimatedText
              text={
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  A powerful platform to create exceptional customer experiences and grow your revenue.
                </p>
              }
              delay={400}
              once={true}
            />
            
            <AnimatedText
              text={
                <div className="space-y-6">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-full bg-white/70 backdrop-blur-sm border-transparent focus:border-rise-orange"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type="submit" className="bg-rise-orange hover:bg-rise-orange/90 text-white rounded-full gap-2">
                      Get Started
                      <ArrowRight size={16} />
                    </Button>
                  </form>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle size={16} className="text-rise-orange" />
                      <span>Free 14-day trial</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle size={16} className="text-rise-orange" />
                      <span>No credit card required</span>
                    </div>
                  </div>
                </div>
              }
              delay={600}
              once={true}
            />
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl animate-float max-w-md mx-auto">
              <div className="bg-white rounded-t-lg p-2 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="bg-white p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={24} className="text-green-500" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                  </div>
                </div>
                
                <div className="h-32 bg-blue-50 rounded-lg mb-4 p-4 flex items-center justify-center">
                  <div className="w-full">
                    <div className="h-24 relative">
                      <div className="absolute bottom-0 left-0 w-1/6 h-8 bg-rise-orange/80 rounded"></div>
                      <div className="absolute bottom-0 left-[calc(100%/6)] w-1/6 h-12 bg-rise-orange/80 rounded"></div>
                      <div className="absolute bottom-0 left-[calc(100%*2/6)] w-1/6 h-16 bg-rise-orange/80 rounded"></div>
                      <div className="absolute bottom-0 left-[calc(100%*3/6)] w-1/6 h-10 bg-rise-orange/80 rounded"></div>
                      <div className="absolute bottom-0 left-[calc(100%*4/6)] w-1/6 h-20 bg-rise-orange/80 rounded"></div>
                      <div className="absolute bottom-0 left-[calc(100%*5/6)] w-1/6 h-24 bg-rise-orange/80 rounded"></div>
                      
                      <div className="absolute top-0 left-0 w-full h-full flex items-center">
                        <div className="w-full border-t border-dashed border-rise-blue/50"></div>
                      </div>
                      
                      <div className="absolute top-1/2 left-0 w-full h-full flex items-center">
                        <div className="w-full border-t border-dashed border-rise-blue/50"></div>
                      </div>
                      
                      <div className="absolute -top-1 right-0 transform -translate-y-full">
                        <TrendingUp size={20} className="text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-rise-orange rounded-full opacity-60 animate-pulse-slow"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-rise-blue rounded-full opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
