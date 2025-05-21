
import { useState, useEffect } from "react";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";

const Destinations = () => {
  const continents = ["Tous", "Europe", "Asie", "Afrique", "Amérique"];
  const themes = ["Tous", "Plage", "Ville", "Culture", "Nature", "Safari"];
  
  const [selectedContinent, setSelectedContinent] = useState("Tous");
  const [selectedTheme, setSelectedTheme] = useState("Tous");
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  
  useEffect(() => {
    let filtered = [...destinations];
    
    if (selectedContinent !== "Tous") {
      filtered = filtered.filter(dest => dest.continent === selectedContinent);
    }
    
    if (selectedTheme !== "Tous") {
      filtered = filtered.filter(dest => dest.theme === selectedTheme);
    }
    
    setFilteredDestinations(filtered);
  }, [selectedContinent, selectedTheme]);
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="bg-altura-dark text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold mb-4">Nos destinations</h1>
          <p className="max-w-2xl text-lg">
            Découvrez notre sélection de destinations à travers le monde et trouvez votre prochain voyage de rêve.
          </p>
        </div>
      </div>
      
      {/* Filtres */}
      <div className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex-1">
              <label htmlFor="continent" className="block text-sm font-medium text-altura mb-1">Continent</label>
              <select
                id="continent"
                value={selectedContinent}
                onChange={(e) => setSelectedContinent(e.target.value)}
                className="w-full p-2 border border-altura rounded-md text-altura"
              >
                {continents.map((continent) => (
                  <option key={continent} value={continent}>{continent}</option>
                ))}
              </select>
            </div>
            
            <div className="flex-1">
              <label htmlFor="theme" className="block text-sm font-medium text-altura mb-1">Thème</label>
              <select
                id="theme"
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                className="w-full p-2 border border-altura rounded-md text-altura"
              >
                {themes.map((theme) => (
                  <option key={theme} value={theme}>{theme}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Liste des destinations */}
      <div className="container mx-auto px-4 py-8">
        <p className="mb-6 text-gray-600">
          {filteredDestinations.length} destination{filteredDestinations.length > 1 ? 's' : ''} trouvée{filteredDestinations.length > 1 ? 's' : ''}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((destination) => (
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
        
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Aucune destination trouvée</h3>
            <p className="text-gray-600">Veuillez modifier vos critères de recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
