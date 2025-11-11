import React from 'react';
import { IMAGES, WHY_CHOOSE_US_POINTS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import BeforeAfterCard from '../components/BeforeAfterCard';
import LazyImage from '../components/LazyImage';
import ServiceCard from '../components/ServiceCard';

const WhyChooseUsPage: React.FC = () => {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">The Pristine Solar Cleaning Difference</h1>
                    <p className="text-lg text-slate-600">
                        We are more than just a cleaning service. We are your partners in renewable energy optimization. Our commitment to quality, safety, and customer satisfaction sets us apart. We treat every solar installation as if it were our own, ensuring meticulous care and delivering measurable results.
                    </p>
                </div>
                <LazyImage publicId={IMAGES.team} alt="Pristine Solar Cleaning team" className="rounded-lg shadow-xl" />
            </div>
        </div>
      </section>

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">These principles guide every job we undertake.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US_POINTS.map((point, index) => (
                <ServiceCard key={index} icon={point.icon} title={point.title} description={point.description} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-brand-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">See the Results for Yourself</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Our professional cleaning process makes a dramatic difference in both appearance and performance.</p>
          </div>
          <div className="space-y-12">
            <BeforeAfterCard beforeImageId={IMAGES.before1} afterImageId={IMAGES.after1} />
            <BeforeAfterCard beforeImageId={IMAGES.before2} afterImageId={IMAGES.after2} />
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
};

export default WhyChooseUsPage;