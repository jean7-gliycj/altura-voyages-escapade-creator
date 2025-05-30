
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface OfferCardProps {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  duration: string;
  description: string;
}

const OfferCard = ({ 
  id, 
  title, 
  image, 
  originalPrice, 
  discountedPrice, 
  duration,
  description 
}: OfferCardProps) => {
  const discount = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 card-3d transform-gpu">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
          style={{ transform: 'translateZ(10px)' }}
        />
        <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-md font-bold btn-3d text-3d">
          -{discount}%
        </div>
        {/* Overlay gradient pour plus de profondeur */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-4 glass-3d bg-white/95 backdrop-blur-sm">
        <h3 className="font-display text-xl font-semibold mb-2 text-black text-3d">{title}</h3>
        
        <div className="flex items-center text-black mb-3 btn-3d rounded-full px-3 py-1 bg-altura/10">
          <Calendar className="h-4 w-4 mr-1" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }} />
          <span className="text-sm">{duration}</span>
        </div>
        
        <p className="text-sm text-black mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="glass-3d px-3 py-2 rounded-lg">
            <span className="text-sm text-black line-through opacity-70">{originalPrice} €</span>
            <span className="ml-2 text-lg font-bold text-black text-3d">{discountedPrice} €</span>
          </div>
          
          <Link 
            to={`/offres/${id}`} 
            className="bg-altura text-black px-4 py-2 rounded-md hover:bg-altura-light transition-all font-medium btn-3d"
          >
            Voir l'offre
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
