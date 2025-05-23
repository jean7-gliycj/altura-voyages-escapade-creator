
import React from 'react';

const Partenaires = () => {
  // Liste des partenaires avec leurs informations
  const partners = [
    {
      id: 1,
      name: "Air France",
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&q=80",
      description: "Compagnie aérienne de premier plan offrant des vols vers plus de 200 destinations dans le monde entier. Notre partenariat nous permet de vous proposer des tarifs préférentiels et des services exclusifs.",
      type: "Transport aérien"
    },
    {
      id: 2,
      name: "Accor Hotels",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&q=80",
      description: "Groupe hôtelier mondial présent dans 110 pays. Nous collaborons étroitement avec Accor pour vous garantir des séjours de qualité dans les meilleurs établissements.",
      type: "Hébergement"
    },
    {
      id: 3,
      name: "Avis Car Rental",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
      description: "Leader mondial de la location de voitures. Notre partenariat vous assure des véhicules fiables à des prix compétitifs dans toutes vos destinations.",
      type: "Location de véhicules"
    },
    {
      id: 4,
      name: "Expedia Group",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&q=80",
      description: "Plateforme mondiale de réservation en ligne. Grâce à notre collaboration, nous pouvons vous offrir une large gamme d'options de voyage personnalisées.",
      type: "Agence en ligne"
    },
    {
      id: 5,
      name: "Visa Travel",
      logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=300&q=80",
      description: "Services de visa et d'assistance administrative pour les voyageurs. Notre partenariat facilite l'obtention de vos documents de voyage pour toutes les destinations.",
      type: "Services administratifs"
    }
  ];

  // Grouper les partenaires par type
  const partnersByType = partners.reduce((acc, partner) => {
    const { type } = partner;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(partner);
    return acc;
  }, {} as Record<string, typeof partners>);

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-altura mb-6">Nos Partenaires</h1>
      
      <div className="mb-10">
        <p className="text-lg mb-6">
          ALTURA VOYAGES collabore avec des leaders mondiaux du voyage pour vous offrir 
          des expériences exceptionnelles et des services de qualité supérieure. Nos partenariats 
          stratégiques nous permettent de vous proposer des offres exclusives et des avantages uniques.
        </p>
      </div>

      {/* Certification et affiliations */}
      <div className="mb-14">
        <h2 className="text-2xl font-display font-semibold mb-6 text-altura">Nos certifications et affiliations</h2>
        <div className="flex flex-wrap gap-6 items-center justify-center bg-gray-50 p-6 rounded-lg">
          <div className="text-center p-4">
            <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-altura">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <h3 className="font-medium">IATA</h3>
          </div>
          <div className="text-center p-4">
            <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-altura">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
              </svg>
            </div>
            <h3 className="font-medium">ATOUT France</h3>
          </div>
          <div className="text-center p-4">
            <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-altura">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h3 className="font-medium">ASTA</h3>
          </div>
          <div className="text-center p-4">
            <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-altura">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 className="font-medium">Garantie APST</h3>
          </div>
        </div>
      </div>

      {/* Liste des partenaires par catégorie */}
      {Object.entries(partnersByType).map(([type, typePartners]) => (
        <div key={type} className="mb-16">
          <h2 className="text-2xl font-display font-semibold mb-6 text-altura">Partenaires {type}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {typePartners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 p-4 flex items-center justify-center bg-gray-50">
                  <img 
                    src={partner.logo} 
                    alt={`Logo ${partner.name}`} 
                    className="w-full h-32 object-contain"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Section avantages */}
      <div className="bg-gray-50 rounded-lg p-8 mt-10">
        <h2 className="text-2xl font-display font-semibold mb-6 text-altura">Les avantages de nos partenariats</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-altura mr-2 mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>Tarifs préférentiels négociés pour nos clients</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-altura mr-2 mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>Assistance prioritaire et services VIP</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-altura mr-2 mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>Réservations flexibles et plans sur mesure</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-altura mr-2 mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>Garantie du meilleur rapport qualité-prix</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-altura mr-2 mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>Solutions de voyage intégrées et simplifiées</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Partenaires;
