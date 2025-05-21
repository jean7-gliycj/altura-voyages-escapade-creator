import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import DestinationCard from "@/components/DestinationCard";
import TestimonialCard from "@/components/TestimonialCard";
import { destinations } from "@/data/destinations";
import { testimonials } from "@/data/testimonials";
import { Link } from "react-router-dom";
import OffersCarousel from "@/components/OffersCarousel";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin } from "lucide-react";
import PromoBubble from "@/components/PromoBubble";

const Index = () => {
  // Sélectionner quelques destinations populaires
  const featuredDestinations = destinations.slice(0, 4);
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Inscription réussie !",
        description: "Vous êtes maintenant inscrit à notre newsletter.",
      });
      
      setEmail("");
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with stunning travel image */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        title="Découvrez le monde avec ALTURA VOYAGES"
        subtitle="Des voyages sur mesure, des expériences authentiques et des souvenirs inoubliables."
        buttonText="Découvrir nos destinations"
        buttonLink="/destinations"
      />
      
      {/* Section Offres Carousel */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4 mb-6">
          <h2 className="font-display text-3xl font-bold mb-2 text-altura">Offres spéciales</h2>
          <p className="text-gray-300 mb-6">
            Profitez de nos meilleures offres pour des voyages exceptionnels à prix avantageux
          </p>
        </div>
        <OffersCarousel />
      </section>
      
      {/* Section Destinations Populaires */}
      <section className="py-16 bg-black border-t border-altura/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2 text-altura">Destinations populaires</h2>
              <p className="text-gray-300">Découvrez nos destinations les plus appréciées</p>
            </div>
            <Link to="/destinations">
              <Button variant="outline" className="mt-4 md:mt-0 border-altura text-altura hover:bg-altura hover:text-black">
                Voir toutes les destinations
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination) => (
              <DestinationCard 
                key={destination.id}
                id={destination.id}
                name={destination.name}
                image={destination.image}
                country={destination.country}
                continent={destination.continent}
                price={destination.price}
                theme={destination.theme}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Promotion Flight Tickets */}
      <section className="py-12 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="relative inline-block mb-4 animate-pulse">
            <div className="absolute -inset-1 rounded-full blur-sm bg-white opacity-70"></div>
            <div className="relative bg-white text-red-600 text-6xl font-black py-4 px-8 rounded-full">
              -40%
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Promotion Exceptionnelle sur les Billets d'Avion</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pour une durée limitée, profitez d'une réduction de 40% sur tous nos billets d'avion pour des destinations de rêve
          </p>
          <Link to="/offres">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Découvrir nos offres
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Section Pourquoi Nous Choisir */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 border-t border-b border-altura/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-12 text-altura text-center">Pourquoi choisir ALTURA VOYAGES ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-black/50 rounded-lg border border-altura/10">
              <div className="bg-altura/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-altura">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-altura">Expertise</h3>
              <p className="text-gray-300">Notre équipe de conseillers expérimentés vous guide vers les meilleures destinations adaptées à vos envies.</p>
            </div>
            
            <div className="text-center p-6 bg-black/50 rounded-lg border border-altura/10">
              <div className="bg-altura/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-altura">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-altura">Assistance 24/7</h3>
              <p className="text-gray-300">Nous sommes à vos côtés avant, pendant et après votre voyage pour une tranquillité d'esprit totale.</p>
            </div>
            
            <div className="text-center p-6 bg-black/50 rounded-lg border border-altura/10">
              <div className="bg-altura/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-altura">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-altura">Voyages sur mesure</h3>
              <p className="text-gray-300">Chaque voyage est personnalisé selon vos préférences, budget et centres d'intérêt.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Témoignages */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-3 text-altura text-center">Ce que nos clients disent</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Découvrez les expériences de voyage vécues par nos clients
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                image={testimonial.image}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/avis">
              <Button variant="outline" className="border-altura text-altura hover:bg-altura hover:text-black">
                Voir tous les avis
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Google Map */}
      <section className="py-16 bg-black border-t border-altura/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-3 text-altura text-center">Nos bureaux</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Rendez-nous visite dans nos locaux pour planifier votre prochain voyage
          </p>
          
          <div className="bg-black/50 p-4 rounded-lg border border-altura/20 mb-6 flex items-center justify-center">
            <MapPin className="text-altura mr-2" />
            <p className="text-white">123 Rue du Voyage, 75001 Paris, France</p>
          </div>
          
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <iframe 
              title="Google Maps" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3417314!3d48.8583701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjciTiAywrAyMCczMC4yIkU!5e0!3m2!1sfr!2sfr!4v1652956539318!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Section Newsletter */}
      <section className="py-16 bg-black border-t border-altura/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4 text-altura">Restez informé de nos offres</h2>
            <p className="text-gray-300 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres et conseils de voyage
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-md border border-altura/50 bg-black text-white focus:outline-none focus:border-altura"
                required
              />
              <Button className="bg-altura hover:bg-altura-light text-black whitespace-nowrap">
                S'abonner
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Add the floating promo bubble */}
      <PromoBubble />
    </div>
  );
};

export default Index;
