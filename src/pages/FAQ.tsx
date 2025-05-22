
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-altura mb-6">Foire Aux Questions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-2xl font-display font-semibold text-altura mb-4">Réservation & Paiement</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Comment puis-je réserver un voyage avec ALTURA VOYAGES ?
              </AccordionTrigger>
              <AccordionContent>
                Vous pouvez réserver un voyage de plusieurs façons : en ligne via notre site web, par téléphone au +33 7 45 91 39 46, ou en vous rendant directement dans notre agence située au 25 Avenue Jean Médecin, 06000 Nice. Notre équipe est à votre disposition pour vous accompagner dans votre réservation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Quels modes de paiement acceptez-vous ?
              </AccordionTrigger>
              <AccordionContent>
                Nous acceptons les paiements par carte bancaire (Visa, Mastercard, American Express), virement bancaire et espèces (en agence uniquement, dans la limite des montants autorisés par la loi). Pour certains voyages, nous proposons également des facilités de paiement en plusieurs fois sans frais.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Quel est le montant de l'acompte à verser lors de la réservation ?
              </AccordionTrigger>
              <AccordionContent>
                Un acompte de 30% du montant total du voyage est généralement demandé à la réservation. Le solde doit être réglé au plus tard 30 jours avant le départ. Pour les réservations effectuées moins de 30 jours avant le départ, le règlement intégral est exigé à la réservation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Peut-on annuler ou modifier une réservation ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, mais des frais peuvent s'appliquer selon la date de l'annulation ou de la modification. Consultez nos conditions générales de vente pour connaître les détails. Nous recommandons vivement de souscrire une assurance annulation pour vous protéger contre les imprévus.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-2xl font-display font-semibold text-altura mb-4">Voyages & Destinations</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Proposez-vous des voyages sur mesure ?
              </AccordionTrigger>
              <AccordionContent>
                Absolument ! Nous sommes spécialisés dans la création de voyages sur mesure adaptés à vos envies, votre budget et vos disponibilités. Contactez-nous pour discuter de votre projet de voyage, et nous vous proposerons un itinéraire personnalisé.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Quelle est la taille des groupes pour les voyages organisés ?
              </AccordionTrigger>
              <AccordionContent>
                La taille des groupes varie selon les voyages. Pour nos circuits découverte, nous limitons généralement les groupes à 16 personnes maximum afin de garantir une expérience de qualité. Certains voyages plus exclusifs peuvent être limités à 8-10 personnes, tandis que d'autres événements spéciaux peuvent accueillir des groupes plus importants.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                Les vols sont-ils inclus dans vos forfaits ?
              </AccordionTrigger>
              <AccordionContent>
                Cela dépend du forfait choisi. Certains de nos forfaits incluent les vols internationaux et domestiques, tandis que d'autres sont proposés sans transport aérien pour vous offrir plus de flexibilité. La description détaillée de chaque offre précise clairement ce qui est inclus et ce qui ne l'est pas.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                Quelles sont les destinations les plus populaires ?
              </AccordionTrigger>
              <AccordionContent>
                Nos destinations les plus populaires varient selon les saisons. Actuellement, nous constatons un fort engouement pour Bali, le Japon, les Maldives, le Mexique et le Portugal. Nos voyages culturels en Italie, en Grèce et en Égypte sont également très prisés, tout comme nos safaris en Afrique du Sud et en Tanzanie.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-2xl font-display font-semibold text-altura mb-4">Services & Prestations</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">
                Proposez-vous une assistance 24/7 pendant le voyage ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, nous offrons une assistance téléphonique disponible 24h/24 et 7j/7 pour tous nos clients en voyage. En cas d'urgence ou de problème pendant votre séjour, vous pouvez nous joindre à tout moment au numéro fourni dans vos documents de voyage.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">
                Les transferts aéroport sont-ils inclus ?
              </AccordionTrigger>
              <AccordionContent>
                Pour la plupart de nos forfaits, les transferts entre l'aéroport et votre hébergement sont inclus. Pour certaines offres spéciales ou les voyages sur mesure, ces services peuvent être en option. Consultez la description détaillée de votre voyage pour vérifier ce qui est inclus.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-11">
              <AccordionTrigger className="text-left">
                Puis-je réserver uniquement un hôtel ou un vol ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, nous proposons également des réservations à la carte. Vous pouvez réserver uniquement un hébergement, un vol, une location de voiture ou toute autre prestation individuelle selon vos besoins.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-12">
              <AccordionTrigger className="text-left">
                Proposez-vous des assurances voyage ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, nous proposons différentes formules d'assurance voyage : assurance annulation, assurance multirisque (couvrant l'annulation, les bagages, l'assistance médicale), et assurance complémentaire carte bancaire. Nous vous conseillons vivement de souscrire une assurance adaptée à votre voyage pour voyager l'esprit tranquille.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-2xl font-display font-semibold text-altura mb-4">Informations Pratiques</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-13">
              <AccordionTrigger className="text-left">
                Quels documents de voyage sont nécessaires ?
              </AccordionTrigger>
              <AccordionContent>
                Les documents nécessaires dépendent de votre destination. En général, vous aurez besoin d'un passeport valide (souvent avec une validité de 6 mois après la date de retour). Certains pays exigent également un visa ou des formalités spécifiques. Nous vous informerons des exigences pour votre destination lors de la réservation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-14">
              <AccordionTrigger className="text-left">
                Y a-t-il des vaccins obligatoires pour certaines destinations ?
              </AccordionTrigger>
              <AccordionContent>
                Certaines destinations peuvent exiger des vaccinations spécifiques. Nous vous informerons des recommandations sanitaires pour votre destination, mais nous vous conseillons également de consulter un médecin ou un centre de vaccinations internationales avant votre départ pour obtenir des conseils personnalisés.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-15">
              <AccordionTrigger className="text-left">
                Comment puis-je obtenir mes documents de voyage ?
              </AccordionTrigger>
              <AccordionContent>
                Vos documents de voyage (billets électroniques, bons d'hébergement, programme détaillé, etc.) vous seront envoyés par email environ une semaine avant votre départ. Vous pouvez également choisir de les recevoir en version papier en venant les retirer à notre agence.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-16">
              <AccordionTrigger className="text-left">
                Que faire en cas de retard ou d'annulation de vol ?
              </AccordionTrigger>
              <AccordionContent>
                En cas de retard ou d'annulation de vol, contactez immédiatement notre service d'assistance 24/7. Nos conseillers vous guideront pour trouver une solution alternative et adapter votre itinéraire si nécessaire. Conservez tous les justificatifs (communication de la compagnie aérienne, reçus des dépenses supplémentaires, etc.) pour faciliter les démarches de remboursement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
      <div className="bg-card rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-display font-semibold text-altura mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
        <p className="mb-4">Contactez-nous directement et notre équipe se fera un plaisir de vous répondre dans les plus brefs délais.</p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:alturavoyages@gmail.com" className="bg-altura text-black px-4 py-2 rounded-md hover:bg-altura-light transition-colors">
            Nous envoyer un email
          </a>
          <a href="tel:+33745913946" className="bg-black text-white border border-altura px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Nous appeler
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
