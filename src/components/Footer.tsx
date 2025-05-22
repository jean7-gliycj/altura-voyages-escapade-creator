
import { Link } from 'react-router-dom';
import { Mail, MapPin, Calendar, Instagram, Phone, Smartphone } from 'lucide-react';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/9faaccf6-d73a-4cb3-b308-fc9a90914563.png" 
                alt="Altura Voyages Logo" 
                className="h-32 mr-3" 
              />
            </div>
            <p className="text-sm mb-4">
              Votre partenaire de confiance pour des voyages inoubliables à travers le monde.
              Des expériences authentiques, des destinations de rêve et un service personnalisé.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Icônes réseaux sociaux */}
              <a href="#" className="hover:text-altura transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/altura_voyages?igsh=MnFjbWp6cG9uNmE5&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-altura transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/+33745913946"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-altura transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <Smartphone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Colonne 2 */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-altura">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-altura transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-altura transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-altura transition-colors">À propos</Link>
              </li>
              <li>
                <Link to="/offres" className="hover:text-altura transition-colors">Nos offres</Link>
              </li>
              <li>
                <Link to="/reservation" className="hover:text-altura transition-colors">Réservation</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-altura transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/avis" className="hover:text-altura transition-colors">Avis clients</Link>
              </li>
            </ul>
            
            <h3 className="font-display text-lg font-semibold mb-4 mt-6 text-altura">Informations légales</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/conditions-generales" className="hover:text-altura transition-colors">Conditions générales</Link>
              </li>
              <li>
                <Link to="/politique-de-confidentialite" className="hover:text-altura transition-colors">Politique de confidentialité</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-altura transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="hover:text-altura transition-colors">Mentions légales</Link>
              </li>
              <li>
                <Link to="/partenaires" className="hover:text-altura transition-colors">Nos partenaires</Link>
              </li>
            </ul>
          </div>
          
          {/* Colonne 3 */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-altura">Contactez-nous</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-altura shrink-0" />
                <span>25 Avenue Jean Médecin, 06000 Nice, France</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-altura shrink-0" />
                <a href="mailto:alturavoyages@gmail.com" className="hover:text-altura transition-colors">
                  alturavoyages@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-altura shrink-0" />
                <a href="tel:+33745913946" className="hover:text-altura transition-colors">
                  +33 7 45 91 39 46
                </a>
              </li>
              <li className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-altura shrink-0" />
                <span>Lun-Sam: 9h00 - 19h00</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Partenaires */}
        <div className="mt-10 mb-8">
          <h3 className="font-display text-lg font-semibold mb-4 text-center text-altura">Nos partenaires</h3>
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="bg-white p-4 rounded-md flex items-center justify-center h-24">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static mr-2 transform-none" />
              <CarouselNext className="static ml-2 transform-none" />
            </div>
          </Carousel>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} ALTURA VOYAGES. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

// Partenaires
const partners = [
  { name: "Air France", logo: "/lovable-uploads/66b71363-7db2-4887-b262-3ce32cfd76dd.png" },
  { name: "Booking.com", logo: "/lovable-uploads/6f84144e-868c-4037-b18e-9b86ee9ace8a.png" },
  { name: "Expedia", logo: "/lovable-uploads/740ba02f-caa3-4476-8bcd-86102161aab1.png" }
];

export default Footer;
