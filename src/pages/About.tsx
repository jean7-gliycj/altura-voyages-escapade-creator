
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
      
      {/* Notre histoire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-800">Notre histoire</h2>
              <p className="text-gray-600 mb-4">
                ALTURA VOYAGES est née en 2010 de la passion de deux amis globe-trotters, Pierre et Marie, qui souhaitaient partager leur amour du voyage et leur expertise avec d'autres passionnés d'aventures et de découvertes.
              </p>
              <p className="text-gray-600 mb-4">
                Au fil des années, notre agence s'est développée pour devenir une référence dans le domaine des voyages sur mesure, tout en conservant l'esprit d'authenticité et d'attention personnalisée qui nous caractérise depuis nos débuts.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, ALTURA VOYAGES compte une équipe de 15 experts passionnés qui parcourent régulièrement le monde pour vous proposer les meilleures destinations et expériences.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1472566316349-bce77aa2a778?auto=format&fit=crop&w=800"
                alt="Notre équipe ALTURA VOYAGES"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Notre mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/6858dc5d-14cd-4273-a2c3-f3d01e5e5dc0.png" 
                alt="Alexandre Martin" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg mb-1">Alexandre Martin</h3>
                <p className="text-gray-600 mb-2">Co-fondateur</p>
                <p className="text-sm text-gray-500">Expert Asie</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/6f84144e-868c-4037-b18e-9b86ee9ace8a.png" 
                alt="Clara Ndiaye" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg mb-1">Clara Ndiaye</h3>
                <p className="text-gray-600 mb-2">Co-fondatrice</p>
                <p className="text-sm text-gray-500">Experte Afrique</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/740ba02f-caa3-4476-8bcd-86102161aab1.png" 
                alt="Mei Lin" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg mb-1">Mei Lin</h3>
                <p className="text-gray-600 mb-2">Directrice des opérations</p>
                <p className="text-sm text-gray-500">Experte Asie du Sud-Est</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/667bd6f8-f9ec-4c4d-9f73-07de0832daf9.png" 
                alt="Carlos Ramirez" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg mb-1">Carlos Ramirez</h3>
                <p className="text-gray-600 mb-2">Responsable clientèle</p>
                <p className="text-sm text-gray-500">Expert Amérique Latine</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/8c373c70-f138-4419-9e2f-dadd4117889d.png" 
                alt="David Laurent" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg mb-1">David Laurent</h3>
                <p className="text-gray-600 mb-2">Expert voyages d'aventure</p>
                <p className="text-sm text-gray-500">Spécialiste Europe et Océanie</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
