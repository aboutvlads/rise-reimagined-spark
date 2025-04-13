
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyHeyRise from '@/components/WhyHeyRise';
import HowItWorks from '@/components/HowItWorks';
import KeyFeatures from '@/components/KeyFeatures';
import WhoItsFor from '@/components/WhoItsFor';
import Results from '@/components/Results';
import UseCases from '@/components/UseCases';
import Testimonials from '@/components/Testimonials';
import Integrations from '@/components/Integrations';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for navbar height
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhyHeyRise />
        <HowItWorks />
        <KeyFeatures />
        <WhoItsFor />
        <Results />
        <UseCases />
        <Testimonials />
        <Integrations />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
