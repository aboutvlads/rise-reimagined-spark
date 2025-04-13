
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';
import { toast } from '@/components/ui/use-toast';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

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
    <section className="pt-36 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-rise-light-blue/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start max-w-5xl mx-auto">
          {/* New Banner */}
          <div className="mb-10 self-start">
            <Button 
              variant="ghost" 
              className="rounded-full border border-rise-orange/30 text-rise-orange bg-rise-orange/5 px-5 py-2 h-auto hover:bg-rise-orange/10"
              onClick={() => window.open('#', '_blank')}
            >
              <span className="flex items-center gap-2">
                <span className="text-sm font-medium">Learn what's new!</span>
                <ArrowRight size={16} />
              </span>
            </Button>
          </div>
          
          {/* Main Headline */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              HEYRISE is <br className="md:hidden" />
              <span className="md:block">an ecosystem of tools that help you</span>
            </h1>
          </div>
          
          {/* Highlighted Keywords */}
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="text-4xl md:text-5xl font-bold px-4 py-2 bg-blue-100 text-blue-500 rounded-md">
              develop
            </span>
            <span className="text-4xl md:text-5xl font-bold px-4 py-2 bg-orange-100 text-orange-500 rounded-md">
              review
            </span>
            <span className="text-xl md:text-3xl font-bold self-center">
              &
            </span>
            <span className="text-4xl md:text-5xl font-bold px-4 py-2 bg-green-100 text-green-500 rounded-md">
              deploy
            </span>
          </div>
          
          {/* Subheadline */}
          <div className="mb-12 text-lg md:text-xl text-gray-700 max-w-3xl">
            <p>
              Build meaningful connections, drive engagement, and grow revenue through personalized, AI-enhanced conversations.
            </p>
            <p className="mt-4">
              Across retail, B2B2C, and finance, HEYRISE helps you understand buyer intent, recommend relevant actions, and boost conversions.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-black hover:bg-black/90 text-white rounded-md text-lg px-8 py-6 h-auto"
              onClick={handleFreeTrial}
            >
              <span className="flex items-center gap-2">
                Sign Up for Free <ArrowRight size={18} />
              </span>
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md text-lg px-8 py-6 h-auto"
              onClick={handleDemoRequest}
            >
              <span className="flex items-center gap-2">
                Read the Docs <ArrowUpRight size={18} />
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Activity Cards */}
      <div className="hidden lg:block absolute right-0 top-20 w-1/3 max-w-md z-10">
        <div className="bg-green-50 p-6 rounded-3xl">
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/public/lovable-uploads/7f9bb58d-9f83-4d62-ac5d-a2508b82feae.png" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phoenix Baker</h3>
                  <p className="text-gray-600 text-sm">Created an iOS App Store build</p>
                  <div className="mt-2 flex items-center text-blue-500 text-sm">
                    <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                    Building...
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/public/lovable-uploads/7f9bb58d-9f83-4d62-ac5d-a2508b82feae.png" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Andi Lane</h3>
                  <p className="text-gray-600 text-sm">Created an Android Play Store build</p>
                  <div className="mt-2 flex items-center text-green-500 text-sm">
                    <span className="inline-block w-4 h-4 text-green-500 mr-1">✓</span>
                    Finished
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/public/lovable-uploads/7f9bb58d-9f83-4d62-ac5d-a2508b82feae.png" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Candice Wu</h3>
                  <p className="text-gray-600 text-sm">Published an update "Fixes typo"</p>
                  <p className="text-gray-600 text-sm">on production via GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
