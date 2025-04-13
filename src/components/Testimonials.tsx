
import React from 'react';
import AnimatedText from './AnimatedText';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "HEYRISE helped us cut sales cycle time by 40%. Our team finally has real-time insights and conversations that convert.",
      author: "Lea K.",
      role: "Head of Sales",
      company: "FinTech Brand",
      stars: 5
    },
    {
      quote: "From onboarding to upselling, everything's more personal, and it works.",
      author: "Jan M.",
      role: "CX Lead",
      company: "European eCommerce Platform",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-rise-orange/10 text-rise-orange rounded-full text-sm font-medium mb-4">
                What Our Users Say
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue">
                Trusted by Industry Leaders
              </h2>
            </div>
          }
          delay={100}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedText
              key={index}
              text={
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-rise-dark-blue">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              }
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
