
import { useState, useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Percent, Airplane } from 'lucide-react';

const offerSlides = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80',
    title: '5 jours inoubliables à DUBAI',
    description: 'Réservez dès maintenant pour seulement 780€/couple ou 1130€',
    buttonText: 'Réserver maintenant',
    buttonLink: '/reservation',
    showFlightDiscount: true
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80',
    title: 'Offre spéciale: 5 jours à Dubai',
    description: 'Séjour, activités et logement inclus',
    buttonText: 'Découvrir l\'offre',
    buttonLink: '/offres',
    showFlightDiscount: false
  },
  {
    id: 'zanzibar1',
    image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&h=600&q=80',
    title: 'Évasion Paradisiaque à Zanzibar',
    description: 'Profitez des plages de sable blanc et des eaux cristallines',
    buttonText: 'Découvrir Zanzibar',
    buttonLink: '/destinations/zanzibar',
    showFlightDiscount: true
  },
  {
    id: 'zanzibar2',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&h=600&q=80',
    title: 'Culture & Épices de Zanzibar',
    description: 'Explorez l\'île aux épices et sa riche culture',
    buttonText: 'Explorer les offres',
    buttonLink: '/offres',
    showFlightDiscount: false
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80',
    title: 'Magnifique Paris',
    description: 'Découvrez la ville des lumières à petit prix',
    buttonText: 'Voir les détails',
    buttonLink: '/destinations',
    showFlightDiscount: true
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80',
    title: 'New York City',
    description: 'La ville qui ne dort jamais vous attend',
    buttonText: 'Explorer',
    buttonLink: '/destinations',
    showFlightDiscount: false
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80',
    title: 'Tokyo',
    description: 'Découvrez le parfait mélange de traditions et modernité',
    buttonText: 'Voir l\'offre',
    buttonLink: '/destinations',
    showFlightDiscount: true
  }
];

const OffersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselApiRef = useRef<any>(null);
  
  // Always auto-scroll, no option to stop it
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
        
        // Update current slide indicator
        const newIndex = (currentSlide + 1) % offerSlides.length;
        setCurrentSlide(newIndex);
      }
    }, 4000); // Auto-scroll every 4 seconds
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  // Handle direct slide indicator clicks
  const goToSlide = (index: number) => {
    if (carouselApiRef.current && index !== currentSlide) {
      const curr = currentSlide;
      if (index > curr) {
        // Need to go forward
        const stepsForward = index - curr;
        for (let i = 0; i < stepsForward; i++) {
          setTimeout(() => {
            carouselApiRef.current.scrollNext();
          }, 50 * i);
        }
      } else {
        // Need to go backward
        const stepsBackward = curr - index;
        for (let i = 0; i < stepsBackward; i++) {
          setTimeout(() => {
            carouselApiRef.current.scrollPrev();
          }, 50 * i);
        }
      }
      setCurrentSlide(index);
    }
  };
  
  // Store the API reference when carousel is loaded
  const handleCarouselApi = (api: any) => {
    carouselApiRef.current = api;
  };
  
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={handleCarouselApi}
      >
        <CarouselContent>
          {offerSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-lg bg-black bg-opacity-70 p-6 rounded-lg">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-white mb-4">{slide.description}</p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <Link to={slide.buttonLink}>
                          <Button className="bg-altura hover:bg-altura-light text-black font-medium">
                            {slide.buttonText}
                          </Button>
                        </Link>
                        
                        {slide.showFlightDiscount && (
                          <div className="flex items-center bg-red-600 text-white px-3 py-1 rounded-full animate-pulse">
                            <Percent className="h-4 w-4 mr-1" />
                            <span className="font-bold">-40%</span>
                            <Airplane className="h-4 w-4 mx-1" />
                            <span className="text-sm">sur les vols</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-altura text-black hover:bg-altura-light" />
        <CarouselNext className="right-4 bg-altura text-black hover:bg-altura-light" />
      </Carousel>
      
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {offerSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-altura" : "bg-white bg-opacity-50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersCarousel;
