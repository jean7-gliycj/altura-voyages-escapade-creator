export interface Offer {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  duration: string;
  description: string;
  details: string;
  inclusions: string[];
  exclusions: string[];
}

export const offers: Offer[] = [
  {
    id: "summer-bali",
    title: "Évasion à Bali - Offre Spéciale Été",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800",
    originalPrice: 1890,
    discountedPrice: 1490,
    duration: "8 jours / 7 nuits",
    description: "Découvrez la magie de Bali avec notre offre spéciale incluant vols, hôtel 4 étoiles et excursions.",
    details: "Profitez d'un séjour de rêve à Bali avec notre offre exceptionnelle comprenant les vols aller-retour, l'hébergement dans un hôtel 4 étoiles en bord de mer, les petits-déjeuners, et deux excursions au choix parmi notre sélection. Vous pourrez explorer les rizières en terrasse d'Ubud, les temples ancestraux ou vous détendre sur les magnifiques plages de sable fin.",
    inclusions: [
      "Vols aller-retour",
      "Transferts aéroport-hôtel",
      "Hébergement 7 nuits en hôtel 4 étoiles",
      "Petits-déjeuners inclus",
      "2 excursions au choix"
    ],
    exclusions: [
      "Déjeuners et dîners",
      "Dépenses personnelles",
      "Assurance voyage"
    ]
  },
  {
    id: "circuit-maroc",
    title: "Circuit Découverte du Maroc",
    image: "https://images.unsplash.com/photo-1548784583-c71f7737383e?auto=format&fit=crop&w=800",
    originalPrice: 1290,
    discountedPrice: 990,
    duration: "10 jours / 9 nuits",
    description: "Un voyage culturel à travers les villes impériales et le désert marocain avec guide francophone.",
    details: "Ce circuit complet vous emmène à la découverte des trésors du Maroc : Marrakech et sa médina animée, Fès et son patrimoine culturel inestimable, Rabat et ses jardins, Casablanca et sa modernité. Vous vivrez également une expérience inoubliable dans le désert avec une nuit sous les étoiles en campement de luxe et une balade à dos de dromadaire.",
    inclusions: [
      "Vols aller-retour",
      "Transport en minibus climatisé",
      "Guide francophone",
      "Hébergement en riads et hôtels 4 étoiles",
      "Petits-déjeuners et dîners",
      "Excursions et visites mentionnées"
    ],
    exclusions: [
      "Déjeuners",
      "Boissons",
      "Pourboires",
      "Dépenses personnelles"
    ]
  },
  {
    id: "croisiere-mediterranee",
    title: "Croisière en Méditerranée",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800",
    originalPrice: 1790,
    discountedPrice: 1290,
    duration: "7 jours / 6 nuits",
    description: "Une croisière de luxe pour découvrir les plus belles îles de la Méditerranée en tout confort.",
    details: "Embarquez pour une croisière de rêve en Méditerranée à bord d'un navire moderne et confortable. Votre itinéraire vous fera découvrir Barcelone, Marseille, Naples, Rome, Florence et Monaco. Profitez des escales pour explorer ces villes fascinantes et de tous les services à bord pendant votre navigation.",
    inclusions: [
      "Hébergement en cabine avec balcon",
      "Pension complète à bord",
      "Animations et spectacles",
      "Accès aux installations du navire (piscines, salle de sport)",
      "Taxes portuaires"
    ],
    exclusions: [
      "Vols aller-retour",
      "Excursions lors des escales",
      "Boissons hors forfait",
      "Pourboires"
    ]
  },
  {
    id: "luxury-dubai",
    title: "Séjour de luxe à Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800",
    originalPrice: 2490,
    discountedPrice: 1990,
    duration: "5 jours / 4 nuits",
    description: "Découvrez le luxe et l'extravagance de Dubai avec ce séjour dans un hôtel 5 étoiles sur la célèbre Palm Jumeirah.",
    details: "Vivez l'expérience ultime du luxe à Dubai avec ce séjour exceptionnel dans un hôtel 5 étoiles sur la prestigieuse Palm Jumeirah. Contemplez la ville depuis le plus haut building du monde, le Burj Khalifa, et découvrez l'incroyable centre commercial Dubai Mall. Profitez d'une journée complète au parc aquatique Atlantis Aquaventure et d'un safari en 4x4 dans le désert incluant un dîner bédouin sous les étoiles.",
    inclusions: [
      "Vols aller-retour",
      "Transferts aéroport-hôtel en véhicule de luxe",
      "Hébergement 4 nuits en chambre de luxe",
      "Petit-déjeuner buffet quotidien",
      "Billet coupe-file pour le Burj Khalifa",
      "Journée au parc aquatique Atlantis",
      "Safari dans le désert avec dîner"
    ],
    exclusions: [
      "Déjeuners et dîners (sauf celui du safari)",
      "Dépenses personnelles et pourboires",
      "Assurance voyage"
    ]
  },
  {
    id: "dubai-shopping-tour",
    title: "Dubai - Paradis du Shopping",
    image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=800",
    originalPrice: 1890,
    discountedPrice: 1490,
    duration: "4 jours / 3 nuits",
    description: "Séjour spécial shopping à Dubai avec accès VIP aux meilleurs centres commerciaux et bazars traditionnels.",
    details: "Ce séjour est conçu spécialement pour les amateurs de shopping ! Dubai, connue comme l'une des meilleures destinations de shopping au monde, vous offre une expérience unique avec ses immenses centres commerciaux et ses souks traditionnels. Vous bénéficierez d'un accès VIP au Dubai Mall et au Mall of the Emirates, ainsi que d'un guide privé pour découvrir les meilleurs plans dans les souks d'or et d'épices. Une carte de réduction exclusive vous sera remise pour profiter de promotions dans plus de 300 boutiques de luxe.",
    inclusions: [
      "Vols aller-retour",
      "Transferts aéroport-hôtel",
      "Hébergement 3 nuits en hôtel 4 étoiles",
      "Petit-déjeuner inclus",
      "Carte de réductions shopping VIP",
      "Visite guidée des souks traditionnels",
      "Service de livraison des achats à l'hôtel"
    ],
    exclusions: [
      "Déjeuners et dîners",
      "Taxes sur les achats",
      "Frais d'expédition des achats vers votre pays"
    ]
  },
  {
    id: "monaco-grand-prix",
    title: "Monaco - Week-end Grand Prix F1",
    image: "https://images.unsplash.com/photo-1559592892-ded3e2e0ef11?auto=format&fit=crop&w=800",
    originalPrice: 3990,
    discountedPrice: 3490,
    duration: "3 jours / 2 nuits",
    description: "Vivez l'excitation du Grand Prix de Monaco avec des places en tribune et un hébergement de luxe.",
    details: "Assistez au légendaire Grand Prix de Monaco, l'un des événements les plus prestigieux du calendrier de Formule 1. Ce forfait exceptionnel comprend des places en tribune K situées au premier virage après le tunnel, offrant une vue spectaculaire sur l'action. Vous séjournerez dans un hôtel 5 étoiles à Monaco avec vue sur la mer Méditerranée. Le forfait comprend également une visite des stands le vendredi et une soirée cocktail où vous pourrez rencontrer d'anciens pilotes de F1.",
    inclusions: [
      "Vols aller-retour",
      "Transferts privés aéroport-hôtel",
      "Hébergement 2 nuits en hôtel 5 étoiles",
      "Petit-déjeuner gourmet",
      "Places en Tribune K pour les qualifications et la course",
      "Visite des stands",
      "Soirée cocktail VIP",
      "Programme officiel et souvenirs"
    ],
    exclusions: [
      "Déjeuners et dîners",
      "Boissons",
      "Assurance annulation",
      "Dépenses personnelles"
    ]
  },
  {
    id: "monaco-yacht-experience",
    title: "Monaco - Expérience Yacht de Luxe",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=800",
    originalPrice: 4500,
    discountedPrice: 3800,
    duration: "4 jours / 3 nuits",
    description: "Séjour de luxe à Monaco avec croisière privée en yacht le long de la Côte d'Azur.",
    details: "Découvrez le glamour et l'élégance de Monaco avec ce séjour luxueux comprenant une expérience unique en yacht privé. Vous séjournerez dans l'un des hôtels les plus prestigieux de Monte-Carlo et profiterez d'une journée entière de navigation sur un yacht privé de 24 mètres avec équipage. Votre croisière vous emmènera le long de la magnifique Côte d'Azur, avec des arrêts pour la baignade dans des criques isolées et un déjeuner gastronomique servi à bord. La soirée comprend également un dîner dans un restaurant étoilé au Michelin et l'accès au célèbre Casino de Monte-Carlo.",
    inclusions: [
      "Vols aller-retour en classe affaires",
      "Transferts privés en limousine",
      "Hébergement 3 nuits en suite junior",
      "Petit-déjeuner servi en chambre",
      "Croisière d'une journée en yacht privé avec équipage",
      "Déjeuner gastronomique à bord",
      "Dîner dans un restaurant étoilé",
      "Entrée au Casino de Monte-Carlo",
      "Service de conciergerie 24h/24"
    ],
    exclusions: [
      "Dépenses au casino",
      "Spa et soins personnels",
      "Achats personnels",
      "Pourboires"
    ]
  },
  {
    id: "bahamas-paradise",
    title: "Les Bahamas - Paradis Tropical",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800",
    originalPrice: 2690,
    discountedPrice: 2190,
    duration: "7 jours / 6 nuits",
    description: "Séjour de rêve aux Bahamas dans un resort tout-inclus avec des plages de sable blanc et des eaux cristallines.",
    details: "Évadez-vous dans le paradis tropical des Bahamas avec ce séjour de 7 jours dans un resort tout-inclus de luxe. Situé sur l'île de Nassau, votre resort offre un accès direct à une plage privée de sable blanc bordée par les eaux turquoise de la mer des Caraïbes. Profitez de multiples activités nautiques comme la plongée avec tuba, le kayak, la voile, ou détendez-vous simplement au bord de la piscine à débordement avec service de cocktails. Le forfait comprend également une excursion d'une journée à la célèbre Pig Beach pour nager avec les cochons sauvages.",
    inclusions: [
      "Vols aller-retour",
      "Transferts aéroport-resort",
      "Hébergement 6 nuits en chambre vue mer",
      "Formule tout-inclus (repas et boissons)",
      "Activités nautiques non motorisées",
      "Excursion à Pig Beach",
      "Soirée barbecue sur la plage",
      "Accès illimité aux installations du resort"
    ],
    exclusions: [
      "Sports nautiques motorisés",
      "Soins spa",
      "Excursions supplémentaires",
      "Pourboires"
    ]
  },
  {
    id: "bahamas-diving",
    title: "Les Bahamas - Aventure Plongée",
    image: "https://images.unsplash.com/photo-1544551763-4ab6ce6db874?auto=format&fit=crop&w=800",
    originalPrice: 2490,
    discountedPrice: 1990,
    duration: "6 jours / 5 nuits",
    description: "Séjour spécial plongée aux Bahamas pour explorer les récifs coralliens et les célèbres Blue Holes.",
    details: "Ce séjour est un véritable paradis pour les amateurs de plongée ! Les Bahamas abritent certains des sites de plongée les plus spectaculaires au monde, y compris les mystérieux Blue Holes et la troisième plus grande barrière de corail au monde. Ce forfait comprend 10 plongées guidées sur différents sites, dont une plongée de nuit et une exploration du célèbre Blue Hole de Dean. Vous aurez également la chance de vivre l'expérience unique de plonger avec des requins de récif dans les eaux protégées du parc marin des Bahamas. L'hébergement est prévu dans un resort spécialement conçu pour les plongeurs, avec un centre de plongée PADI 5 étoiles sur place.",
    inclusions: [
      "Vols aller-retour",
      "Transferts aéroport-hotel-sites de plongée",
      "Hébergement 5 nuits",
      "Pension complète",
      "10 plongées guidées (équipement inclus)",
      "Plongée avec les requins de récif",
      "Certification temporaire de plongée (si nécessaire)",
      "Photos et vidéos sous-marines"
    ],
    exclusions: [
      "Boissons alcoolisées",
      "Certification PADI supplémentaire",
      "Pourboires pour les guides",
      "Assurance plongée"
    ]
  },
  {
    id: "monaco-spa-retreat",
    title: "Monaco - Retraite Spa & Bien-être",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800",
    originalPrice: 3290,
    discountedPrice: 2790,
    duration: "5 jours / 4 nuits",
    description: "Échappée bien-être de luxe à Monaco avec soins spa quotidiens et ateliers de nutrition.",
    details: "Offrez-vous une pause détente ultime dans l'une des destinations les plus luxueuses d'Europe. Ce séjour bien-être à Monaco comprend un hébergement dans un spa-hôtel 5 étoiles et un programme complet de soins et d'activités pour revitaliser votre corps et votre esprit. Chaque jour, profitez de deux soins spa personnalisés, de cours de yoga et de méditation avec vue sur la Méditerranée, et d'ateliers sur la nutrition et le bien-être animés par des experts reconnus. Les repas sont préparés par un chef spécialisé en cuisine saine et équilibrée, avec des ingrédients frais et locaux.",
    inclusions: [
      "Vols aller-retour",
      "Transferts privés",
      "Hébergement 4 nuits en chambre spa",
      "Pension complète diététique",
      "8 soins spa personnalisés",
      "Cours quotidiens de yoga et méditation",
      "3 ateliers bien-être",
      "Accès illimité aux installations spa et fitness",
      "Consultation personnelle avec un nutritionniste"
    ],
    exclusions: [
      "Soins spa supplémentaires",
      "Sessions privées avec les experts",
      "Achats à la boutique du spa",
      "Pourboires"
    ]
  },
];
