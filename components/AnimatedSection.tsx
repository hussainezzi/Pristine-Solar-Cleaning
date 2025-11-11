/**
 * A reusable wrapper component that animates its children when they scroll into view.
 * It uses Framer Motion's `whileInView` for efficient, declarative animations.
 */
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay for staggering animations.
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, delay = 0 }) => {
  return (
    <motion.section
      className={className}
      // Initial state: invisible and slightly below its final position.
      initial={{ opacity: 0, y: 50 }}
      // Animate to: fully visible at its original position when it enters the viewport.
      whileInView={{ opacity: 1, y: 0 }}
      // `viewport` settings: `once` ensures the animation only runs once.
      // `amount: 0.3` triggers the animation when 30% of the element is visible.
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;