import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'مرحباً بك في مجموعة باسلامه! كيف يمكنني مساعدتك اليوم؟', isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = "شكراً لتواصلك معنا. سيقوم أحد ممثلي خدمة العملاء بالرد عليك قريباً.";
      const lowerInput = inputValue.toLowerCase();
      
      if (lowerInput.includes('زيت') || lowerInput.includes('زيوت')) {
        response = "لدينا تشكيلة واسعة من الزيوت (تويوتا، كاسترول، وغيرها). هل تبحث عن لزوجة معينة؟";
      } else if (lowerInput.includes('بطارية') || lowerInput.includes('بطاريات')) {
        response = "البطاريات لدينا متوفرة بجميع الأحجام. يمكنك زيارة قسم المنتجات للتفاصيل.";
      } else if (lowerInput.includes('سعر') || lowerInput.includes('بكم')) {
        response = "الأسعار تختلف حسب المنتج والكمية. يفضل استخدام زر 'اطلب عرض سعر' للحصول على أفضل عرض.";
      }

      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);

    setInputValue('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-lg shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-primary-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">المساعد الذكي</h3>
                  <p className="text-xs text-primary-100">متاح دائماً للمساعدة</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isUser ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.isUser
                        ? 'bg-primary-500 text-white rounded-br-none'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اكتب رسالتك هنا..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              />
              <button
                onClick={handleSend}
                className="bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;
