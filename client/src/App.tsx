import React from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../src/lib/QueryClient";
import { Toaster } from "../src/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "../src/components/theme-provider";
import NotFound from "../src/pages/not-found";
import Home from "../src/pages/Home";
import Candidates from "../src/pages/Candidates";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import Company from "./pages/Company";
import Faq from "./pages/Faq";
import Brands from "./pages/Brands";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/candidats" component={Candidates} />
        <Route path="/entreprises" component={Company} />
        <Route path="/nos-marques" component={Brands} />
        <Route path='/faq' component={Faq} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="highring-theme">
      <QueryClientProvider client={queryClient}>
        <div className="app-container">
          <Router />
          <Toaster />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
