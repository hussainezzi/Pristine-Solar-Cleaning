/**
 * The Services page, providing detailed information about residential and commercial
 * cleaning services, as well as the company's cleaning process.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, SERVICES } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import LazyImage from '../components/LazyImage';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
    // Data for the 4-step cleaning process section.
    const processSteps = [
        { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', title: '1. Inspection', description: 'We start with a thorough assessment of your panels to identify any specific issues or heavy soiling areas.' },
        { icon: 'M7 16V4m0 12L3 8m4 8l4-8', title: '2. Pre-Rinse', description: 'A gentle, low-pressure rinse removes loose dirt and debris without harming the panel surface.' },
        { icon: 'M4 4v5h5V4H4zm0 10h5v5H4v-5zm10-10h5v5h-5V4z', title: '3. Gentle Scrub', description: 'Using specialized, non-abrasive brushes, we carefully scrub the panels with pure deionized water.' },
        { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: '4. Final Rinse', description: 'A final rinse with deionized water ensures a spot-free, streak-free finish for maximum efficiency.' },
    ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold">Our Cleaning Services</motion.h1>
          <motion.p className="mt-4 text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to restore your solar panels to their peak performance.
          </motion.p>
        </div>
      </section>

      {/* Residential Service Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <LazyImage publicId={IMAGES.serviceResidential} alt="Residential solar panels" className="rounded-lg shadow-xl"/>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{SERVICES[0].title}</h2>
              <p className="text-slate-600 mb-6">{SERVICES[0].description}</p>
              <ul className="space-y-3">
                {SERVICES[0].details.map((detail, i) => (
                   <li key={i} className="flex items-start">
                     <svg className="h-6 w-6 text-brand-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                     <span>{detail}</span>
                   </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Commercial Service Section */}
      <AnimatedSection className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-last lg:order-first">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{SERVICES[1].title}</h2>
              <p className="text-slate-600 mb-6">{SERVICES[1].description}</p>
               <ul className="space-y-3">
                {SERVICES[1].details.map((detail, i) => (
                   <li key={i} className="flex items-start">
                     <svg className="h-6 w-6 text-brand-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                     <span>{detail}</span>
                   </li>
                ))}
              </ul>
            </div>
            <LazyImage publicId={IMAGES.serviceCommercial} alt="Commercial solar panels" className="rounded-lg shadow-xl"/>
          </div>
        </div>
      </AnimatedSection>

      {/* Cleaning Process Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our 4-Step Cleaning Process</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">We use a proven method and cutting-edge technology for safe and effective results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(step => (
                <div key={step.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="flex justify-center items-center mb-4">
                        <div className="bg-brand-green-100 p-4 rounded-full">
                            <svg className="h-8 w-8 text-brand-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d={step.icon}/></svg>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection className="bg-brand-blue-50 py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900">Ready to Boost Your Solar Output?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">Contact us today for a no-obligation, free quote and see the difference professional cleaning can make.</p>
            <Link to="/quote" className="mt-8 bg-amber-400 hover:bg-amber-500 text-brand-blue-900 font-bold py-3 px-8 text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 inline-block">
                Get a Free Quote
            </Link>
        </div>
      </AnimatedSection>

    </div>
  );
};

export default ServicesPage;