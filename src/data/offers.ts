
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
  }
];
