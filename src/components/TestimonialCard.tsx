
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
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-3">
        <Avatar className="w-10 h-10 mr-3">
          <AvatarFallback className="bg-gray-100 text-gray-600 text-sm font-medium">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium text-sm text-gray-900">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
      
      <div className="mb-2">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-400 text-sm">
            {index < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
      
      <p className="text-gray-600 italic text-sm">{text}</p>
    </div>
  );
};

export default TestimonialCard;
