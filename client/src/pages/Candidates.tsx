import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Check } from "lucide-react";

const Candidates = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-6">
                Développez votre carrière avec
                <span className="gradient-text dark:text-primary">
                  &nbsp;
                  HighRing
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Nous vous accompagnons dans votre évolution professionnelle en
                vous proposant des opportunités adaptées à vos aspirations.
              </p>
              <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <a
                  href="https://app.highring.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Accéder à la plateforme"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    Voir les offres d'emploi
                  </Button>
                </a>
                <a
                  href="https://app.highring.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Accéder à la plateforme"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Proposer ma candidature
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-bold mb-6">
                    Nos engagements candidats
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Accompagnement personnalisé",
                      "Conseil en évolution professionnelle",
                      "Suivi régulier",
                      "Préparation aux entretiens",
                      "Négociation salariale",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <Check className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Candidates;
