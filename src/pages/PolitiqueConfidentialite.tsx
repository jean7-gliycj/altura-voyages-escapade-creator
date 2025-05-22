
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const PolitiqueConfidentialite = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-altura mb-6">Politique de Confidentialité</h1>
      <div className="bg-card rounded-lg p-6">
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">1. Introduction</h2>
              <p className="text-sm md:text-base">
                ALTURA VOYAGES s'engage à protéger la vie privée des utilisateurs de son site web et de ses clients. La présente politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles.
              </p>
              <p className="text-sm md:text-base mt-2">
                En utilisant notre site web ou en faisant appel à nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">2. Collecte des informations</h2>
              <p className="text-sm md:text-base">
                Nous collectons différents types d'informations auprès de nos utilisateurs et clients, notamment :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
                <li><strong>Informations personnelles</strong> : nom, prénom, adresse postale, adresse e-mail, numéro de téléphone, date de naissance, nationalité, numéro de passeport ou de carte d'identité.</li>
                <li><strong>Informations de paiement</strong> : coordonnées bancaires, historique des transactions.</li>
                <li><strong>Informations sur les voyages</strong> : préférences de voyage, historique des réservations, exigences alimentaires ou médicales particulières.</li>
                <li><strong>Données de connexion</strong> : adresse IP, type de navigateur, pages visitées, durée de visite, système d'exploitation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">3. Utilisation des informations</h2>
              <p className="text-sm md:text-base">
                Nous utilisons les informations collectées pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
                <li>Traiter vos réservations et demandes</li>
                <li>Vous fournir les services demandés</li>
                <li>Communiquer avec vous concernant votre voyage</li>
                <li>Vous envoyer des informations sur nos offres et promotions (si vous y avez consenti)</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Prévenir la fraude et assurer la sécurité de nos systèmes</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">4. Partage des informations</h2>
              <p className="text-sm md:text-base">
                Nous pouvons partager vos informations personnelles avec :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
                <li><strong>Nos partenaires de voyage</strong> : compagnies aériennes, hôtels, sociétés de location de voitures, compagnies d'assurance, guides locaux, etc., afin de vous fournir les services demandés.</li>
                <li><strong>Nos prestataires de services</strong> : prestataires informatiques, services de paiement, consultants, etc., qui nous aident à exploiter notre entreprise.</li>
                <li><strong>Les autorités publiques</strong> : lorsque la loi l'exige ou pour protéger nos droits légaux.</li>
              </ul>
              <p className="text-sm md:text-base mt-2">
                Nous ne vendons jamais vos informations personnelles à des tiers à des fins de marketing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">5. Conservation des données</h2>
              <p className="text-sm md:text-base">
                Nous conservons vos informations personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, sauf si une période de conservation plus longue est requise ou autorisée par la loi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">6. Sécurité des données</h2>
              <p className="text-sm md:text-base">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">7. Vos droits</h2>
              <p className="text-sm md:text-base">
                Conformément aux lois applicables en matière de protection des données, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
                <li>Droit d'accès à vos informations personnelles</li>
                <li>Droit de rectification des informations inexactes</li>
                <li>Droit à l'effacement de vos informations personnelles</li>
                <li>Droit à la limitation du traitement de vos informations</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement de vos informations</li>
                <li>Droit de retirer votre consentement à tout moment</li>
              </ul>
              <p className="text-sm md:text-base mt-2">
                Pour exercer ces droits, veuillez nous contacter à l'adresse : <a href="mailto:alturavoyages@gmail.com" className="text-altura hover:underline">alturavoyages@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">8. Cookies et technologies similaires</h2>
              <p className="text-sm md:text-base">
                Nous utilisons des cookies et d'autres technologies similaires pour améliorer votre expérience sur notre site web, analyser notre trafic et personnaliser notre contenu. Pour plus d'informations sur notre utilisation des cookies, veuillez consulter notre politique en matière de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">9. Modifications de la politique de confidentialité</h2>
              <p className="text-sm md:text-base">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuelles modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-altura mb-3">10. Contact</h2>
              <p className="text-sm md:text-base">
                Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à :
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

export default PolitiqueConfidentialite;
