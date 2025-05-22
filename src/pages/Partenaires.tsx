
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define partner types with proper interfaces
interface Partner {
  name: string;
  logo: string;
  description?: string;
}

const Partenaires = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-altura mb-6">Nos Partenaires</h1>
      
      <div className="mb-10">
        <p className="text-lg mb-6">
          ALTURA VOYAGES collabore avec des leaders mondiaux du voyage pour vous offrir 
          des expériences exceptionnelles et des services de qualité supérieure. Nos partenariats 
          stratégiques nous permettent de vous proposer des offres exclusives et des avantages uniques.
        </p>
      </div>
      
      {/* Section partenaires principaux avec logo et description */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {partners.map((partner, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg mb-4 w-full h-32 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-display font-semibold text-altura mb-2">{partner.name}</h3>
              <p className="text-sm text-center">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Diaporama de tous les logos */}
      <div className="mb-10">
        <h2 className="text-2xl font-display font-semibold text-altura mb-6 text-center">Nos partenaires exclusifs</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {partnersCarousel.map((partner, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                <div className="bg-white p-4 rounded-md flex items-center justify-center h-32">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="static mr-2 transform-none" />
            <CarouselNext className="static ml-2 transform-none" />
          </div>
        </Carousel>
      </div>
      
      {/* Section témoignages de partenaires */}
      <div className="mb-10">
        <h2 className="text-2xl font-display font-semibold text-altura mb-6 text-center">Témoignages de nos partenaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-gray-700">
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div>
                <p className="italic mb-3">
                  "Notre partenariat avec ALTURA VOYAGES a considérablement enrichi l'expérience de nos clients communs. 
                  Leur engagement envers l'excellence et leur service personnalisé correspondent parfaitement à nos valeurs."
                </p>
                <p className="font-semibold text-altura">Sophie Martin</p>
                <p className="text-sm">Directrice des Partenariats, Air France</p>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-700">
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                <AvatarFallback>BE</AvatarFallback>
              </Avatar>
              <div>
                <p className="italic mb-3">
                  "En tant que plateforme de réservation mondiale, nous apprécions le professionnalisme d'ALTURA VOYAGES et leur
                  capacité à créer des voyages mémorables pour nos clients communs. Une collaboration fructueuse depuis plus de 5 ans."
                </p>
                <p className="font-semibold text-altura">Thomas Leroy</p>
                <p className="text-sm">Responsable Commercial, Booking.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Devenir partenaire */}
      <div className="bg-card rounded-lg p-8 border border-gray-700">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-display font-semibold text-altura mb-3">Devenir partenaire</h2>
          <p className="max-w-3xl mx-auto">
            Vous souhaitez rejoindre notre réseau de partenaires de confiance ? ALTURA VOYAGES est constamment à la recherche de nouvelles collaborations 
            pour enrichir son offre et proposer des expériences toujours plus exceptionnelles à ses clients.
          </p>
        </div>
        <div className="flex justify-center">
          <a 
            href="mailto:partenariat@alturavoyages.com" 
            className="bg-altura text-black px-6 py-3 rounded-md font-semibold hover:bg-altura-light transition-colors"
          >
            Contactez notre service partenariat
          </a>
        </div>
      </div>
    </div>
  );
};

// Partenaires principaux avec description
const partners = [
  { 
    name: "Air France",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/2560px-Air_France_Logo.svg.png",
    description: "Compagnie aérienne de référence, Air France nous permet de vous offrir des vols de qualité vers plus de 200 destinations dans le monde."
  },
  { 
    name: "Booking.com", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png",
    description: "Plateforme de réservation en ligne, Booking.com nous donne accès à plus de 28 millions d'hébergements à travers le monde."
  },
  { 
    name: "Expedia", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Expedia_2012_logo.svg/1280px-Expedia_2012_logo.svg.png",
    description: "Leader mondial des agences de voyage en ligne, Expedia nous offre un accès privilégié à des milliers d'hôtels, vols et activités."
  }
];

// Liste pour le diaporama (restreinte aux 3 partenaires demandés)
const partnersCarousel = [
  { name: "Air France", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/2560px-Air_France_Logo.svg.png" },
  { name: "Booking.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png" },
  { name: "Expedia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Expedia_2012_logo.svg/1280px-Expedia_2012_logo.svg.png" }
];

export default Partenaires;
