
export interface Offer {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  duration: string;
  description: string;
  details?: string;
  inclusions: string[];
  exclusions: string[];
}

export const offers = [
  {
    id: "dubai-5-jours",
    title: "5 jours inoubliables à Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 1200,
    discountedPrice: 780,
    duration: "5 jours / 4 nuits",
    description: "Profitez d'un séjour exceptionnel à Dubai avec hôtel 5 étoiles, activités et transferts inclus. Une occasion unique de découvrir cette métropole futuriste à prix réduit.",
    details: "Découvrez Dubai, une ville où tradition et modernité se mêlent harmonieusement. Ce séjour comprend l'hébergement dans un hôtel 5 étoiles au cœur de la ville, idéalement situé pour explorer tous les sites emblématiques.",
    inclusions: [
      "Vols aller-retour",
      "Transferts aéroport-hôtel",
      "Hébergement en hôtel 5 étoiles",
      "Petit-déjeuner buffet quotidien",
      "Visite guidée de la ville (demi-journée)",
      "Entrée au Burj Khalifa"
    ],
    exclusions: [
      "Repas non mentionnés",
      "Dépenses personnelles",
      "Assurance voyage",
      "Frais de visa si applicable"
    ]
  },
  {
    id: "monaco-luxe",
    title: "Week-end de luxe à Monaco",
    image: "https://images.unsplash.com/photo-1528219089976-7019753c7b17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 1500,
    discountedPrice: 990,
    duration: "3 jours / 2 nuits",
    description: "Séjournez dans un hôtel 5 étoiles au cœur de Monaco, profitez d'une visite guidée privée et d'un dîner gastronomique avec vue sur la Méditerranée.",
    details: "Vivez l'expérience d'un week-end prestigieux dans la Principauté de Monaco. Ce séjour exclusif vous offre un hébergement luxueux et des expériences uniques dans ce joyau de la Côte d'Azur.",
    inclusions: [
      "Hébergement en hôtel 5 étoiles",
      "Petit-déjeuner gourmet",
      "Transferts privés",
      "Visite guidée de Monaco",
      "Dîner gastronomique étoilé",
      "Accès au Casino de Monte-Carlo"
    ],
    exclusions: [
      "Transport vers Monaco",
      "Déjeuners",
      "Pourboires",
      "Dépenses personnelles"
    ]
  },
  {
    id: "bahamas-paradis",
    title: "Escapade paradisiaque aux Bahamas",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 2200,
    discountedPrice: 1650,
    duration: "7 jours / 6 nuits",
    description: "Séjournez dans un resort tout inclus aux Bahamas et profitez des plages de sable blanc et des eaux turquoise. Excursions et activités nautiques incluses.",
    details: "Les Bahamas vous offrent un cadre idyllique pour des vacances de rêve. Cet archipel aux eaux cristallines et aux plages immaculées vous accueille pour un séjour tout inclus dans un resort de luxe.",
    inclusions: [
      "Vols internationaux",
      "Transferts aéroport-hôtel",
      "Hébergement tout inclus",
      "Tous les repas et boissons",
      "Activités nautiques non motorisées",
      "Une excursion en bateau aux îles voisines"
    ],
    exclusions: [
      "Activités nautiques motorisées",
      "Spa et soins",
      "Excursions supplémentaires",
      "Pourboires et dépenses personnelles"
    ]
  },
  {
    id: "maroc-decouverte",
    title: "Circuit découverte au Maroc",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 950,
    discountedPrice: 750,
    duration: "8 jours / 7 nuits",
    description: "Partez à la découverte des villes impériales du Maroc : Marrakech, Fès, Meknès et Rabat. Hébergement en riads traditionnels et guide francophone inclus.",
    details: "Ce circuit vous emmène à travers les plus belles villes impériales du Maroc. De Marrakech la rouge à Fès la mystique, en passant par Meknès et Rabat, découvrez l'histoire riche et la culture fascinante du royaume chérifien.",
    inclusions: [
      "Vols aller-retour",
      "Transport en minibus climatisé",
      "Guide francophone pendant tout le circuit",
      "Hébergement en riads traditionnels",
      "Petits déjeuners et dîners",
      "Visites guidées des sites historiques"
    ],
    exclusions: [
      "Déjeuners",
      "Boissons",
      "Pourboires",
      "Frais d'entrée aux monuments non mentionnés"
    ]
  },
  {
    id: "mediterranee-croisiere",
    title: "Croisière en Méditerranée",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 1800,
    discountedPrice: 1290,
    duration: "10 jours / 9 nuits",
    description: "Embarquez pour une croisière inoubliable en Méditerranée avec escales en Italie, Grèce et Croatie. Pension complète et activités à bord incluses.",
    details: "Cette croisière de luxe en Méditerranée vous fait découvrir les plus beaux joyaux de la mer Adriatique et de la mer Égée. À bord d'un navire moderne et confortable, naviguez de port en port et explorez des villes chargées d'histoire.",
    inclusions: [
      "Hébergement en cabine sélectionnée",
      "Pension complète à bord",
      "Animation et spectacles",
      "Accès aux installations du navire",
      "Taxes portuaires",
      "Un forfait boisson"
    ],
    exclusions: [
      "Vols vers le port de départ",
      "Excursions à terre",
      "Boissons premium",
      "Pourboires",
      "Dépenses personnelles"
    ]
  },
  {
    id: "bali-detente",
    title: "Séjour bien-être à Bali",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 1600,
    discountedPrice: 1190,
    duration: "12 jours / 11 nuits",
    description: "Offrez-vous une parenthèse de détente à Bali avec hébergement en villa privée, séances de spa quotidiennes et cours de yoga. Excursion aux temples et rizières incluse.",
    details: "Évadez-vous sur l'île des dieux pour un séjour dédié au bien-être et à la détente. Bali, avec ses paysages époustouflants et sa spiritualité omniprésente, est l'endroit idéal pour se ressourcer et se reconnecter à soi.",
    inclusions: [
      "Vols internationaux",
      "Transferts privés",
      "Hébergement en villa avec piscine privée",
      "Petit-déjeuner quotidien",
      "5 séances de spa",
      "3 cours de yoga",
      "Excursion aux rizières de Tegallalang et au temple de Tirta Empul"
    ],
    exclusions: [
      "Repas non mentionnés",
      "Activités supplémentaires",
      "Pourboires",
      "Assurance voyage"
    ]
  },
  {
    id: "zanzibar-plage",
    title: "Évasion plage à Zanzibar",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 1900,
    discountedPrice: 1450,
    duration: "9 jours / 8 nuits",
    description: "Profitez des plages paradisiaques de Zanzibar dans un resort 5 étoiles tout inclus. Excursion dans la forêt de Jozani et visite de Stone Town incluses.",
    details: "Zanzibar, l'île aux épices, vous accueille pour un séjour balnéaire d'exception. Entre farniente sur des plages de sable blanc et découverte culturelle, ce séjour vous offre le parfait équilibre entre détente et exploration.",
    inclusions: [
      "Vols aller-retour",
      "Transferts aéroport-hôtel",
      "Hébergement en formule tout inclus",
      "Excursion à la forêt de Jozani",
      "Visite guidée de Stone Town",
      "Une session de snorkeling"
    ],
    exclusions: [
      "Excursions non mentionnées",
      "Soins spa",
      "Pourboires",
      "Dépenses personnelles"
    ]
  },
  {
    id: "maldives-overwater",
    title: "Séjour Overwater aux Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 3200,
    discountedPrice: 2490,
    duration: "7 jours / 6 nuits",
    description: "Séjournez dans une villa sur pilotis aux Maldives avec accès direct au lagon. Petits déjeuners, transferts et une excursion snorkeling inclus.",
    details: "Vivez l'expérience ultime du luxe tropical en séjournant dans une villa sur pilotis aux Maldives. Ce séjour d'exception vous offre intimité, confort absolu et vues imprenables sur le lagon turquoise.",
    inclusions: [
      "Vols internationaux",
      "Transferts en hydravion",
      "Hébergement en villa sur pilotis",
      "Petits déjeuners quotidiens",
      "Un dîner romantique sur la plage",
      "Une excursion snorkeling guidée",
      "Accès illimité aux activités non motorisées"
    ],
    exclusions: [
      "Repas non mentionnés",
      "Boissons alcoolisées",
      "Sports nautiques motorisés",
      "Soins spa",
      "Pourboires"
    ]
  }
];
