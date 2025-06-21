import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import LinkTree from "./pages/LinkTree";
import LongDistanceFreight from "./pages/services/LongDistanceFreight";
import LocalRegional from "./pages/services/LocalRegional";
import SpecializedCargo from "./pages/services/SpecializedCargo";
import EmergencyTransport from "./pages/services/EmergencyTransport";
import SafetyStandards from "./pages/company/SafetyStandards";
import Careers from "./pages/company/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/links" element={<LinkTree />} />
          <Route
            path="/services/long-distance-freight"
            element={<LongDistanceFreight />}
          />
          <Route path="/services/local-regional" element={<LocalRegional />} />
          <Route
            path="/services/specialized-cargo"
            element={<SpecializedCargo />}
          />
          <Route
            path="/services/emergency-transport"
            element={<EmergencyTransport />}
          />
          <Route
            path="/company/safety-standards"
            element={<SafetyStandards />}
          />
          <Route path="/company/careers" element={<Careers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
