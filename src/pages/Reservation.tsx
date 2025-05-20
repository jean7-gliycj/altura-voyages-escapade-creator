
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { destinations } from "@/data/destinations";
import { useToast } from "@/hooks/use-toast";

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    adults: 1,
    children: 0,
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    
    // Simulation d'envoi réussi
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons rapidement pour planifier votre voyage.",
    });
    
    // Réinitialiser le formulaire
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      destination: "",
      departureDate: "",
      returnDate: "",
      adults: 1,
      children: 0,
      message: ""
    });
  };
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="bg-altura-dark text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold mb-4">Réserver votre voyage</h1>
          <p className="max-w-2xl text-lg">
            Complétez le formulaire ci-dessous pour démarrer la planification de votre prochain voyage. Notre équipe vous contactera sous 24h.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                  <input
                    required
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                  <input
                    required
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
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
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                  />
                </div>
              </div>
              
              <hr className="my-8" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination *</label>
                  <select
                    required
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                  >
                    <option value="">Sélectionnez une destination</option>
                    {destinations.map((destination) => (
                      <option key={destination.id} value={destination.id}>
                        {destination.name}, {destination.country}
                      </option>
                    ))}
                    <option value="autre">Autre destination</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-1">Date de départ *</label>
                  <input
                    required
                    type="date"
                    id="departureDate"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1">Date de retour *</label>
                  <input
                    required
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                    min={formData.departureDate || new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">Adultes *</label>
                    <input
                      required
                      type="number"
                      id="adults"
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">Enfants</label>
                    <input
                      type="number"
                      id="children"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      min="0"
                      max="10"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Demandes spéciales</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura"
                  placeholder="Précisez vos attentes, vos envies ou toute information complémentaire..."
                />
              </div>
              
              <div className="text-center">
                <Button type="submit" className="bg-altura hover:bg-altura-light text-white text-lg px-8 py-2">
                  Envoyer ma demande
                </Button>
                
                <p className="mt-4 text-sm text-gray-500">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour finaliser votre réservation.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
