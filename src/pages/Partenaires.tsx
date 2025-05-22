import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
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
  // We'll keep the static data for now, but in the future you could move this to Supabase
  const [partners] = useState<Partner[]>([
    { 
      name: "Air France",
      logo: "/lovable-uploads/66b71363-7db2-4887-b262-3ce32cfd76dd.png",
      description: "Compagnie aérienne de référence, Air France nous permet de vous offrir des vols de qualité vers plus de 200 destinations dans le monde."
    },
    { 
      name: "Booking.com", 
      logo: "/lovable-uploads/6858dc5d-14cd-4273-a2c3-f3d01e5e5dc0.png",
      description: "Plateforme de réservation en ligne, Booking.com nous donne accès à plus de 28 millions d'hébergements à travers le monde."
    },
    { 
      name: "Expedia", 
      logo: "/lovable-uploads/6f84144e-868c-4037-b18e-9b86ee9ace8a.png",
      description: "Leader mondial des agences de voyage en ligne, Expedia nous offre un accès privilégié à des milliers d'hôtels, vols et activités."
    }
  ]);

  // We'll get testimonials from Supabase to show alongside partners
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('is_approved', true)
          .limit(3);
        
        if (error) throw error;
        
        if (data) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

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
      
      {/* Témoignages de nos clients */}
      {!loading && testimonials.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-display font-semibold text-altura mb-6 text-center">Ce que nos clients disent de nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 99)}.jpg`}
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location || 'Client satisfait'}</p>
                  </div>
                </div>
                <div className="mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-${i < testimonial.rating ? 'yellow' : 'gray'}-400`}>★</span>
                  ))}
                </div>
                <p className="italic text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
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
            {partners.map((partner, index) => (
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
    </div>
  );
};

export default Partenaires;
