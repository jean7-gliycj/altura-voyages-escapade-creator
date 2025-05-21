
import { useState, useEffect } from "react";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Destinations = () => {
  const continents = ["Tous", "Europe", "Asie", "Afrique", "Amérique", "Océanie"];
  const themes = [
    "Tous", 
    "Plage", 
    "Ville", 
    "Culture", 
    "Nature", 
    "Safari", 
    "Hôtel", 
    "Spa", 
    "Sport Nautique", 
    "Jet Ski", 
    "Plongée",
    "Montagne"
  ];
  
  const [selectedContinent, setSelectedContinent] = useState("Tous");
  const [selectedTheme, setSelectedTheme] = useState("Tous");
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 12;
  
  useEffect(() => {
    let filtered = [...destinations];
    
    if (selectedContinent !== "Tous") {
      filtered = filtered.filter(dest => dest.continent === selectedContinent);
    }
    
    if (selectedTheme !== "Tous") {
      filtered = filtered.filter(dest => dest.theme === selectedTheme);
    }
    
    setFilteredDestinations(filtered);
    setCurrentPage(1);
  }, [selectedContinent, selectedTheme]);
  
  // Calculate pagination
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = filteredDestinations.slice(indexOfFirstDestination, indexOfLastDestination);
  const totalPages = Math.ceil(filteredDestinations.length / destinationsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
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
              <Select value={selectedContinent} onValueChange={setSelectedContinent}>
                <SelectTrigger id="continent" className="w-full border-altura">
                  <SelectValue placeholder="Sélectionner un continent" />
                </SelectTrigger>
                <SelectContent>
                  {continents.map((continent) => (
                    <SelectItem key={continent} value={continent}>{continent}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <label htmlFor="theme" className="block text-sm font-medium text-altura mb-1">Thème</label>
              <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                <SelectTrigger id="theme" className="w-full border-altura">
                  <SelectValue placeholder="Sélectionner un thème" />
                </SelectTrigger>
                <SelectContent>
                  {themes.map((theme) => (
                    <SelectItem key={theme} value={theme}>{theme}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Theme quicklinks */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-altura mb-2">Thèmes populaires</h3>
            <div className="overflow-x-auto pb-2">
              <Tabs defaultValue="Tous" className="w-full" onValueChange={setSelectedTheme}>
                <TabsList className="h-9 bg-muted/40 p-1">
                  {themes.map((theme) => (
                    <TabsTrigger 
                      key={theme} 
                      value={theme}
                      className="text-xs px-3 py-1 data-[state=active]:bg-altura data-[state=active]:text-white"
                    >
                      {theme}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
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
          {currentDestinations.map((destination) => (
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
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <nav className="inline-flex rounded-md shadow">
              <button
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Précédent
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === i + 1 
                      ? "text-altura bg-altura-light/20 font-semibold" 
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
