
import { FC } from "react";

interface DestinationHeroProps {
  name: string;
  image: string;
  country: string;
  continent: string;
  theme: string;
}

export const DestinationHero: FC<DestinationHeroProps> = ({ 
  name, 
  image, 
  country, 
  continent, 
  theme 
}) => {
  return (
    <div 
      className="relative h-[50vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto h-full flex items-end px-4 pb-8">
          <div className="text-white">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-2">{name}</h1>
            <div className="flex flex-wrap items-center gap-2 text-lg">
              <span>{country}</span>
              <span className="text-sm">•</span>
              <span>{continent}</span>
              <span className="text-sm">•</span>
              <span className="text-altura-light">{theme}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

