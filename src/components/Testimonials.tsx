
import React from 'react';
import TestimonialCard from './TestimonialCard';
import AnimatedText from './AnimatedText';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "HeyRise has transformed our business. The analytics tools helped us understand our customers better and increase our conversion rate by 40%.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      stars: 5
    },
    {
      quote: "Setting up our online store was incredibly easy with HeyRise. Their customer support team was always available to help us through the process.",
      author: "David Chen",
      role: "Founder",
      company: "Artisan Goods",
      stars: 5
    },
    {
      quote: "We've tried many platforms, but HeyRise stands out with its intuitive interface and powerful features. It's helped us scale our business globally.",
      author: "Michael Rodriguez",
      role: "E-commerce Manager",
      company: "Global Retail",
      stars: 4
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-rise-orange/5"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-rise-blue/10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text={
              <h2 className="text-3xl md:text-4xl font-bold text-rise-dark-blue mb-4">
                Trusted by <span className="text-rise-orange">growing businesses</span> everywhere
              </h2>
            }
            delay={100}
          />
          
          <AnimatedText
            text={
              <p className="text-gray-600 text-lg">
                Don't just take our word for it. See what our customers have to say about their experience with HeyRise.
              </p>
            }
            delay={300}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              stars={testimonial.stars}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
