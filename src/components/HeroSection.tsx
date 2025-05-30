
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
    <div className="container-3d parallax-3d">
      <div 
        className="relative h-screen min-h-[600px] w-full bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          backgroundPosition: 'center 30%',
        }}
      >
        {/* Couches parallax pour effet de profondeur */}
        <div className="parallax-layer parallax-back opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-altura/20 to-transparent"></div>
        </div>
        
        <div className="parallax-layer parallax-mid opacity-40">
          <div className="w-full h-full bg-gradient-to-tl from-transparent via-altura/10 to-transparent"></div>
        </div>
        
        <div className="parallax-layer parallax-front">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white glass-3d p-8 rounded-2xl backdrop-blur-lg">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fadeIn text-white text-3d">
                {title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 animate-fadeIn text-3d">
                {subtitle}
              </p>
              <Link to={buttonLink}>
                <Button className="bg-altura hover:bg-altura-light text-black font-medium px-6 py-2 rounded-md text-lg btn-3d">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
