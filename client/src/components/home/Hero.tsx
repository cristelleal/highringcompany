import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import heroImage from "../../img/hero-logo.png";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Une union professionnelle
              <span className="gradient-text"> sur-mesure</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Passez au futur du recrutement : faites comme nos talents et partenaires, 
              testez avec succès la méthodologie HighRing.
              <br /><br />
              Nous donnons notre maximum dans la logique de notre triptyque : 
              convaincre, innover, unir.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://app.highring.fr/" target="_blank" rel="noreferrer" >
                <Button size="lg" className="hover-scale">
                  Accéder à la plateforme
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl" />
            <img
              src={heroImage}
              alt="HighRing Recrutement"
              className="relative rounded-3xl hover-scale p-4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
