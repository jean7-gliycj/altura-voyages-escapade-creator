
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);
  const { toast } = useToast();
  
  // Load saved emails from localStorage on component mount
  useEffect(() => {
    const savedEmails = localStorage.getItem("subscribedEmails");
    if (savedEmails) {
      setSubscribedEmails(JSON.parse(savedEmails));
    }
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!subscribedEmails.includes(email)) {
      const updatedEmails = [...subscribedEmails, email];
      setSubscribedEmails(updatedEmails);
      
      // Save to localStorage
      localStorage.setItem("subscribedEmails", JSON.stringify(updatedEmails));
      
      toast({
        title: "Inscription réussie !",
        description: "Vous recevrez bientôt nos meilleures offres par email.",
      });
    } else {
      toast({
        title: "Email déjà inscrit",
        description: "Cette adresse email est déjà inscrite à notre newsletter.",
      });
    }
    
    // Reset form
    setEmail("");
  };
  
  return (
    <div className="w-full">
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
      
      {subscribedEmails.length > 0 && (
        <div className="mt-6 p-4 bg-black/50 border border-altura/20 rounded-md">
          <h3 className="text-altura font-semibold mb-2">Emails inscrits ({subscribedEmails.length})</h3>
          <div className="max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-altura/30 scrollbar-track-black/20">
            <ul className="text-sm text-white">
              {subscribedEmails.map((subscribedEmail, index) => (
                <li key={index} className="py-1 border-b border-altura/10 last:border-0">
                  {subscribedEmail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
