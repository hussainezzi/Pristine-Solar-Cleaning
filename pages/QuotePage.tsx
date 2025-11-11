
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const QuotePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'residential',
    totalKilowatt: '',
    numberOfPanels: '',
    mountingType: 'elevated',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "923117527353";
    const message = `
*New Quote Request from Pristine Solar Cleaning Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Address:* ${formData.address}
*Service Type:* ${formData.serviceType}
*Total Kilowatt (kW):* ${formData.totalKilowatt || 'N/A'}
*Number of Panels:* ${formData.numberOfPanels || 'N/A'}
*Mounting Type:* ${formData.mountingType}
*Message:* ${formData.message || 'No additional details provided.'}
    `.trim().replace(/\n\s*\n/g, '\n'); // Clean up whitespace for the URL

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    // Navigate to thank you page after attempting to open WhatsApp
    navigate('/thank-you');
  };

  return (
    <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-2">Get Your Free, No-Obligation Quote</h1>
                <p className="text-slate-600 text-center mb-8">Fill out the form below and send it to us via WhatsApp.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500" onChange={handleChange} value={formData.name} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500" onChange={handleChange} value={formData.email} />
                        </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                            <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500" onChange={handleChange} value={formData.phone} />
                        </div>
                        <div>
                            <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700">Service Type</label>
                            <select id="serviceType" name="serviceType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500 sm:text-sm rounded-md" onChange={handleChange} value={formData.serviceType}>
                                <option value="residential">Residential</option>
                                <option value="commercial">Commercial</option>
                            </select>
                        </div>
                    </div>
                     <div>
                        <label htmlFor="address" className="block text-sm font-medium text-slate-700">Property Address</label>
                        <input type="text" name="address" id="address" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500" onChange={handleChange} value={formData.address} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="totalKilowatt" className="block text-sm font-medium text-slate-700">Total Kilowatt (kW)</label>
                            <input type="number" name="totalKilowatt" id="totalKilowatt" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500" onChange={handleChange} value={formData.totalKilowatt} />
                        </div>
                        <div>
                            <label htmlFor="numberOfPanels" className="block text-sm font-medium text-slate-700">Number of Panels</label>
                            <input type="number" name="numberOfPanels" id="numberOfPanels" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500" onChange={handleChange} value={formData.numberOfPanels} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="mountingType" className="block text-sm font-medium text-slate-700">Type of Mounting</label>
                        <select id="mountingType" name="mountingType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500 sm:text-sm rounded-md" onChange={handleChange} value={formData.mountingType}>
                            <option value="elevated">Elevated</option>
                            <option value="ground-mounted">Ground Mounted</option>
                            <option value="rail-mounted">Rail Mounted</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message (Optional)</label>
                        <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500" placeholder="Any additional details?" onChange={handleChange} value={formData.message}></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-full md:w-auto bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold py-3 px-8 text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 inline-flex items-center justify-center">
                           <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.956-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.654 4.288 1.911 6.006l.167.248-1.103 4.057 4.135-1.082.244.165z"/></svg>
                           Send via WhatsApp
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    </div>
  );
};

export default QuotePage;