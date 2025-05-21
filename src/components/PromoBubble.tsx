
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const PromoBubble = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Simple animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-20 right-8 z-50">
      <div 
        className={`relative rounded-full bg-red-600 w-32 h-32 flex flex-col items-center justify-center text-white shadow-lg transform ${isAnimating ? 'scale-105' : 'scale-100'} transition-transform duration-1000`}
      >
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-2 right-2 text-white hover:text-gray-200"
          aria-label="Fermer"
        >
          <X size={16} />
        </button>
        
        <span className="text-3xl font-bold">-40%</span>
        <span className="text-center text-xs px-2">sur les billets d'avion</span>
        
        <Link to="/offres" className="mt-2">
          <button className="bg-white text-red-600 text-xs px-3 py-1 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Voir offres
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PromoBubble;
