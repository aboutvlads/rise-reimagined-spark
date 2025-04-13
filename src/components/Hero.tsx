
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
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
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
      {/* Simple white background */}
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <AnimatedText 
            text={
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                Build and scale <br />your online business
              </h1>
            }
            delay={200}
            once={true}
          />
          
          <AnimatedText
            text={
              <p className="text-lg md:text-xl text-gray-700 mb-10">
                A powerful platform to create exceptional <br />
                customer experiences and grow your revenue
              </p>
            }
            delay={400}
            once={true}
          />
          
          <AnimatedText
            text={
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-rise-orange hover:bg-rise-orange/90 text-white rounded-md text-xl px-8 py-6 h-auto"
                    onClick={() => window.location.href = '#features'}
                  >
                    Get Started
                  </Button>
                </div>
                
                <form onSubmit={handleSubmit} className="mt-6">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-md border-gray-300 px-4 py-6 h-auto text-lg w-full max-w-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </form>
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
