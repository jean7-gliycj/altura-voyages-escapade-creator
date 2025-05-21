
import { Link } from "react-router-dom";

interface DestinationCardProps {
  id: string;
  name: string;
  image: string;
  country: string;
  continent: string;
  price: number;
  theme: string;
}

const DestinationCard = ({ id, name, image, country, continent, price, theme }: DestinationCardProps) => {
  return (
    <Link to={`/destinations/${id}`}>
      <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium text-altura">
            {theme}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display text-lg font-semibold text-black">{name}</h3>
            <span className="text-sm font-medium text-green-600">{price} €</span>
          </div>
          <div className="flex items-center text-sm text-black">
            <span>{country}</span>
            <span className="mx-2">•</span>
            <span>{continent}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
