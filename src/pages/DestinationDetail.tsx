
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { destinations } from "@/data/destinations";
import { DestinationHero } from "@/components/destination/DestinationHero";
import { DestinationContent } from "@/components/destination/DestinationContent";
import { DestinationSidebar } from "@/components/destination/DestinationSidebar";
import { NotFoundMessage } from "@/components/destination/NotFoundMessage";

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<typeof destinations[0] | null>(null);
  const [selectedClass, setSelectedClass] = useState<"economy" | "business">("economy");
  
  useEffect(() => {
    const foundDestination = destinations.find(d => d.id === id);
    if (foundDestination) {
      setDestination(foundDestination);
      // Scroll to top when destination changes
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  if (!destination) {
    return <NotFoundMessage />;
  }
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero image */}
      <DestinationHero 
        name={destination.name}
        image={destination.image}
        country={destination.country}
        continent={destination.continent}
        theme={destination.theme}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <DestinationContent 
            name={destination.name}
            description={destination.description}
          />
          
          {/* Sidebar */}
          <DestinationSidebar 
            name={destination.name}
            price={destination.price}
            selectedClass={selectedClass}
            onClassChange={setSelectedClass}
            country={destination.country}
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
