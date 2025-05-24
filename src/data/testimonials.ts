
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Camille Rousseau",
    location: "Paris",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Notre voyage à Bali organisé par ALTURA VOYAGES était parfait ! Leur équipe a tout planifié dans les moindres détails et nous a proposé des expériences authentiques que nous n'aurions pas pu découvrir seuls.",
    rating: 5
  },
  {
    id: "2", 
    name: "Antoine Moreau",
    location: "Lyon",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Je voyage régulièrement avec ALTURA VOYAGES depuis plusieurs années. Leur service client est exceptionnel et ils sont toujours disponibles en cas de problème. C'est rassurant de pouvoir compter sur des professionnels aussi réactifs.",
    rating: 5
  },
  {
    id: "3",
    name: "Julie Mercier", 
    location: "Marseille",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Notre circuit au Maroc était une expérience inoubliable. Le guide était passionné et connaissait parfaitement la culture locale. Les hébergements étaient charmants et authentiques. Je recommande vivement !",
    rating: 4
  },
  {
    id: "4",
    name: "Nicolas Lemoine",
    location: "Bordeaux", 
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    text: "Première expérience avec ALTURA VOYAGES pour notre voyage de noces et nous n'avons pas été déçus ! Le séjour aux Maldives était à la hauteur de nos attentes avec des petites attentions qui ont fait la différence.",
    rating: 5
  },
  {
    id: "5",
    name: "Émilie Blanchard",
    location: "Nantes",
    image: "https://randomuser.me/api/portraits/women/29.jpg", 
    text: "J'ai apprécié le rapport qualité-prix de leur formule New York. L'hôtel était idéalement situé et leurs conseils pour visiter la ville étaient précieux. Je n'hésiterai pas à refaire appel à leurs services.",
    rating: 4
  }
];
