
import { FC } from "react";

interface DestinationContentProps {
  name: string;
  description: string;
}

export const DestinationContent: FC<DestinationContentProps> = ({ 
  name, 
  description 
}) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="font-display text-2xl font-semibold mb-6 text-white">À propos de {name}</h2>
      <p className="text-lg mb-6 text-white">{description}</p>
      
      <div className="mb-8">
        <h3 className="font-display text-xl font-semibold mb-4 text-white">Pourquoi visiter {name} ?</h3>
        <ul className="list-disc pl-5 space-y-2 text-white">
          <li>Découvrez des paysages à couper le souffle</li>
          <li>Immergez-vous dans une culture fascinante</li>
          <li>Savourez une gastronomie locale exceptionnelle</li>
          <li>Profitez d'activités adaptées à tous les âges et tous les goûts</li>
          <li>Créez des souvenirs inoubliables avec vos proches</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-display text-xl font-semibold mb-4 text-white">Activités populaires</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-md p-4">
            <h4 className="font-semibold mb-1 text-white">Explorer</h4>
            <p className="text-white">Découvrez des sites historiques et naturels uniques.</p>
          </div>
          <div className="border border-gray-200 rounded-md p-4">
            <h4 className="font-semibold mb-1 text-white">Se détendre</h4>
            <p className="text-white">Profitez de moments de relaxation parfaits.</p>
          </div>
          <div className="border border-gray-200 rounded-md p-4">
            <h4 className="font-semibold mb-1 text-white">Déguster</h4>
            <p className="text-white">Savourez la cuisine locale et ses saveurs.</p>
          </div>
          <div className="border border-gray-200 rounded-md p-4">
            <h4 className="font-semibold mb-1 text-white">S'amuser</h4>
            <p className="text-white">Participez à des activités divertissantes pour tous.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

