
import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

const MentionsLegales = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-altura mb-6">Mentions Légales</h1>
      <div className="bg-card rounded-lg p-6">
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">1. Informations légales</h2>
              <p className="text-sm md:text-base">
                <strong>Dénomination sociale</strong> : ALTURA VOYAGES<br />
                <strong>Forme juridique</strong> : Société par actions simplifiée (SAS)<br />
                <strong>Capital social</strong> : 50 000 €<br />
                <strong>RCS</strong> : Nice B 123 456 789<br />
                <strong>Siège social</strong> : 25 Avenue Jean Médecin, 06000 Nice, France<br />
                <strong>Téléphone</strong> : +33 7 45 91 39 46<br />
                <strong>Email</strong> : <a href="mailto:alturavoyages@gmail.com" className="text-altura hover:underline">alturavoyages@gmail.com</a><br />
                <strong>Directeur de la publication</strong> : Jean Dupont<br />
                <strong>Numéro d'immatriculation au registre des opérateurs de voyages et de séjours</strong> : IM006123456 (délivré par Atout France)<br />
                <strong>N° TVA intracommunautaire</strong> : FR12345678901
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">2. Hébergement du site</h2>
              <p className="text-sm md:text-base">
                <strong>Société d'hébergement</strong> : OVH SAS<br />
                <strong>Adresse</strong> : 2 rue Kellermann, 59100 Roubaix, France<br />
                <strong>Téléphone</strong> : +33 9 72 10 10 10
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">3. Garantie financière</h2>
              <p className="text-sm md:text-base">
                Conformément aux dispositions du Code du Tourisme, ALTURA VOYAGES bénéficie d'une garantie financière délivrée par l'Association Professionnelle de Solidarité du Tourisme (APST), 15 avenue Carnot, 75017 Paris, France.
              </p>
              <p className="text-sm md:text-base mt-2">
                Cette garantie financière est destinée à protéger les clients en cas de défaillance de l'agence de voyages. Elle couvre les fonds reçus par l'agence de voyages et garantit le remboursement aux clients des sommes versées pour des prestations non fournies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">4. Assurance de responsabilité civile professionnelle</h2>
              <p className="text-sm md:text-base">
                ALTURA VOYAGES a souscrit une assurance de responsabilité civile professionnelle auprès de HISCOX, 38 avenue de l'Opéra, 75002 Paris, sous le numéro de police HA RCP0123456, garantissant les conséquences pécuniaires de sa responsabilité civile professionnelle telle qu'elle est définie aux articles L. 211-16 et suivants du Code du Tourisme.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">5. Propriété intellectuelle</h2>
              <p className="text-sm md:text-base">
                L'ensemble des éléments constituant le site alturavoyages.com (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) ainsi que le site lui-même, relèvent des législations françaises et internationales sur le droit d'auteur et la propriété intellectuelle.
              </p>
              <p className="text-sm md:text-base mt-2">
                Tous ces éléments sont la propriété exclusive d'ALTURA VOYAGES. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, sans l'autorisation écrite préalable d'ALTURA VOYAGES, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">6. Protection des données personnelles</h2>
              <p className="text-sm md:text-base">
                Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à ALTURA VOYAGES pour la gestion de sa clientèle et la promotion de ses services. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition aux informations qui vous concernent.
              </p>
              <p className="text-sm md:text-base mt-2">
                Vous pouvez exercer ces droits en vous adressant à : ALTURA VOYAGES, 25 Avenue Jean Médecin, 06000 Nice, ou par email à <a href="mailto:alturavoyages@gmail.com" className="text-altura hover:underline">alturavoyages@gmail.com</a>.
              </p>
              <p className="text-sm md:text-base mt-2">
                Pour plus d'informations sur la façon dont nous traitons vos données, veuillez consulter notre <Link to="/politique-de-confidentialite" className="text-altura hover:underline">Politique de confidentialité</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">7. Liens hypertextes</h2>
              <p className="text-sm md:text-base">
                Le site alturavoyages.com peut contenir des liens hypertextes vers d'autres sites internet. ALTURA VOYAGES ne peut être tenue responsable du contenu de ces sites externes ou de tout dommage ou préjudice découlant de leur utilisation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">8. Droit applicable et juridiction compétente</h2>
              <p className="text-sm md:text-base">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">9. Médiation</h2>
              <p className="text-sm md:text-base">
                Conformément aux dispositions du Code de la consommation concernant "le processus de médiation des litiges de la consommation", le client a le droit de recourir gratuitement au service de médiation proposé par ALTURA VOYAGES.
              </p>
              <p className="text-sm md:text-base mt-2">
                Le médiateur "droit de la consommation" ainsi proposé est le Médiateur du Tourisme et du Voyage (MTV).
              </p>
              <p className="text-sm md:text-base mt-2">
                Ce dispositif de médiation peut être joint par :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
                <li>voie électronique : <a href="https://www.mtv.travel" target="_blank" rel="noopener noreferrer" className="text-altura hover:underline">www.mtv.travel</a></li>
                <li>ou par voie postale : MTV Médiation Tourisme Voyage, BP 80 303, 75 823 Paris Cedex 17</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">10. Contactez-nous</h2>
              <p className="text-sm md:text-base">
                Pour toute question relative à ces mentions légales, vous pouvez nous contacter à :
              </p>
              <p className="text-sm md:text-base mt-2">
                <strong>ALTURA VOYAGES</strong><br />
                25 Avenue Jean Médecin<br />
                06000 Nice, France<br />
                Téléphone : +33 7 45 91 39 46<br />
                Email : <a href="mailto:alturavoyages@gmail.com" className="text-altura hover:underline">alturavoyages@gmail.com</a>
              </p>
            </section>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default MentionsLegales;
