import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: 'M22.672 1.61C22.672 1.61 22.38 1.512 22.14.51c-1.08-.47-2.34-.47-2.34-.47S18.51.012 10 .012S.012.54.012.54s-1.26.03-2.34.47C-2.1.51-2.37 1.61-2.37 1.61s-.3 1.41-.3 4.29v4.23c0 2.88.3 4.29.3 4.29s.27 1.1.51 1.1c1.08.44 2.34.47 2.34.47s1.29.5 9.78.5c8.49 0 9.78-.5 9.78-.5s1.26-.03 2.34-.47c.24-.998.51-1.1.51-1.1s.3-1.41.3-4.29v-4.23c0-2.88-.3-4.29-.3-4.29z', name: 'YouTube' },
    { icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', name: 'Twitter' },
    { icon: 'M16 8.049c0-4.446-3.582-8.05-8-8.05S0 3.603 0 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z', name: 'Facebook' },
  ];

  return (
    <footer className="bg-brand-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-amber-300">Pristine Solar Cleaning</h3>
            <p className="text-slate-300">Maximizing your energy with professional, eco-friendly solar panel cleaning services.</p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(social => (
                <a key={social.name} href="#" className="text-slate-300 hover:text-amber-300 transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon}></path></svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-300 hover:text-amber-300 transition-colors duration-300">{link.name}</Link>
                </li>
              ))}
               <li><Link to="/quote" className="text-slate-300 hover:text-amber-300 transition-colors duration-300">Get a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-300 hover:text-amber-300 transition-colors duration-300">Residential Cleaning</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-amber-300 transition-colors duration-300">Commercial Cleaning</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Email: contact@pristinesolar.com</li>
              <li>Phone: (800) 555-0199</li>
              <li>123 Solar Way, Sunville, CA 90001</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-blue-800 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Pristine Solar Cleaning. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;