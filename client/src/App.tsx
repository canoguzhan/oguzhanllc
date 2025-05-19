import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import Careers from "@/pages/careers";
import FreightShipping from "@/pages/services/freight-shipping";
import WarehouseManagement from "@/pages/services/warehouse-management";
import SupplyChain from "@/pages/services/supply-chain";
import CustomsClearance from "@/pages/services/customs-clearance";
import LastMileDelivery from "@/pages/services/last-mile-delivery";
import LogisticsConsulting from "@/pages/services/logistics-consulting";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/careers" component={Careers} />
          <Route path="/services/freight-shipping" component={FreightShipping} />
          <Route path="/services/warehouse-management" component={WarehouseManagement} />
          <Route path="/services/supply-chain" component={SupplyChain} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
