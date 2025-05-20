
export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  price: number;
  theme: string;
  image: string;
  description: string;
}

export const destinations: Destination[] = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonésie",
    continent: "Asie",
    price: 1290,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800",
    description: "Détendez-vous sur les plages paradisiaques de Bali, visitez des temples millénaires et imprégnez-vous de la culture balinaise unique."
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Maroc",
    continent: "Afrique",
    price: 590,
    theme: "Culture",
    image: "https://images.unsplash.com/photo-1548784583-c71f7737383e?auto=format&fit=crop&w=800",
    description: "Découvrez les souks animés, les palais ornés et l'atmosphère envoûtante de la ville rouge, un mélange parfait de tradition et de modernité."
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japon",
    continent: "Asie",
    price: 1690,
    theme: "Ville",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800",
    description: "Explorez la métropole futuriste avec ses gratte-ciels, sa technologie de pointe, tout en découvrant la richesse de la culture japonaise traditionnelle."
  },
  {
    id: "santorini",
    name: "Santorin",
    country: "Grèce",
    continent: "Europe",
    price: 890,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800",
    description: "Admirez les maisons blanches aux toits bleus surplombant la mer Égée et profitez des couchers de soleil spectaculaires de cette île volcanique."
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    country: "Costa Rica",
    continent: "Amérique",
    price: 1490,
    theme: "Nature",
    image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&w=800",
    description: "Explorez les forêts tropicales luxuriantes, observez la faune exotique et aventurez-vous dans un paradis d'écotourisme."
  },
  {
    id: "safari-kenya",
    name: "Safari au Kenya",
    country: "Kenya",
    continent: "Afrique",
    price: 2190,
    theme: "Safari",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800",
    description: "Vivez une aventure inoubliable à travers les savanes du Kenya à la rencontre des grands mammifères africains dans leur habitat naturel."
  },
  {
    id: "new-york",
    name: "New York",
    country: "États-Unis",
    continent: "Amérique",
    price: 1190,
    theme: "Ville",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800",
    description: "Découvrez la ville qui ne dort jamais avec ses gratte-ciels emblématiques, ses quartiers dynamiques et sa scène culturelle vibrante."
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    continent: "Asie",
    price: 2490,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800",
    description: "Séjournez dans des villas sur pilotis au-dessus d'eaux cristallines turquoise et découvrez les récifs coralliens colorés de ce paradis tropical."
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italie",
    continent: "Europe",
    price: 690,
    theme: "Culture",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800",
    description: "Plongez dans l'histoire de la Ville Éternelle, avec ses monuments antiques, ses places animées et sa délicieuse cuisine italienne."
  }
];
