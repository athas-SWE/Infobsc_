import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm the <span className='text-blue-900'>INFO</span> <span className='text-yellow-500'>BSC</span> assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! Welcome to <span className='text-blue-900'>INFO</span> <span className='text-yellow-500'>BSC</span>. How can I assist you with your software development needs?";
    }
    
    if (input.includes('service') || input.includes('what do you do')) {
      return "<span className='text-blue-900'>INFO</span> <span className='text-yellow-500'>BSC</span> offers comprehensive software development services including web development, mobile apps, SaaS solutions, AI & automation, cloud & DevOps, and custom software development using ASP.NET Core, React, MySQL, and Azure.";
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('quote')) {
      return "Our pricing varies based on project requirements. We offer flexible plans for startups and enterprises. Would you like to schedule a free consultation to discuss your project?";
    }
    
    if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
      return "You can reach us at contact@infobsc.com or call us at +94 75 249 1313. Our address is 159A, Mathrsa Road, Kalmunai -10, Sri Lanka. We're also available on WhatsApp, Facebook and LinkedIn. Would you like me to connect you with our team?";
    }

    if (input.includes('whatsapp') || input.includes('whats app')) {
      return "Great! You can contact us on WhatsApp at +94 75 249 1313. Just click the green WhatsApp button on the bottom left of the screen, or you can send us a message directly through WhatsApp Business.";
    }
    
    if (input.includes('technology') || input.includes('tech stack')) {
      return "We use modern technologies including ASP.NET Core, React, MySQL, and Azure. Our expertise covers frontend, backend, database, cloud, and mobile development.";
    }
    
    if (input.includes('project') || input.includes('timeline')) {
      return "Project timelines depend on complexity and requirements. We typically deliver MVP in 4-8 weeks and full projects in 12-24 weeks. Would you like to discuss your specific project?";
    }
    
    if (input.includes('support') || input.includes('help')) {
      return "We provide 24/7 technical support for all our clients. Our team is always ready to help with any issues or questions you might have.";
    }
    
    return "Thank you for your message! I'd be happy to help you with any questions about <span className='text-blue-900'>INFO</span> <span className='text-yellow-500'>BSC</span>'s services. You can also contact us directly for more detailed information.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 xs:bottom-6 right-4 xs:right-6 z-50 w-12 h-12 xs:w-14 xs:h-14 md:w-14 md:h-14 bg-gradient-to-r from-blue-800 to-yellow-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center chatbot-button overflow-hidden"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 xs:bottom-24 right-4 xs:right-6 z-50 w-80 xs:w-96 sm:w-96 md:w-80 md:h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col chatbot-window">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-800 to-yellow-500 text-white p-3 xs:p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 xs:space-x-3">
                <div className="w-8 h-8 xs:w-10 xs:h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src="/src/logo.png"
                    alt="INFO BSC Logo"
                    className="w-6 h-6 xs:w-8 xs:h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm xs:text-base">
                    <span className="text-blue-900">INFO</span> <span className="text-yellow-500">BSC</span> Assistant
                  </h3>
                  <p className="text-xs text-white/80">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 xs:p-4 space-y-3 xs:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 max-w-xs px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 xs:p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 xs:px-3 py-2 xs:py-2 border border-gray-300 rounded-lg text-sm xs:text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-3 xs:px-4 py-2 xs:py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm xs:text-base"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
