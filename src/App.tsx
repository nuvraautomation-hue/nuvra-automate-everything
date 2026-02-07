import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import IsNuvraForYou from "./pages/IsNuvraForYou";
import NotFound from "./pages/NotFound";
import GhlFormPopup from "./components/GhlFormPopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/pour-vous" element={<IsNuvraForYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        <GhlFormPopup />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

