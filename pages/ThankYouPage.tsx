
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYouPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <div className="inline-block bg-brand-green-100 p-4 rounded-full mb-6">
                <svg className="h-12 w-12 text-brand-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Thank You!</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
                Your quote request has been received. Our team will review your information and get back to you within 24 hours.
            </p>
            <Link 
                to="/" 
                className="mt-8 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold py-3 px-8 text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 inline-block"
            >
                Return to Homepage
            </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;
