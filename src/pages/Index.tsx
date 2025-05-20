
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import DestinationCard from "@/components/DestinationCard";
import OfferCard from "@/components/OfferCard";
import TestimonialCard from "@/components/TestimonialCard";
import { destinations } from "@/data/destinations";
import { offers } from "@/data/offers";
import { testimonials } from "@/data/testimonials";
import { Link } from "react-router-dom";

const Index = () => {
  // Sélectionner quelques destinations populaires
  const featuredDestinations = destinations.slice(0, 4);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/lovable-uploads/a61aff0e-4d3a-453c-b850-98addd49674c.png"
        title="Découvrez le monde avec ALTURA VOYAGES"
        subtitle="Des voyages sur mesure, des expériences authentiques et des souvenirs inoubliables."
        buttonText="Découvrir nos destinations"
        buttonLink="/destinations"
      />
      
      {/* Section Destinations Populaires */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2 text-gray-800">Destinations populaires</h2>
              <p className="text-gray-600">Découvrez nos destinations les plus appréciées</p>
            </div>
            <Link to="/destinations">
              <Button variant="outline" className="mt-4 md:mt-0 border-altura text-altura hover:bg-altura hover:text-white">
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
      
      {/* Section Offres Spéciales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-3 text-gray-800 text-center">Offres spéciales</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Profitez de nos meilleures offres pour des voyages exceptionnels à prix avantageux
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <OfferCard 
                key={offer.id}
                id={offer.id}
                title={offer.title}
                image={offer.image}
                originalPrice={offer.originalPrice}
                discountedPrice={offer.discountedPrice}
                duration={offer.duration}
                description={offer.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/offres">
              <Button className="bg-altura hover:bg-altura-light text-white">
                Voir toutes nos offres
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Pourquoi Nous Choisir */}
      <section className="py-16 bg-gradient-to-r from-altura to-altura-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">Pourquoi choisir ALTURA VOYAGES ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <p>Notre équipe de conseillers expérimentés vous guide vers les meilleures destinations adaptées à vos envies.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Assistance 24/7</h3>
              <p>Nous sommes à vos côtés avant, pendant et après votre voyage pour une tranquillité d'esprit totale.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Voyages sur mesure</h3>
              <p>Chaque voyage est personnalisé selon vos préférences, budget et centres d'intérêt.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-3 text-gray-800 text-center">Ce que nos clients disent</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
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
              <Button variant="outline" className="border-altura text-altura hover:bg-altura hover:text-white">
                Voir tous les avis
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4 text-gray-800">Restez informé de nos offres</h2>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres et conseils de voyage
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-altura"
              />
              <Button className="bg-altura hover:bg-altura-light text-white whitespace-nowrap">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
