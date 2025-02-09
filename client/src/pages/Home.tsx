import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Brands from "../components/home/Brand";
import Testimonials from "../components/home/Testimonials";
import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Features />
      <Brands />
      <Testimonials />
      
      <section className="py-20 bg-primary/5 dark:bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Nous rejoindre</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vous souhaitez nous rencontrer afin d'échanger avec nos équipes ?
            </p>
            <Button size="lg" className="hover-scale">
              Contactez-nous
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Réponse (toujours) en moins d'une heure !
            </p>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
