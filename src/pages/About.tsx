

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="bg-altura-dark text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold mb-4">À propos d'ALTURA VOYAGES</h1>
          <p className="max-w-2xl text-lg">
            Votre partenaire de confiance pour des voyages d'exception depuis 2010.
          </p>
        </div>
      </div>
      
      {/* Notre mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-800">Notre mission</h2>
              <p className="text-gray-600 mb-4">
                Chez ALTURA VOYAGES, notre mission est de créer pour chaque voyageur une expérience unique et mémorable, parfaitement adaptée à ses attentes et à ses rêves.
              </p>
              <p className="text-gray-600 mb-4">
                Nous nous engageons à vous proposer des voyages qui sortent des sentiers battus, tout en vous garantissant un confort optimal et une sécurité absolue.
              </p>
              <p className="text-gray-600">
                Notre approche personnalisée nous permet de comprendre vos besoins spécifiques et de concevoir des itinéraires sur mesure qui vous ressemblent.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800"
                alt="Mission ALTURA VOYAGES"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Nos valeurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-10 text-gray-800 text-center">Nos valeurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-altura/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-altura">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Authenticité</h3>
              <p className="text-gray-600">
                Nous privilégions les expériences authentiques qui vous permettent de découvrir la véritable essence des destinations que vous visitez.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-altura/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-altura">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                Nous recherchons constamment de nouvelles destinations, expériences et façons de voyager pour vous offrir ce qu'il y a de mieux.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-altura/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-altura">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Responsabilité</h3>
              <p className="text-gray-600">
                Nous nous engageons à promouvoir un tourisme responsable et durable qui respecte les communautés locales et l'environnement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Notre équipe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-10 text-gray-800 text-center">Notre équipe</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src="/lovable-uploads/6858dc5d-14cd-4273-a2c3-f3d01e5e5dc0.png" 
                  alt="Alexandre Martin" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-base mb-0.5">Alexandre Martin</h3>
                <p className="text-gray-600 text-sm mb-1">Co-fondateur</p>
                <p className="text-xs text-gray-500">Expert Asie</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src="/lovable-uploads/6f84144e-868c-4037-b18e-9b86ee9ace8a.png" 
                  alt="Clara Ndiaye" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-base mb-0.5">Clara Ndiaye</h3>
                <p className="text-gray-600 text-sm mb-1">Co-fondatrice</p>
                <p className="text-xs text-gray-500">Experte Afrique</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src="/lovable-uploads/740ba02f-caa3-4476-8bcd-86102161aab1.png" 
                  alt="Mei Lin" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-base mb-0.5">Mei Lin</h3>
                <p className="text-gray-600 text-sm mb-1">Directrice des opérations</p>
                <p className="text-xs text-gray-500">Experte Asie du Sud-Est</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src="/lovable-uploads/667bd6f8-f9ec-4c4d-9f73-07de0832daf9.png" 
                  alt="Carlos Ramirez" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-base mb-0.5">Carlos Ramirez</h3>
                <p className="text-gray-600 text-sm mb-1">Responsable clientèle</p>
                <p className="text-xs text-gray-500">Expert Amérique Latine</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src="/lovable-uploads/8c373c70-f138-4419-9e2f-dadd4117889d.png" 
                  alt="David Laurent" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-base mb-0.5">David Laurent</h3>
                <p className="text-gray-600 text-sm mb-1">Expert voyages d'aventure</p>
                <p className="text-xs text-gray-500">Spécialiste Europe et Océanie</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nos certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-8 text-gray-800 text-center">Nos certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-altura/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-altura">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">IATA Accredited Agent</h3>
                  <p className="text-gray-600">
                    En tant qu'agent accrédité IATA, nous avons accès aux meilleurs tarifs aériens et pouvons vous offrir un service de billetterie efficace et fiable.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-altura/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-altura">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Immatriculation ATOUT France</h3>
                  <p className="text-gray-600">
                    Notre immatriculation officielle auprès d'ATOUT France (IM006100048) garantit notre professionnalisme et notre conformité aux exigences légales du secteur du tourisme en France.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-altura/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-altura">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Garantie financière APST</h3>
                  <p className="text-gray-600">
                    Nous sommes membres de l'Association Professionnelle de Solidarité du Tourisme (APST), qui garantit les fonds déposés par nos clients et assure leur rapatriement en cas de défaillance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-altura/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-altura">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Membre ASTA</h3>
                  <p className="text-gray-600">
                    Notre adhésion à l'American Society of Travel Advisors (ASTA) témoigne de notre engagement envers les normes éthiques et professionnelles les plus élevées du secteur du voyage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-altura bg-opacity-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-6 text-gray-800">Prêt à vivre l'expérience ALTURA VOYAGES ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contactez nos experts dès aujourd'hui pour commencer à planifier votre prochain voyage d'exception.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-altura hover:bg-altura/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Nous contacter
            </a>
            <a href="/reservation" className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Réserver maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

