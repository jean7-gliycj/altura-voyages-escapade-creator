import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

// Lazy-loaded components for better performance
const Index = lazy(() => import("./pages/Index"));
const Destinations = lazy(() => import("./pages/Destinations"));
const About = lazy(() => import("./pages/About"));
const Offers = lazy(() => import("./pages/Offers"));
const Reservation = lazy(() => import("./pages/Reservation"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));
const OfferDetail = lazy(() => import("./pages/OfferDetail"));
const ConditionsGenerales = lazy(() => import("./pages/ConditionsGenerales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const FAQ = lazy(() => import("./pages/FAQ"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));

// Loading component
const Loading = () => (
  <div className="w-full h-screen flex items-center justify-center bg-black">
    <div className="text-altura text-2xl">Chargement...</div>
  </div>
);

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // Google Analytics setup
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-EXAMPLE`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-EXAMPLE"); // Replace with your actual Google Analytics ID
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <div className="flex flex-col min-h-screen bg-black">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/a-propos" element={<About />} />
                  <Route path="/destinations" element={<Destinations />} />
                  <Route path="/destinations/:id" element={<DestinationDetail />} />
                  <Route path="/offres" element={<Offers />} />
                  <Route path="/offres/:id" element={<OfferDetail />} />
                  <Route path="/avis" element={<Testimonials />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/reservation" element={<Reservation />} />
                  <Route path="/conditions-generales" element={<ConditionsGenerales />} />
                  <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/mentions-legales" element={<MentionsLegales />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <WhatsAppWidget />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

// Add window.dataLayer type
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default App;
