
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface DestinationSidebarProps {
  name: string;
  price: number;
  selectedClass: "economy" | "business";
  onClassChange: (className: "economy" | "business") => void;
  country: string;
}

export const DestinationSidebar: FC<DestinationSidebarProps> = ({ 
  name, 
  price, 
  selectedClass, 
  onClassChange,
  country
}) => {
  const { toast } = useToast();
  const whatsappNumber = "+33745913946";
  // Business class costs 60% more than economy
  const businessClassPrice = Math.round(price * 1.6);
  
  const handleWhatsAppClick = () => {
    const travelClass = selectedClass === "business" ? "en classe affaire" : "en classe économique";
    const currentPrice = selectedClass === "business" ? businessClassPrice : price;
    
    const message = encodeURIComponent(`Bonjour, je suis intéressé(e) par votre destination "${name}" à ${country} ${travelClass} à ${currentPrice}€. Pouvez-vous me donner plus d'informations ?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    toast({
      title: "Redirection vers WhatsApp",
      description: "Vous allez être redirigé vers WhatsApp pour discuter avec notre équipe.",
    });
  };
  
  return (
    <div className="bg-gray-50 rounded-lg p-6 h-fit shadow-md">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3 text-black">Choisissez votre classe de voyage</h3>
        
        {/* Class selection */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div 
            className={`border rounded-lg p-3 cursor-pointer ${selectedClass === "economy" 
              ? "border-altura bg-altura/10" 
              : "border-gray-300 hover:border-altura/50"}`}
            onClick={() => onClassChange("economy")}
          >
            <div className="font-bold text-black text-base">Classe Économique</div>
            <div className="text-2xl font-bold text-black mt-1">{price} €</div>
          </div>
          
          <div 
            className={`border rounded-lg p-3 cursor-pointer ${selectedClass === "business" 
              ? "border-altura bg-altura/10" 
              : "border-gray-300 hover:border-altura/50"}`}
            onClick={() => onClassChange("business")}
          >
            <div className="font-bold text-black text-base">Classe Affaire</div>
            <div className="text-2xl font-bold text-black mt-1">{businessClassPrice} €</div>
          </div>
        </div>
        
        <p className="text-sm font-bold text-black">Par personne, vols inclus</p>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-black">Inclus dans le prix :</h3>
        <ul className="space-y-1">
          <li className="flex items-center text-sm text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Vols aller-retour
          </li>
          <li className="flex items-center text-sm text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Hébergement
          </li>
          <li className="flex items-center text-sm text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Transferts
          </li>
          <li className="flex items-center text-sm text-black">
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
        <Button className="w-full bg-altura hover:bg-altura-light text-black font-bold">
          Réserver maintenant
        </Button>
      </Link>
    </div>
  );
};

