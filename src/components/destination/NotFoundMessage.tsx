
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const NotFoundMessage: FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Destination non trouvée</h1>
        <Link to="/destinations">
          <Button>Retour aux destinations</Button>
        </Link>
      </div>
    </div>
  );
};

