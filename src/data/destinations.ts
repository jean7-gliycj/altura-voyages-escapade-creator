
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
    id: "zanzibar",
    name: "Zanzibar",
    country: "Tanzanie",
    continent: "Afrique",
    price: 1590,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800",
    description: "Découvrez les plages paradisiaques de sable blanc, les eaux cristallines turquoise et la riche culture swahilie de cette île tropicale de l'océan Indien."
  },
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
    image: "https://images.unsplash.com/photo-1553869468-3d9949cc9363?auto=format&fit=crop&w=800",
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
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    continent: "Europe",
    price: 590,
    theme: "Ville",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800",
    description: "Explorez la ville de l'amour avec ses monuments iconiques, sa gastronomie raffinée et son atmosphère romantique."
  },
  {
    id: "dubai",
    name: "Dubaï",
    country: "Émirats Arabes Unis",
    continent: "Asie",
    price: 1890,
    theme: "Ville",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800",
    description: "Découvrez une ville futuriste aux gratte-ciels vertigineux, aux centres commerciaux luxueux et aux plages de sable fin."
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thaïlande",
    continent: "Asie",
    price: 1190,
    theme: "Culture",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800",
    description: "Immergez-vous dans la culture thaïlandaise avec ses temples dorés, sa cuisine épicée et ses marchés animés."
  },
  {
    id: "barcelone",
    name: "Barcelone",
    country: "Espagne",
    continent: "Europe",
    price: 490,
    theme: "Ville",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800",
    description: "Admirez l'architecture unique de Gaudí, profitez des plages urbaines et dégustez des tapas authentiques dans cette ville méditerranéenne."
  },
  {
    id: "cancun",
    name: "Cancún",
    country: "Mexique",
    continent: "Amérique",
    price: 1590,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1501917125304-96be07a951ce?auto=format&fit=crop&w=800",
    description: "Détendez-vous sur les plages de sable blanc, explorez les sites mayas voisins et profitez de la vie nocturne animée."
  },
  {
    id: "grand-canyon",
    name: "Grand Canyon",
    country: "États-Unis",
    continent: "Amérique",
    price: 1790,
    theme: "Nature",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800",
    description: "Admirez l'un des paysages naturels les plus spectaculaires au monde et explorez ses sentiers de randonnée panoramiques."
  },
  {
    id: "phuket",
    name: "Phuket",
    country: "Thaïlande",
    continent: "Asie",
    price: 1190,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800",
    description: "Profitez des plages tropicales, de la vie nocturne animée et des spots de plongée exceptionnels de cette île paradisiaque."
  },
  {
    id: "venise",
    name: "Venise",
    country: "Italie",
    continent: "Europe",
    price: 790,
    theme: "Ville",
    image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=800",
    description: "Naviguez sur les canaux romantiques, admirez l'architecture gothique et savourez la cuisine italienne authentique."
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australie",
    continent: "Océanie",
    price: 2190,
    theme: "Ville",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800",
    description: "Découvrez l'Opéra emblématique, surfez sur la plage de Bondi et explorez les quartiers animés de cette ville cosmopolite."
  },
  {
    id: "meknes",
    name: "Meknès",
    country: "Maroc",
    continent: "Afrique",
    price: 490,
    theme: "Culture",
    image: "https://images.unsplash.com/photo-1548965594-33419cacd6af?auto=format&fit=crop&w=800",
    description: "Explorez cette ville impériale historique avec ses portes monumentales, son architecture marocaine traditionnelle et ses souks authentiques."
  },
  {
    id: "bora-bora",
    name: "Bora Bora",
    country: "Polynésie Française",
    continent: "Océanie",
    price: 3990,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800",
    description: "Séjournez dans un bungalow sur pilotis entouré de lagons turquoise et profitez de l'une des destinations les plus luxueuses du monde."
  },
  {
    id: "prague",
    name: "Prague",
    country: "République Tchèque",
    continent: "Europe",
    price: 550,
    theme: "Culture",
    image: "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?auto=format&fit=crop&w=800",
    description: "Explorez la ville aux cent clochers, avec son architecture médiévale préservée et sa riche histoire culturelle."
  },
  {
    id: "rio",
    name: "Rio de Janeiro",
    country: "Brésil",
    continent: "Amérique",
    price: 1890,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800",
    description: "Admirez le Christ Rédempteur, détendez-vous sur les plages de Copacabana et imprégnez-vous de l'énergie vibrante du carnaval."
  },
  {
    id: "bali-spa",
    name: "Spa Resort Bali",
    country: "Indonésie",
    continent: "Asie",
    price: 1890,
    theme: "Spa",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800",
    description: "Offrez-vous une retraite de bien-être luxueuse avec des soins spa traditionnels balinais dans un cadre tropical idyllique."
  },
  {
    id: "phuket-jetski",
    name: "Aventures Jet Ski à Phuket",
    country: "Thaïlande",
    continent: "Asie",
    price: 1290,
    theme: "Jet Ski",
    image: "https://images.unsplash.com/photo-1534254310135-1978f9e3aa1a?auto=format&fit=crop&w=800",
    description: "Profitez de sensations fortes en jet ski autour des îles paradisiaques et des lagons cristallins de Phuket."
  },
  {
    id: "mont-blanc",
    name: "Chamonix Mont-Blanc",
    country: "France",
    continent: "Europe",
    price: 1290,
    theme: "Montagne",
    image: "https://images.unsplash.com/photo-1456425712181-0dd67b5723f0?auto=format&fit=crop&w=800",
    description: "Partez à l'aventure dans les Alpes françaises, avec des panoramas à couper le souffle et des activités pour toutes les saisons."
  },
  {
    id: "hawaï",
    name: "Hawaï",
    country: "États-Unis",
    continent: "Amérique",
    price: 2490,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=800",
    description: "Découvrez le paradis sur terre avec ses plages de sable noir, ses volcans actifs et sa culture polynésienne unique."
  },
  {
    id: "vienna",
    name: "Vienne",
    country: "Autriche",
    continent: "Europe",
    price: 690,
    theme: "Culture",
    image: "https://images.unsplash.com/photo-1516550893885-0c5434a274f8?auto=format&fit=crop&w=800",
    description: "Explorez la ville impériale avec ses palais majestueux, son opéra renommé et ses cafés historiques."
  },
  {
    id: "shanghai",
    name: "Shanghai",
    country: "Chine",
    continent: "Asie",
    price: 1590,
    theme: "Ville",
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=800",
    description: "Découvrez le mélange fascinant entre tradition et modernité dans cette métropole chinoise dynamique."
  },
  {
    id: "bali-hotel-luxe",
    name: "Hôtel de Luxe à Bali",
    country: "Indonésie",
    continent: "Asie",
    price: 2190,
    theme: "Hôtel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
    description: "Séjournez dans un hôtel 5 étoiles avec des villas privées, des piscines à débordement et un service personnalisé exceptionnel."
  },
  {
    id: "maldives-hotel",
    name: "Resort Exclusif aux Maldives",
    country: "Maldives",
    continent: "Asie",
    price: 3990,
    theme: "Hôtel",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016279e?auto=format&fit=crop&w=800",
    description: "Profitez d'un séjour inoubliable dans un hôtel de luxe sur une île privée avec accès direct au récif corallien."
  },
  {
    id: "mykonos",
    name: "Mykonos",
    country: "Grèce",
    continent: "Europe",
    price: 990,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=800",
    description: "Profitez des plages idylliques, de la vie nocturne animée et des villages pittoresques aux maisons blanches de cette île grecque."
  },
  {
    id: "safari-tanzanie",
    name: "Safari en Tanzanie",
    country: "Tanzanie",
    continent: "Afrique",
    price: 2490,
    theme: "Safari",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800",
    description: "Observez la grande migration dans le Serengeti et découvrez la faune extraordinaire de l'Afrique de l'Est."
  },
  {
    id: "raja-ampat",
    name: "Raja Ampat",
    country: "Indonésie",
    continent: "Asie",
    price: 2890,
    theme: "Plongée",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800",
    description: "Explorez l'un des écosystèmes marins les plus riches au monde avec une biodiversité sous-marine exceptionnelle."
  },
  {
    id: "spa-maroc",
    name: "Spa Traditionnel au Maroc",
    country: "Maroc",
    continent: "Afrique",
    price: 890,
    theme: "Spa",
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800",
    description: "Profitez des rituels de beauté et de bien-être traditionnels marocains dans un authentique hammam."
  },
  {
    id: "reykjavik",
    name: "Reykjavik",
    country: "Islande",
    continent: "Europe",
    price: 1290,
    theme: "Nature",
    image: "https://images.unsplash.com/photo-1500043357865-c6b8827edf10?auto=format&fit=crop&w=800",
    description: "Découvrez les aurores boréales, les geysers et les paysages volcaniques uniques de cette île nordique."
  },
  {
    id: "hong-kong",
    name: "Hong Kong",
    country: "Chine",
    continent: "Asie",
    price: 1490,
    theme: "Ville",
    image: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=800",
    description: "Explorez cette métropole dynamique avec ses gratte-ciels impressionnants, sa gastronomie variée et ses marchés traditionnels."
  },
  {
    id: "seychelles",
    name: "Seychelles",
    country: "Seychelles",
    continent: "Afrique",
    price: 2690,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1573843981119-1eb38cec29a8?auto=format&fit=crop&w=800",
    description: "Détendez-vous sur les plages immaculées entourées de rochers granitiques et découvrez la faune et la flore endémiques."
  },
  {
    id: "boutique-hotel-paris",
    name: "Boutique Hôtel à Paris",
    country: "France",
    continent: "Europe",
    price: 990,
    theme: "Hôtel",
    image: "https://images.unsplash.com/photo-1551776235-dde6c3615a40?auto=format&fit=crop&w=800",
    description: "Séjournez dans un hôtel de charme au cœur de Paris, alliant élégance parisienne et confort moderne."
  },
  {
    id: "kitesurf-bresil",
    name: "Kitesurf au Brésil",
    country: "Brésil",
    continent: "Amérique",
    price: 1790,
    theme: "Sport Nautique",
    image: "https://images.unsplash.com/photo-1575832175837-5dfa2440f94c?auto=format&fit=crop&w=800",
    description: "Profitez des meilleures conditions de vent pour le kitesurf sur les plages spectaculaires du nord-est brésilien."
  },
  {
    id: "polynesie-francaise",
    name: "Polynésie Française",
    country: "France",
    continent: "Océanie",
    price: 3790,
    theme: "Plage",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800",
    description: "Explorez ce paradis sur terre composé d'îles volcaniques entourées de lagons turquoise et de récifs coralliens époustouflants."
  },
  {
    id: "mexique-tour",
    name: "Tour du Mexique",
    country: "Mexique",
    continent: "Amérique",
    price: 1890,
    theme: "Culture",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800",
    description: "Découvrez les pyramides mayas, les plages immaculées, la cuisine locale et la culture vibrante à travers un circuit complet du Mexique."
  }
];
