import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ServicesPage from "@/pages/services";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import RecruitPage from "@/pages/services/recruit";
import ConsultingPage from "@/pages/services/consulting";
import SesPage from "@/pages/services/ses";
import WebPage from "@/pages/services/web";
import EducationPage from "@/pages/services/education";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/recruit" component={RecruitPage} />
      <Route path="/services/consulting" component={ConsultingPage} />
      <Route path="/services/ses" component={SesPage} />
      <Route path="/services/web" component={WebPage} />
      <Route path="/services/education" component={EducationPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
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
