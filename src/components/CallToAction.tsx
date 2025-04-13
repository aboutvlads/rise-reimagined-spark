
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const CallToAction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-rise-orange/90 to-rise-orange rounded-2xl shadow-lg overflow-hidden">
          <div className="relative p-8 md:p-12">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <AnimatedText
                text={
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to grow your business?
                  </h2>
                }
                delay={100}
              />
              
              <AnimatedText
                text={
                  <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of successful businesses that trust HeyRise to power their online growth. Get started today!
                  </p>
                }
                delay={300}
              />
              
              <AnimatedText
                text={
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-white text-rise-orange hover:bg-white/90 rounded-full px-6">
                      Start Free Trial
                    </Button>
                    <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-6">
                      Watch Demo
                    </Button>
                  </div>
                }
                delay={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
