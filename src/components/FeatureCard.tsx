
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
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
            }, index * 100);
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
        'bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 translate-y-8',
        'border border-gray-100 hover:border-rise-orange/20',
        'group cursor-pointer',
        className
      )}
    >
      <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-rise-light-blue text-rise-orange group-hover:bg-rise-orange/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-rise-dark-blue group-hover:text-rise-orange transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
