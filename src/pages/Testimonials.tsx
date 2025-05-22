
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import TestimonialCard from "@/components/TestimonialCard";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define testimonial type
interface Testimonial {
  id: string;
  name: string;
  location: string | null;
  text: string;
  rating: number;
  created_at: string;
  user_id: string | null;
}

// Create a schema for form validation
const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  location: z.string().optional(),
  text: z.string().min(10, "Testimonial must be at least 10 characters"),
  rating: z.number().min(1).max(5),
});

type TestimonialFormValues = z.infer<typeof testimonialSchema>;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRating, setSelectedRating] = useState(5);
  const { toast } = useToast();
  
  // Initialize form with react-hook-form
  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      location: "",
      text: "",
      rating: 5,
    },
  });

  // Fetch testimonials from Supabase on component mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (error) throw error;
        
        if (data) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        toast({
          title: "Error",
          description: "Failed to load testimonials. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [toast]);

  const onSubmit = async (values: TestimonialFormValues) => {
    try {
      // Get the current user session
      const { data: { session } } = await supabase.auth.getSession();
      
      // Prepare the testimonial data - make sure all required fields are included
      const testimonialData = {
        name: values.name,
        location: values.location || null,
        text: values.text,
        rating: values.rating,
        user_id: session?.user?.id || null,
      };
      
      // Insert the testimonial into the database
      const { error } = await supabase
        .from("testimonials")
        .insert([testimonialData]);
      
      if (error) throw error;
      
      // Show success message
      toast({
        title: "Success",
        description: "Your testimonial has been submitted and will be reviewed soon.",
      });
      
      // Reset form
      form.reset();
      setSelectedRating(5);
      
      // Optionally, refresh testimonials
      const { data, error: fetchError } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (!fetchError && data) {
        setTestimonials(data);
      }
    } catch (error: any) {
      console.error("Error submitting testimonial:", error);
      toast({
        title: "Error",
        description: "Failed to submit testimonial. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Check if user is authenticated
  const [session, setSession] = useState<any>(null);
  
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

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
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-altura"></div>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location || ""}
                image={"https://randomuser.me/api/portraits/" + (Math.random() > 0.5 ? "women" : "men") + "/" + Math.floor(Math.random() * 99) + ".jpg"}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">Aucun témoignage pour le moment. Soyez le premier à partager votre expérience!</p>
          </div>
        )}
        
        {/* Section formulaire d'avis */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6 text-gray-800">Partagez votre expérience</h2>
          <p className="text-gray-600 mb-8">
            Vous avez voyagé avec ALTURA VOYAGES récemment ? Nous serions ravis de connaître votre avis.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet *</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ville</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre ville" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre évaluation *</FormLabel>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`text-2xl ${
                            star <= selectedRating ? "text-yellow-400" : "text-gray-300"
                          } focus:outline-none`}
                          onClick={() => {
                            setSelectedRating(star);
                            field.onChange(star);
                          }}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre avis *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Partagez votre expérience de voyage avec ALTURA VOYAGES..." 
                        className="resize-none" 
                        rows={4}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="bg-altura hover:bg-altura-light text-white"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">⏳</span> Envoi en cours...
                  </span>
                ) : "Soumettre mon avis"}
              </Button>

              {!session && (
                <p className="text-sm text-amber-600 mt-2">
                  Vous n'êtes pas connecté. Votre avis sera enregistré, mais vous devrez vous connecter pour le gérer.
                </p>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
