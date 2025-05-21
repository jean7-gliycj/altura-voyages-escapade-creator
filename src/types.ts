
export interface Destination {
  id: string;
  name: string;
  image: string;
  country: string;
  continent: string;
  price: number;
  theme: string;
  description: string;
}

export interface Offer {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  duration: string;
  description: string;
  details?: string[];
  inclusions?: string[];
  exclusions?: string[];
}
