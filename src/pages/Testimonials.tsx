
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="bg-altura-dark text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold mb-4">Avis de nos clients</h1>
          <p className="max-w-2xl text-lg">
            Découvrez ce que nos clients pensent de leurs expériences de voyage avec ALTURA VOYAGES.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              image={testimonial.image}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        {/* Section formulaire d'avis */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6 text-gray-800">Partagez votre expérience</h2>
          <p className="text-gray-600 mb-8">
            Vous avez voyagé avec ALTURA VOYAGES récemment ? Nous serions ravis de connaître votre avis.
          </p>
          
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura text-black"
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Ville *</label>
                <input
                  required
                  type="text"
                  id="location"
                  name="location"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura text-black"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination visitée *</label>
              <input
                required
                type="text"
                id="destination"
                name="destination"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura text-black"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Votre évaluation *</label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-2xl text-yellow-400 focus:outline-none"
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">Votre avis *</label>
              <textarea
                required
                id="review"
                name="review"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-altura text-black"
                placeholder="Partagez votre expérience de voyage avec ALTURA VOYAGES..."
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="bg-altura hover:bg-altura-light text-white px-6 py-2 rounded-md"
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
