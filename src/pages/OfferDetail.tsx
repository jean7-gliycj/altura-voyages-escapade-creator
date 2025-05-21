
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { offers } from "@/data/offers";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OfferDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [offer, setOffer] = useState<typeof offers[0] | null>(null);
  const { toast } = useToast();
  const whatsappNumber = "+33745913946";
  const [selectedClass, setSelectedClass] = useState<"economy" | "business">("economy");
  
  // Business class costs 60% more than economy
  const businessClassPrice = offer ? Math.round(offer.discountedPrice * 1.6) : 0;
  
  useEffect(() => {
    const foundOffer = offers.find(o => o.id === id);
    if (foundOffer) {
      setOffer(foundOffer);
      // Scroll to top when offer changes
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  const handleWhatsAppClick = () => {
    if (!offer) return;
    
    const travelClass = selectedClass === "business" ? "en VIP" : "en classe économique";
    const price = selectedClass === "business" ? businessClassPrice : offer.discountedPrice;
    
    const message = encodeURIComponent(`Bonjour, je suis intéressé(e) par votre offre spéciale "${offer.title}" ${travelClass} à ${price}€. Pouvez-vous me donner plus d'informations ?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    toast({
      title: "Redirection vers WhatsApp",
      description: "Vous allez être redirigé vers WhatsApp pour discuter avec notre équipe.",
    });
  };
  
  if (!offer) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Offre non trouvée</h1>
          <Link to="/offres">
            <Button>Retour aux offres</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero image */}
      <div 
        className="relative h-[50vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${offer.image})` }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto h-full flex items-end px-4 pb-8">
            <div className="text-white">
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-2">{offer.title}</h1>
              <div className="flex flex-wrap items-center gap-2 text-lg">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full">-{Math.round(((offer.originalPrice - offer.discountedPrice) / offer.originalPrice) * 100)}%</span>
                <span>{offer.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold mb-6">Détails de l'offre</h2>
            <p className="text-lg mb-6">{offer.details}</p>
            
            <div className="mb-8">
              <h3 className="font-display text-xl font-semibold mb-4">Inclus dans l'offre</h3>
              <ul className="list-disc pl-5 space-y-2">
                {offer.inclusions.map((inclusion, index) => (
                  <li key={index}>{inclusion}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Non inclus</h3>
              <ul className="list-disc pl-5 space-y-2">
                {offer.exclusions.map((exclusion, index) => (
                  <li key={index}>{exclusion}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="bg-gray-50 rounded-lg p-6 h-fit">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-black">Choisissez votre classe de voyage</h3>
              
              {/* Class selection */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div 
                  className={`border rounded-lg p-3 cursor-pointer ${selectedClass === "economy" 
                    ? "border-altura bg-altura/10" 
                    : "border-gray-300"}`}
                  onClick={() => setSelectedClass("economy")}
                >
                  <div className="font-medium text-black">Classe Économique</div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500 line-through">{offer.originalPrice} €</span>
                    <span className="text-lg font-bold text-altura">{offer.discountedPrice} €</span>
                  </div>
                </div>
                
                <div 
                  className={`border rounded-lg p-3 cursor-pointer ${selectedClass === "business" 
                    ? "border-altura bg-altura/10" 
                    : "border-gray-300"}`}
                  onClick={() => setSelectedClass("business")}
                >
                  <div className="font-medium text-black font-bold">VIP</div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500 line-through">{Math.round(offer.originalPrice * 1.6)} €</span>
                    <span className="text-lg font-bold text-altura">{businessClassPrice} €</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-black">Prix pour {offer.duration}</p>
            </div>
            
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 py-6 mb-4"
              onClick={handleWhatsAppClick}
            >
              <MessageSquare size={20} />
              Discuter de cette offre
            </Button>
            
            <Link to="/reservation">
              <Button className="w-full bg-altura hover:bg-altura-light text-black">
                Réserver maintenant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetail;
