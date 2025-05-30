
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 container-3d">
      <div className="bg-altura-dark text-white py-12 glass-3d backdrop-blur-lg relative overflow-hidden">
        {/* Effet de profondeur d'arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-altura/20 via-transparent to-altura-dark/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-display text-4xl font-bold mb-4 text-3d">Avis de nos clients</h1>
          <p className="max-w-2xl text-lg text-3d">
            Découvrez ce que nos clients pensent de leurs expériences de voyage avec ALTURA VOYAGES.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="transform-gpu"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeIn 0.6s ease-out forwards'
              }}
            >
              <TestimonialCard
                name={testimonial.name}
                location={testimonial.location}
                image={testimonial.image}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
        
        {/* Section formulaire d'avis */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto card-3d glass-3d bg-white/95 backdrop-blur-sm">
          <h2 className="font-display text-2xl font-bold mb-6 text-gray-800 text-3d">Partagez votre expérience</h2>
          <p className="text-gray-600 mb-8">
            Vous avez voyagé avec ALTURA VOYAGES récemment ? Nous serions ravis de connaître votre avis.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-3d p-4 rounded-lg">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-3d">Nom complet *</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-altura text-black btn-3d bg-white/90 backdrop-blur-sm"
                />
              </div>
              
              <div className="glass-3d p-4 rounded-lg">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 text-3d">Ville *</label>
                <input
                  required
                  type="text"
                  id="location"
                  name="location"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-altura text-black btn-3d bg-white/90 backdrop-blur-sm"
                />
              </div>
            </div>
            
            <div className="glass-3d p-4 rounded-lg">
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1 text-3d">Destination visitée *</label>
              <input
                required
                type="text"
                id="destination"
                name="destination"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-altura text-black btn-3d bg-white/90 backdrop-blur-sm"
              />
            </div>
            
            <div className="glass-3d p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-3 text-3d">Votre évaluation *</label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-3xl text-yellow-400 focus:outline-none btn-3d rounded-full p-2 hover:scale-125 transition-all duration-300"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(255, 193, 7, 0.3))',
                      transform: 'translateZ(10px)'
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            
            <div className="glass-3d p-4 rounded-lg">
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1 text-3d">Votre avis *</label>
              <textarea
                required
                id="review"
                name="review"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-altura text-black btn-3d bg-white/90 backdrop-blur-sm"
                placeholder="Partagez votre expérience de voyage avec ALTURA VOYAGES..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-altura hover:bg-altura-light text-black px-8 py-3 rounded-md btn-3d text-3d font-medium"
              >
                Soumettre mon avis
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
