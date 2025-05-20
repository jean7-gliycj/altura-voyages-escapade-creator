
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire de contact soumis:", formData);
    
    // Simulation d'envoi réussi
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="bg-altura-dark text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="max-w-2xl text-lg">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous aider à planifier votre prochain voyage.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl font-bold mb-6 text-gray-800">Nos coordonnées</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-altura mr-3 shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Adresse</h3>
                  <p className="text-gray-600">123 Rue du Voyage<br />75001 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-altura mr-3 shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/33745913946" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-altura transition-colors"
                  >
                    +33 7 45 91 39 46
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Disponible 7j/7 de 9h à 19h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-altura mr-3 shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:contact@alturavoyages.fr" className="text-gray-600 hover:text-altura">
                    contact@alturavoyages.fr
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-3">Horaires d'ouverture</h3>
              <p className="text-gray-600 mb-2">Lundi - Vendredi: 9h - 19h</p>
              <p className="text-gray-600 mb-2">Samedi: 10h - 17h</p>
              <p className="text-gray-600">Dimanche: Fermé</p>
            </div>
          </div>
          
          {/* Formulaire de contact */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet *</label>
                <input
                  required
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                />
              </div>
              
              <div>
                <Button type="submit" className="bg-altura hover:bg-altura-light text-white px-6 py-2">
                  Envoyer le message
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Carte Google Maps */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold mb-6 text-gray-800">Nous localiser</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-80">
            {/* Simuler une carte Google Maps avec une image */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-gray-600">Carte Google Maps</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
