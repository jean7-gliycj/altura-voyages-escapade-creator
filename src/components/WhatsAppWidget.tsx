
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+33123456789"; // Replace with your actual WhatsApp number
  
  return (
    <>
      {/* WhatsApp Button */}
      <div 
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all">
          <MessageCircle size={24} />
        </div>
      </div>
      
      {/* WhatsApp Popup */}
      {isVisible && (
        <div className="fixed bottom-20 right-6 z-50 bg-white rounded-lg shadow-xl w-72 overflow-hidden">
          <div className="bg-green-500 p-4 flex justify-between items-center">
            <div className="text-white font-medium">Discuter avec nous</div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200"
            >
              &times;
            </button>
          </div>
          
          <div className="p-4 bg-gray-100">
            <p className="text-gray-700 mb-4">Besoin d'aide pour votre voyage ? Discutez avec nous sur WhatsApp.</p>
            <a 
              href={`https://wa.me/${phoneNumber}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white text-center py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Démarrer la discussion
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;
