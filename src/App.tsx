import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/products/ProductDetail';
import BookDemo from './pages/BookDemo';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import RefundPolicy from './components/RefundPolicy';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = window.setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [showRefundPolicy, setShowRefundPolicy] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (
        window.location.hash &&
        (window.location.hash.includes('refund-policy') ||
          window.location.hash.includes('privacy-policy') ||
          window.location.hash.includes('terms-of-service') ||
          window.location.hash.includes('cookie-policy'))
      ) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handlePolicyClick = (policyType: string) => {
    const currentUrl = window.location.origin + window.location.pathname + window.location.search;
    window.history.replaceState(null, '', currentUrl);

    switch (policyType) {
      case 'privacy':
        setShowPrivacyPolicy(true);
        break;
      case 'terms':
        setShowTermsOfService(true);
        break;
      case 'cookie':
        setShowCookiePolicy(true);
        break;
      case 'refund':
        setShowRefundPolicy(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-16 pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer onPolicyClick={handlePolicyClick} />
      <Chatbot />
      <WhatsAppButton />

      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}
      {showTermsOfService && (
        <TermsOfService onClose={() => setShowTermsOfService(false)} />
      )}
      {showCookiePolicy && (
        <CookiePolicy onClose={() => setShowCookiePolicy(false)} />
      )}
      {showRefundPolicy && (
        <RefundPolicy onClose={() => setShowRefundPolicy(false)} />
      )}
    </div>
  );
};

export default App;
