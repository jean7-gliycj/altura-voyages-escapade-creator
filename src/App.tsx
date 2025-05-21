
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Loading component
const Loading = () => (
  <div className="w-full h-screen flex items-center justify-center bg-black">
    <div className="text-altura text-2xl">Chargement...</div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
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
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-black">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/destinations" element={<Destinations />} />
                  <Route path="/a-propos" element={<About />} />
                  <Route path="/offres" element={<Offers />} />
                  <Route path="/reservation" element={<Reservation />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/avis" element={<Testimonials />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <WhatsAppWidget />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Add window.dataLayer type
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default App;
