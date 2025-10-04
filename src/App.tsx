import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-16 pb-8">
        <Home />
      </main>
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
};

export default App;