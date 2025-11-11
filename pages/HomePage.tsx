import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IMAGES, SERVICES, TESTIMONIALS } from '../constants';
import LazyImage from '../components/LazyImage';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${IMAGES.after1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4">
              Maximize Your Energy
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8">
              Pristine Panels, Peak Performance. Unlock your solar system's full potential with our professional cleaning services.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/quote" className="bg-amber-400 hover:bg-amber-500 text-brand-blue-900 font-bold py-4 px-10 text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 inline-block">
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Clean Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Clean Your Solar Panels?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Dirt, dust, and debris can reduce your panel's efficiency by up to 30%.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard icon="chart" title="Increase Efficiency" description="Clean panels absorb more sunlight, leading to a significant boost in energy production." />
            <ServiceCard icon="shield" title="Protect Your Investment" description="Regular cleaning prevents permanent staining and damage, extending the lifespan of your panels." />
            <ServiceCard icon="leaf" title="Enhance Sustainability" description="Get the most out of your renewable energy source, maximizing your positive environmental impact." />
          </div>
        </div>
      </AnimatedSection>
      
      {/* Services Overview */}
      <AnimatedSection className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Professional Services</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Tailored solutions for every type of solar installation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-brand-blue-700 mb-4">{SERVICES[0].title}</h3>
                  <p className="text-slate-600 mb-6">{SERVICES[0].description}</p>
                  <Link to="/services" className="text-brand-green-600 hover:text-brand-green-700 font-semibold">Learn More &rarr;</Link>
                </div>
                <LazyImage publicId={IMAGES.serviceResidential} alt="Residential solar panels" className="rounded-lg shadow-xl w-full h-auto"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
                <LazyImage publicId={IMAGES.serviceCommercial} alt="Commercial solar panels" className="rounded-lg shadow-xl w-full h-auto order-last md:order-first"/>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-brand-blue-700 mb-4">{SERVICES[1].title}</h3>
                  <p className="text-slate-600 mb-6">{SERVICES[1].description}</p>
                  <Link to="/services" className="text-brand-green-600 hover:text-brand-green-700 font-semibold">Learn More &rarr;</Link>
                </div>
            </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-brand-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Trusted By Homeowners & Businesses</h2>
            <p className="mt-4 text-lg text-slate-300">Our results speak for themselves. Here's what our clients say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;