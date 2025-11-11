import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, location }) => {
  return (
    <div className="bg-white/90 dark:bg-brand-blue-800/50 p-8 rounded-lg shadow-lg text-slate-800 dark:text-slate-200">
      <p className="italic mb-6">"{quote}"</p>
      <div className="text-right">
        <p className="font-bold text-brand-blue-700 dark:text-amber-300">{name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;