import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FinderOption,
  IndustryId,
  NeedId,
  getRecommendation,
  industryOptions,
  needOptions,
} from '../data/recommendations';

interface Choice {
  id: string;
  label: string;
}

interface ChatLink {
  href: string;
  label: string;
}

interface Message {
  id: number;
  text: React.ReactNode;
  sender: 'user' | 'bot';
  timestamp: Date;
  choices?: Choice[];
  links?: ChatLink[];
  step?: 'industry' | 'need';
  industry?: IndustryId;
}

const toChoices = <T extends string>(options: FinderOption<T>[]): Choice[] =>
  options.map((option) => ({ id: option.id, label: option.label }));

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: (
        <>
          Hello! I&apos;m the <span className="text-blue-900">INFO</span>{' '}
          <span className="text-yellow-500">BSC</span> assistant. I can help you find a product or
          service, or answer a question about contact and pricing.
        </>
      ),
      sender: 'bot',
      timestamp: new Date(),
      choices: [{ id: 'start', label: 'Find a solution' }],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const pushMessages = (items: Omit<Message, 'id' | 'timestamp'>[]) => {
    const stamped = items.map((item) => {
      const id = nextId.current;
      nextId.current += 1;
      return { ...item, id, timestamp: new Date() };
    });
    setMessages((prev) => [...prev, ...stamped]);
  };

  const askIndustry = () => {
    pushMessages([
      { text: 'Find a solution', sender: 'user' },
      {
        text: 'Which area is closest to your business?',
        sender: 'bot',
        choices: toChoices(industryOptions),
        step: 'industry',
      },
    ]);
  };

  const askNeed = (industry: IndustryId, label: string) => {
    pushMessages([
      { text: label, sender: 'user' },
      {
        text: 'What do you need help with?',
        sender: 'bot',
        choices: toChoices(needOptions),
        step: 'need',
        industry,
      },
    ]);
  };

  const showResult = (industry: IndustryId, need: NeedId, label: string) => {
    const recommendation = getRecommendation(industry, need);
    pushMessages([
      { text: label, sender: 'user' },
      {
        text: (
          <>
            <strong>{recommendation.title}</strong> is the closest match. {recommendation.reason}
          </>
        ),
        sender: 'bot',
        links: recommendation.links,
      },
    ]);
  };

  const handleChoice = (message: Message, choice: Choice) => {
    if (choice.id === 'start') {
      askIndustry();
      return;
    }
    if (message.step === 'industry') {
      askNeed(choice.id as IndustryId, choice.label);
      return;
    }
    if (message.step === 'need' && message.industry) {
      showResult(message.industry, choice.id as NeedId, choice.label);
    }
  };

  const generateBotResponse = (userInput: string): React.ReactNode => {
    const input = userInput.toLowerCase();

    if (input.includes('hello') || input.includes('hi')) {
      return (
        <>
          Hello! Welcome to <span className="text-blue-900">INFO</span>{' '}
          <span className="text-yellow-500">BSC</span>. How can I assist you with your software development needs?
        </>
      );
    }

    if (input.includes('service') || input.includes('what do you do')) {
      return (
        <>
          <span className="text-blue-900">INFO</span> <span className="text-yellow-500">BSC</span> offers comprehensive software development services including web development, mobile apps, SaaS solutions, AI & automation, cloud & DevOps, and custom software development using ASP.NET Core, React, MySQL, and Azure.
        </>
      );
    }

    if (input.includes('price') || input.includes('cost') || input.includes('quote')) {
      return 'Our pricing varies based on project requirements. We offer flexible plans for startups and enterprises. Would you like to schedule a free consultation to discuss your project?';
    }

    if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
      return "You can reach us at contact@infobsc.com or call us at +94 71 249 1313. Our address is 159A, Mathrsa Road, Kalmunai -10, Sri Lanka. We're also available on WhatsApp, Facebook and LinkedIn. Would you like me to connect you with our team?";
    }

    if (input.includes('whatsapp') || input.includes('whats app')) {
      return 'Great! You can contact us on WhatsApp at +94 75 249 1313. Just click the green WhatsApp button on the bottom left of the screen, or you can send us a message directly through WhatsApp Business.';
    }

    if (input.includes('technology') || input.includes('tech stack')) {
      return 'We use modern technologies including ASP.NET Core, React, MySQL, and Azure. Our expertise covers frontend, backend, database, cloud, and mobile development.';
    }

    if (input.includes('project') || input.includes('timeline')) {
      return 'Project timelines depend on complexity and requirements. We typically deliver MVP in 4-8 weeks and full projects in 12-24 weeks. Would you like to discuss your specific project?';
    }

    if (input.includes('support') || input.includes('help') || input.includes('solution') || input.includes('product')) {
      return 'Use Find a solution and answer two short questions. I will point you to SIDS, Distribution360, INFOBSC CRM, or a custom web, mobile, or cloud build.';
    }

    return (
      <>
        Thank you for your message! I&apos;d be happy to help you with any questions about{' '}
        <span className="text-blue-900">INFO</span> <span className="text-yellow-500">BSC</span>&apos;s services.
        <br />
        <br />
        You can also contact us directly for more detailed information:
        <br />
        Phone: <strong>+94 71 249 1313</strong>
        <br />
        Email: <strong>contact@infobsc.com</strong>
      </>
    );
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return;
    const text = inputValue;
    pushMessages([{ text, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    window.setTimeout(() => {
      pushMessages([{ text: generateBotResponse(text), sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 xs:bottom-6 right-4 xs:right-6 z-50 w-12 h-12 xs:w-14 xs:h-14 md:w-14 md:h-14 bg-gradient-to-r from-blue-800 to-yellow-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
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

      {isOpen && (
        <div className="fixed bottom-20 xs:bottom-24 right-2 xs:right-4 sm:right-6 z-50 w-[calc(100vw-1rem)] xs:w-80 sm:w-96 max-w-sm h-[34rem] max-h-[calc(100vh-7rem)] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          <div className="bg-gradient-to-r from-blue-800 to-yellow-500 text-white p-3 xs:p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 xs:space-x-3">
                <div className="w-8 h-8 xs:w-10 xs:h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/logo.png" alt="INFO BSC Logo" className="w-6 h-6 xs:w-8 xs:h-8 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm xs:text-base">
                    <span className="text-white">INFO</span> BSC Assistant
                  </h3>
                  <p className="text-xs text-white/80">Online • Ready to help</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 xs:p-4 space-y-3 xs:space-y-4">
            {messages.map((message, index) => {
              const isLatest = index === messages.length - 1;
              return (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3 xs:px-4 py-2 rounded-lg ${
                      message.sender === 'user' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="text-sm break-words">{message.text}</div>
                    {message.choices && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.choices.map((choice) => (
                          <button
                            key={choice.id}
                            type="button"
                            disabled={!isLatest || isTyping}
                            onClick={() => handleChoice(message, choice)}
                            className="rounded-full border border-blue-900 bg-white px-3 py-1 text-xs font-semibold text-blue-900 disabled:opacity-50"
                          >
                            {choice.label}
                          </button>
                        ))}
                      </div>
                    )}
                    {message.links && (
                      <div className="mt-3 flex flex-col gap-2">
                        {message.links.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg bg-blue-900 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-blue-800"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 xs:p-4 border-t border-gray-200">
            <button
              type="button"
              onClick={askIndustry}
              className="mb-2 w-full rounded-lg border border-blue-900 px-3 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-50"
            >
              Find a solution
            </button>
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                disabled={isTyping}
              />
              <button
                type="button"
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-3 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
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
