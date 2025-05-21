
import { offers } from "@/data/offers";
import OfferCard from "@/components/OfferCard";
import HeroSection from "@/components/HeroSection";

const Offers = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=1920"
        title="Nos offres spéciales"
        subtitle="Profitez de nos promotions exclusives et circuits organisés pour vivre des expériences inoubliables à prix avantageux."
        buttonText="Réserver maintenant"
        buttonLink="/reservation"
      />
      
      <div className="container mx-auto px-4 py-16 text-white">
        <h2 className="font-display text-3xl font-bold mb-4 text-white">Promotions et circuits</h2>
        <p className="text-white max-w-3xl mb-10">
          Découvrez notre sélection d'offres exceptionnelles soigneusement conçues par nos experts pour vous offrir le meilleur rapport qualité-prix. Ces offres à durée limitée sont régulièrement mises à jour pour vous proposer les destinations les plus attrayantes du moment.
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
        
        {/* Section d'information supplémentaire */}
        <div className="mt-16 bg-black/40 p-8 rounded-lg border border-altura/20">
          <h3 className="font-display text-2xl font-bold mb-4 text-white">Pourquoi réserver avec ALTURA VOYAGES ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-altura">Des offres exclusives</h4>
              <p className="text-white mb-4">
                Nos partenariats privilégiés avec les compagnies aériennes, hôtels et prestataires locaux nous permettent de vous proposer des tarifs exclusifs que vous ne trouverez nulle part ailleurs.
              </p>
              
              <h4 className="font-semibold text-lg mb-2 text-altura">Flexibilité et personnalisation</h4>
              <p className="text-white">
                Même nos offres promotionnelles peuvent être adaptées selon vos préférences. Notre équipe est à votre disposition pour ajuster votre itinéraire, la durée de votre séjour ou ajouter des services complémentaires.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2 text-altura">Garantie du meilleur prix</h4>
              <p className="text-white mb-4">
                Si vous trouvez une offre identique moins chère ailleurs dans les 24h suivant votre réservation, nous nous engageons à vous rembourser la différence.
              </p>
              
              <h4 className="font-semibold text-lg mb-2 text-altura">Paiement sécurisé et facilité</h4>
              <p className="text-white">
                Profitez de nos options de paiement en plusieurs fois sans frais et de la sécurité de nos transactions en ligne certifiées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
