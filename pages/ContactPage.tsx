/**
 * The Contact page.
 * Displays contact information, a service area map, and a list of frequently asked questions.
 */
import React from 'react';
import { IMAGES, FAQS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import LazyImage from '../components/LazyImage';

const ContactPage: React.FC = () => {
  return (
    <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <AnimatedSection className="text-center mb-16">
                 <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Get In Touch</h1>
                 <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">We're here to help with any questions you may have. Reach out to us anytime.</p>
            </AnimatedSection>
            
            {/* Contact Info Section */}
            <AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-brand-blue-700 mb-2">Call Us</h3>
                        <p className="text-slate-600 text-lg">(800) 555-0199</p>
                    </div>
                     <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-brand-blue-700 mb-2">Email Us</h3>
                        <p className="text-slate-600 text-lg">contact@pristinesolar.com</p>
                    </div>
                     <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-brand-blue-700 mb-2">Visit Us</h3>
                        <p className="text-slate-600">123 Solar Way, Sunville, CA 90001</p>
                    </div>
                </div>
            </AnimatedSection>

            {/* Service Area Map Section */}
            <AnimatedSection className="mb-16">
                 <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Our Service Area</h2>
                 <p className="text-center text-slate-600 mb-8">We proudly serve the greater Sunville area and surrounding communities.</p>
                 <LazyImage publicId={IMAGES.map} alt="Service area map" className="rounded-lg shadow-xl w-full h-auto" />
            </AnimatedSection>

            {/* FAQ Section */}
            <AnimatedSection>
                <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">Frequently Asked Questions</h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-lg text-slate-800 mb-2">{faq.question}</h3>
                            <p className="text-slate-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </div>
    </div>
  );
};

export default ContactPage;