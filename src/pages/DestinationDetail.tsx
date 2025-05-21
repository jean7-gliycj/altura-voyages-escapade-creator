
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { destinations } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<typeof destinations[0] | null>(null);
  const { toast } = useToast();
  const whatsappNumber = "+33745913946";
  
  useEffect(() => {
    const foundDestination = destinations.find(d => d.id === id);
    if (foundDestination) {
      setDestination(foundDestination);
      // Scroll to top when destination changes
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  const handleWhatsAppClick = () => {
    if (!destination) return;
    
    const message = encodeURIComponent(`Bonjour, je suis intéressé(e) par votre destination "${destination.name}" à ${destination.country}. Pouvez-vous me donner plus d'informations ?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    toast({
      title: "Redirection vers WhatsApp",
      description: "Vous allez être redirigé vers WhatsApp pour discuter avec notre équipe.",
    });
  };
  
  if (!destination) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination non trouvée</h1>
          <Link to="/destinations">
            <Button>Retour aux destinations</Button>
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
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto h-full flex items-end px-4 pb-8">
            <div className="text-white">
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-2">{destination.name}</h1>
              <div className="flex flex-wrap items-center gap-2 text-lg">
                <span>{destination.country}</span>
                <span className="text-sm">•</span>
                <span>{destination.continent}</span>
                <span className="text-sm">•</span>
                <span className="text-altura-light">{destination.theme}</span>
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
            <h2 className="font-display text-2xl font-semibold mb-6">À propos de {destination.name}</h2>
            <p className="text-lg mb-6">{destination.description}</p>
            
            <div className="mb-8">
              <h3 className="font-display text-xl font-semibold mb-4">Pourquoi visiter {destination.name} ?</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Découvrez des paysages à couper le souffle</li>
                <li>Immergez-vous dans une culture fascinante</li>
                <li>Savourez une gastronomie locale exceptionnelle</li>
                <li>Profitez d'activités adaptées à tous les âges et tous les goûts</li>
                <li>Créez des souvenirs inoubliables avec vos proches</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Activités populaires</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-semibold mb-1">Explorer</h4>
                  <p className="text-gray-600">Découvrez des sites historiques et naturels uniques.</p>
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-semibold mb-1">Se détendre</h4>
                  <p className="text-gray-600">Profitez de moments de relaxation parfaits.</p>
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-semibold mb-1">Déguster</h4>
                  <p className="text-gray-600">Savourez la cuisine locale et ses saveurs.</p>
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-semibold mb-1">S'amuser</h4>
                  <p className="text-gray-600">Participez à des activités divertissantes pour tous.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="bg-gray-50 rounded-lg p-6 h-fit">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-semibold">Prix à partir de</p>
                <p className="text-2xl font-bold text-altura">{destination.price} €</p>
              </div>
              <p className="text-sm text-gray-500">Par personne, vols inclus</p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Inclus dans le prix :</h3>
              <ul className="space-y-1">
                <li className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vols aller-retour
                </li>
                <li className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hébergement
                </li>
                <li className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transferts
                </li>
                <li className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Petit-déjeuner
                </li>
              </ul>
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

export default DestinationDetail;
