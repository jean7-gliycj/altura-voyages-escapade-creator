
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const ConditionsGenerales = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-altura mb-6">Conditions Générales de Vente</h1>
      <div className="bg-card rounded-lg p-6">
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">1. Définitions</h2>
              <p className="text-sm md:text-base">
                <strong>ALTURA VOYAGES</strong> : Désigne la société ALTURA VOYAGES, société par actions simplifiée, immatriculée au Registre du Commerce et des Sociétés de Nice sous le numéro 123 456 789, dont le siège social est situé au 25 Avenue Jean Médecin, 06000 Nice, France, représentée par son Président en exercice.
              </p>
              <p className="text-sm md:text-base mt-2">
                <strong>Client</strong> : Désigne toute personne physique ou morale qui réserve, commande et/ou achète une Prestation proposée par ALTURA VOYAGES.
              </p>
              <p className="text-sm md:text-base mt-2">
                <strong>Prestation</strong> : Désigne tout service proposé à la vente par ALTURA VOYAGES, notamment des voyages, séjours, forfaits touristiques, transport, hébergement, ou autres services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">2. Champ d'application</h2>
              <p className="text-sm md:text-base">
                Les présentes conditions générales de vente s'appliquent à toutes les Prestations proposées par ALTURA VOYAGES et sont valables au moment où la commande est passée.
              </p>
              <p className="text-sm md:text-base mt-2">
                Le Client reconnaît avoir pris connaissance des présentes Conditions Générales de Vente avant la validation de sa commande. La validation de la commande vaut donc acceptation sans restriction ni réserve des présentes Conditions Générales de Vente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">3. Réservation et paiement</h2>
              <p className="text-sm md:text-base">
                La réservation d'une Prestation n'est confirmée qu'après le versement d'un acompte représentant 30% du prix total de la Prestation, sauf conditions particulières spécifiées lors de la réservation.
              </p>
              <p className="text-sm md:text-base mt-2">
                Le solde du prix doit être payé au plus tard 30 jours avant la date de départ. Pour les réservations intervenant moins de 30 jours avant le départ, le prix total de la Prestation est immédiatement exigible.
              </p>
              <p className="text-sm md:text-base mt-2">
                Les paiements peuvent être effectués par carte bancaire, virement ou tout autre moyen proposé lors de la réservation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">4. Prix</h2>
              <p className="text-sm md:text-base">
                Les prix sont indiqués en euros et s'entendent toutes taxes comprises (TTC). Ils comprennent précisément les éléments mentionnés dans la description de la Prestation.
              </p>
              <p className="text-sm md:text-base mt-2">
                Sauf mention contraire, les prix ne comprennent pas :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
                <li>Les frais de visa et de vaccination</li>
                <li>Les assurances facultatives (annulation, assistance, etc.)</li>
                <li>Les boissons et dépenses personnelles</li>
                <li>Les pourboires et gratifications</li>
                <li>Les excursions optionnelles</li>
                <li>Les taxes de séjour à régler sur place</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">5. Modification et annulation</h2>
              <h3 className="text-xl font-display font-semibold mb-2">5.1 Modification ou annulation par le Client</h3>
              <p className="text-sm md:text-base">
                Toute demande de modification ou d'annulation doit être adressée à ALTURA VOYAGES par écrit (courrier électronique ou postal avec accusé de réception).
              </p>
              <p className="text-sm md:text-base mt-2">
                En cas d'annulation par le Client, les frais suivants seront appliqués :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
                <li>Plus de 60 jours avant le départ : 10% du prix total</li>
                <li>De 60 à 31 jours avant le départ : 30% du prix total</li>
                <li>De 30 à 21 jours avant le départ : 50% du prix total</li>
                <li>De 20 à 8 jours avant le départ : 75% du prix total</li>
                <li>Moins de 8 jours avant le départ : 100% du prix total</li>
              </ul>

              <h3 className="text-xl font-display font-semibold mb-2 mt-4">5.2 Modification ou annulation par ALTURA VOYAGES</h3>
              <p className="text-sm md:text-base">
                ALTURA VOYAGES se réserve le droit de modifier ou d'annuler une Prestation en cas de force majeure, de circonstances exceptionnelles et inévitables, ou si le nombre minimal de participants n'est pas atteint.
              </p>
              <p className="text-sm md:text-base mt-2">
                En cas d'annulation par ALTURA VOYAGES, le Client sera remboursé intégralement des sommes versées, mais ne pourra pas prétendre à une indemnité supplémentaire.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">6. Responsabilité</h2>
              <p className="text-sm md:text-base">
                ALTURA VOYAGES est responsable de la bonne exécution des services de voyage prévus au contrat conformément à l'article L. 211-16 du Code du tourisme.
              </p>
              <p className="text-sm md:text-base mt-2">
                Toutefois, ALTURA VOYAGES sera exonérée de tout ou partie de sa responsabilité en cas de force majeure, fait d'un tiers ou fait du Client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">7. Formalités</h2>
              <p className="text-sm md:text-base">
                Le Client est responsable de s'assurer qu'il dispose des documents nécessaires à son voyage (passeport, visa, certificats de vaccination, etc.). ALTURA VOYAGES ne saurait être tenue responsable si le Client se voit refuser l'embarquement ou l'entrée dans un pays faute de satisfaire aux formalités de police, de santé ou de douane.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">8. Réclamations</h2>
              <p className="text-sm md:text-base">
                Toute réclamation doit être adressée à ALTURA VOYAGES par lettre recommandée avec accusé de réception dans les 30 jours suivant la fin de la Prestation. À défaut de réponse satisfaisante dans un délai de 60 jours, le Client peut saisir le Médiateur du Tourisme et du Voyage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">9. Droit applicable et juridiction compétente</h2>
              <p className="text-sm md:text-base">
                Les présentes Conditions Générales de Vente sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">10. Protection des données personnelles</h2>
              <p className="text-sm md:text-base">
                Les données personnelles du Client sont traitées conformément à notre politique de confidentialité, disponible sur notre site internet.
              </p>
            </section>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ConditionsGenerales;
