import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactLenis from "@studio-freight/react-lenis";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Smooth Scroll Wrapper */}
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          <Toaster />
          <Sonner />
          
          {/* Animated Glassmorphism Background */}
          <div className="cinematic-bg">
            <div className="glass-shape glass-shape-1" />
            <div className="glass-shape glass-shape-2" />
            <div className="glass-shape glass-shape-3" />
          </div>
          
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ReactLenis>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;