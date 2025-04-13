
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  stars?: number;
  className?: string;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  stars = 5,
  className,
  index = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('translate-y-8');
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div
      ref={cardRef}
      className={cn(
        'bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300',
        'border border-gray-100 opacity-0 translate-y-8',
        className
      )}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={cn(
              'mr-1',
              i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            )}
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      
      <div>
        <p className="font-semibold text-rise-dark-blue">{author}</p>
        <p className="text-sm text-gray-500">{role}, {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
