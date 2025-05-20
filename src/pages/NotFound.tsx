
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="font-display text-7xl font-bold text-altura mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page non trouvée</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée. Revenez à l'accueil pour continuer votre exploration.
        </p>
        <Link to="/">
          <Button className="bg-altura hover:bg-altura-light text-white px-6 py-2">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
