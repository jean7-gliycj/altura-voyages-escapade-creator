
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, location, image, text, rating }: TestimonialCardProps) => {
  // Extraire les initiales du nom
  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 card-3d transform-gpu">
      <div className="flex items-center mb-3">
        <div className="btn-3d rounded-full p-0 bg-gradient-to-br from-altura/20 to-altura/40">
          <Avatar className="w-10 h-10 mr-3">
            <AvatarFallback className="bg-gradient-to-br from-altura/30 to-altura/60 text-gray-800 text-sm font-medium text-3d">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-900 text-3d">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
      
      <div className="mb-2">
        {[...Array(5)].map((_, index) => (
          <span 
            key={index} 
            className={`text-yellow-400 text-sm transition-all duration-300 hover:scale-125 inline-block ${
              index < rating ? 'text-3d' : ''
            }`}
            style={{
              filter: index < rating ? 'drop-shadow(0 2px 4px rgba(255, 193, 7, 0.5))' : 'none',
              transform: 'translateZ(5px)'
            }}
          >
            {index < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
      
      <p className="text-gray-600 italic text-sm leading-relaxed">{text}</p>
    </div>
  );
};

export default TestimonialCard;
