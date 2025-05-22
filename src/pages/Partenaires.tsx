
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Partenaires = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-altura mb-6">Nos Partenaires</h1>
      
      <div className="mb-10">
        <p className="text-lg mb-6">
          ALTURA VOYAGES collabore avec les plus grands noms de l'industrie du voyage pour vous offrir 
          des expériences exceptionnelles et des services de qualité supérieure. Nos partenariats 
          stratégiques nous permettent de vous proposer des offres exclusives et des avantages uniques.
        </p>
      </div>
      
      {/* Section partenaires principaux avec logo et description */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
        <h2 className="text-2xl font-display font-semibold text-altura mb-6 text-center">Tous nos partenaires</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {allPartners.map((partner, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
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
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <p className="italic mb-3">
                  "Notre partenariat avec ALTURA VOYAGES a considérablement enrichi l'expérience de nos clients communs. 
                  Leur engagement envers l'excellence et leur service personnalisé correspondent parfaitement à nos valeurs."
                </p>
                <p className="font-semibold text-altura">Sophie Martin</p>
                <p className="text-sm">Directrice des Partenariats, Accor Hotels</p>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-700">
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                <AvatarFallback>TL</AvatarFallback>
              </Avatar>
              <div>
                <p className="italic mb-3">
                  "En tant que compagnie aérienne, nous apprécions le professionnalisme d'ALTURA VOYAGES et leur
                  capacité à créer des voyages mémorables pour nos passagers communs. Une collaboration fructueuse depuis plus de 5 ans."
                </p>
                <p className="font-semibold text-altura">Thomas Leroy</p>
                <p className="text-sm">Responsable Commercial, Air France</p>
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
    name: "Accor Hotels", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/AccorHotels_logo.svg/1280px-AccorHotels_logo.svg.png",
    description: "Leader mondial de l'hôtellerie, Accor Hotels nous garantit un hébergement de qualité dans plus de 5000 établissements à travers le monde."
  },
  { 
    name: "Club Med", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Club_Med_Logo_2019.svg/2560px-Club_Med_Logo_2019.svg.png",
    description: "Pionnier des villages de vacances tout compris, Club Med nous permet de vous proposer des séjours inoubliables dans des cadres exceptionnels."
  },
  { 
    name: "TUI", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/TUI_logo_2018.svg/2560px-TUI_logo_2018.svg.png",
    description: "Géant mondial du tourisme, TUI nous aide à créer des expériences de voyage complètes et sur mesure pour nos clients les plus exigeants."
  },
  { 
    name: "Costa Croisières", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Costa_Cruises_Logo_%282014%29.svg/2560px-Costa_Cruises_Logo_%282014%29.svg.png",
    description: "Spécialiste des croisières en Méditerranée et dans les Caraïbes, Costa nous permet de vous faire découvrir le monde autrement."
  },
  { 
    name: "Booking.com", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png",
    description: "Plateforme de réservation en ligne, Booking.com nous donne accès à plus de 28 millions d'hébergements à travers le monde."
  }
];

// Liste complète des partenaires pour le diaporama
const allPartners = [
  { name: "Air France", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/2560px-Air_France_Logo.svg.png" },
  { name: "Accor Hotels", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/AccorHotels_logo.svg/1280px-AccorHotels_logo.svg.png" },
  { name: "Club Med", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Club_Med_Logo_2019.svg/2560px-Club_Med_Logo_2019.svg.png" },
  { name: "Thomas Cook", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Thomas_Cook_logo.svg/1280px-Thomas_Cook_logo.svg.png" },
  { name: "TUI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/TUI_logo_2018.svg/2560px-TUI_logo_2018.svg.png" },
  { name: "Kuoni", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kuoni_logo.svg/1280px-Kuoni_logo.svg.png" },
  { name: "Booking.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png" },
  { name: "Expedia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Expedia_2012_logo.svg/1280px-Expedia_2012_logo.svg.png" },
  { name: "Costa Croisières", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Costa_Cruises_Logo_%282014%29.svg/2560px-Costa_Cruises_Logo_%282014%29.svg.png" },
  { name: "MSC Croisières", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/MSC_Cruises_logo.svg/2560px-MSC_Cruises_logo.svg.png" },
  { name: "Emirates", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" },
  { name: "Hilton", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hilton_logo_white.svg/2560px-Hilton_logo_white.svg.png" },
  { name: "Hertz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Hertz_Logo_2020.svg/1200px-Hertz_Logo_2020.svg.png" },
  { name: "Avis", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Avis_logo.svg/1280px-Avis_logo.svg.png" },
  { name: "Lufthansa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lufthansa_logo.svg/2560px-Lufthansa_logo.svg.png" }
];

export default Partenaires;
