
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
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-md font-bold">
          -{discount}%
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
        
        <div className="flex items-center text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">{duration}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500 line-through">{originalPrice} €</span>
            <span className="ml-2 text-lg font-bold text-altura">{discountedPrice} €</span>
          </div>
          
          <Link 
            to={`/offres/${id}`} 
            className="bg-altura text-white px-4 py-2 rounded-md hover:bg-altura-light transition-colors"
          >
            Voir l'offre
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
