/**
 * Main application component.
 * Sets up the routing structure for the entire website.
 */
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';

/**
 * A utility component that scrolls the window to the top whenever the route changes.
 * This is essential for a smooth user experience in single-page applications.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * The root component of the application.
 * It wraps all pages with a consistent Header and Footer and defines the routes.
 */
const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-white text-slate-800 font-sans">
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;