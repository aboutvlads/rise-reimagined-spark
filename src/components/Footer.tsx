
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-black text-2xl font-bold">HEYRISE</span>
            </div>
            <p className="text-gray-600 mb-6">
              Empowering businesses to grow and succeed in the digital marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rise-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rise-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rise-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rise-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-rise-orange mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">123 Market St, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-rise-orange mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-black transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-rise-orange mr-2 flex-shrink-0" />
                <a href="mailto:hello@heyrise.com" className="text-gray-600 hover:text-black transition-colors">
                  hello@heyrise.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HeyRise. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
