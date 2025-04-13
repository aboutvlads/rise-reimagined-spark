
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-rise-orange" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 12h5v8h14v-8h5L12 2z" />
              </svg>
              <span className="text-rise-dark-blue text-2xl font-bold">HEYRISE</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-rise-dark-blue hover:text-rise-orange transition-colors font-medium">
              About
            </a>
            <a href="#features" className="text-rise-dark-blue hover:text-rise-orange transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-rise-dark-blue hover:text-rise-orange transition-colors font-medium">
              Pricing
            </a>
            <Button className="bg-rise-orange hover:bg-rise-orange/90 text-white rounded-full px-6">
              Log in
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-rise-dark-blue hover:text-rise-orange transition-colors font-medium py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-rise-dark-blue hover:text-rise-orange transition-colors font-medium py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-rise-dark-blue hover:text-rise-orange transition-colors font-medium py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <Button 
              className="bg-rise-orange hover:bg-rise-orange/90 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
