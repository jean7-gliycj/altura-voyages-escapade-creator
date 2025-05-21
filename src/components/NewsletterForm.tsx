
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this to a backend service
    // For now, we just show a toast message
    toast({
      title: "Inscription réussie !",
      description: "Vous recevrez bientôt nos meilleures offres par email.",
    });
    
    // Reset form
    setEmail("");
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
      <input
        type="email"
        placeholder="Votre adresse email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-md border border-altura/50 bg-black text-white focus:outline-none focus:border-altura"
      />
      <Button type="submit" className="bg-altura hover:bg-altura-light text-black whitespace-nowrap">
        S'abonner
      </Button>
    </form>
  );
};

export default NewsletterForm;
