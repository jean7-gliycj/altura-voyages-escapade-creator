
interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, location, image, text, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <h4 className="font-medium text-sm">{name}</h4>
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
