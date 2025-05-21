
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { title: 'Accueil', path: '/' },
    { title: 'Destinations', path: '/destinations' },
    { title: 'À propos', path: '/a-propos' },
    { title: 'Nos offres', path: '/offres' },
    { title: 'Réservation', path: '/reservation' },
    { title: 'Contact', path: '/contact' },
    { title: 'Avis', path: '/avis' },
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/9faaccf6-d73a-4cb3-b308-fc9a90914563.png" 
                alt="Altura Voyages Logo" 
                className="h-24 md:h-28" 
              />
            </Link>
          </div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-4 flex-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-altura ${
                  isActive(link.path) ? 'text-altura border-b-2 border-altura' : 'text-gray-400'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          {/* Bouton mobile menu */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black py-4 px-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors py-2 ${
                  isActive(link.path) ? 'text-altura' : 'text-gray-400'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
