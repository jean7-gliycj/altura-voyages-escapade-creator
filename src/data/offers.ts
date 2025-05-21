export interface Offer {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  duration: string;
  description: string;
}

export const offers = [
  {
    id: "dubai-5-jours",
    title: "5 jours inoubliables à Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 1200,
    discountedPrice: 780,
    duration: "5 jours / 4 nuits",
    description: "Profitez d'un séjour exceptionnel à Dubai avec hôtel 5 étoiles, activités et transferts inclus. Une occasion unique de découvrir cette métropole futuriste à prix réduit."
  },
  {
    id: "monaco-luxe",
    title: "Week-end de luxe à Monaco",
    image: "https://images.unsplash.com/photo-1528219089976-7019753c7b17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 1500,
    discountedPrice: 990,
    duration: "3 jours / 2 nuits",
    description: "Séjournez dans un hôtel 5 étoiles au cœur de Monaco, profitez d'une visite guidée privée et d'un dîner gastronomique avec vue sur la Méditerranée."
  },
  {
    id: "bahamas-paradis",
    title: "Escapade paradisiaque aux Bahamas",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 2200,
    discountedPrice: 1650,
    duration: "7 jours / 6 nuits",
    description: "Séjournez dans un resort tout inclus aux Bahamas et profitez des plages de sable blanc et des eaux turquoise. Excursions et activités nautiques incluses."
  },
  {
    id: "maroc-decouverte",
    title: "Circuit découverte au Maroc",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 950,
    discountedPrice: 750,
    duration: "8 jours / 7 nuits",
    description: "Partez à la découverte des villes impériales du Maroc : Marrakech, Fès, Meknès et Rabat. Hébergement en riads traditionnels et guide francophone inclus."
  },
  {
    id: "mediterranee-croisiere",
    title: "Croisière en Méditerranée",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 1800,
    discountedPrice: 1290,
    duration: "10 jours / 9 nuits",
    description: "Embarquez pour une croisière inoubliable en Méditerranée avec escales en Italie, Grèce et Croatie. Pension complète et activités à bord incluses."
  },
  {
    id: "bali-detente",
    title: "Séjour bien-être à Bali",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 1600,
    discountedPrice: 1190,
    duration: "12 jours / 11 nuits",
    description: "Offrez-vous une parenthèse de détente à Bali avec hébergement en villa privée, séances de spa quotidiennes et cours de yoga. Excursion aux temples et rizières incluse."
  },
  {
    id: "zanzibar-plage",
    title: "Évasion plage à Zanzibar",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 1900,
    discountedPrice: 1450,
    duration: "9 jours / 8 nuits",
    description: "Profitez des plages paradisiaques de Zanzibar dans un resort 5 étoiles tout inclus. Excursion dans la forêt de Jozani et visite de Stone Town incluses."
  },
  {
    id: "maldives-overwater",
    title: "Séjour Overwater aux Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    originalPrice: 3200,
    discountedPrice: 2490,
    duration: "7 jours / 6 nuits",
    description: "Séjournez dans une villa sur pilotis aux Maldives avec accès direct au lagon. Petits déjeuners, transferts et une excursion snorkeling inclus."
  }
];
