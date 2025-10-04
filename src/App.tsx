import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import RefundPolicy from './components/RefundPolicy';

const App: React.FC = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [showRefundPolicy, setShowRefundPolicy] = useState(false);

  // Monitor and clean up URL fragments
  useEffect(() => {
    const handleHashChange = () => {
      // If there's a hash that contains policy-related text, remove it
      if (window.location.hash && (
        window.location.hash.includes('refund-policy') ||
        window.location.hash.includes('privacy-policy') ||
        window.location.hash.includes('terms-of-service') ||
        window.location.hash.includes('cookie-policy')
      )) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    const handlePopState = () => {
      // Clean URL on browser back/forward
      const cleanUrl = window.location.origin + window.location.pathname;
      if (window.location.href !== cleanUrl) {
        window.history.replaceState(null, '', cleanUrl);
      }
    };

    // Listen for hash changes and popstate events
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    
    // Clean up on mount
    handleHashChange();
    
    // Force clean URL on component mount
    const cleanUrl = window.location.origin + window.location.pathname;
    if (window.location.href !== cleanUrl) {
      window.history.replaceState(null, '', cleanUrl);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handlePolicyClick = (policyType: string) => {
    // Prevent any default behavior and clear URL fragments
    const currentUrl = window.location.origin + window.location.pathname;
    window.history.replaceState(null, '', currentUrl);
    
    // Force a clean URL
    if (window.location.hash) {
      window.location.hash = '';
    }
    
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
      <Navbar />
      <main className="flex-grow pt-16 pb-8">
        <Home />
      </main>
      <Footer onPolicyClick={handlePolicyClick} />
      <Chatbot />
      <WhatsAppButton />
      
      {/* Policy Modals */}
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