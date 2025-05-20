
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink
}: HeroSectionProps) => {
  return (
    <div 
      className="relative h-screen min-h-[600px] w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fadeIn">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 animate-fadeIn">
            {subtitle}
          </p>
          <Link to={buttonLink}>
            <Button className="bg-altura hover:bg-altura-light text-white font-medium px-6 py-2 rounded-md text-lg">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
