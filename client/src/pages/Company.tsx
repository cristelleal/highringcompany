import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import compagnyImg from "../img/HighRing-recrutement-emploi-Bordeaux-Paris-team-laptop.webp";

const Company = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 font-montserrat"
    >
      <section className="py-16 min-h-[calc(100vh-18rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-6">
                Vous recrutez ?&nbsp;
                <span className="gradient-text dark:text-primary">
                  Optimisez votre processus de recrutement
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Gagnez du temps et trouvez le profil idéal grâce à notre
                expertise. Découvrez comment HighRing peut booster votre
                recherche de talents.
              </p>
              <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <a
                  href="https://app.highring.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Accéder à la plateforme"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Découvrir notre solution
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={compagnyImg}
                alt="Équipe travaillant sur un ordinateur"
                className="w-full rounded-3xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 dark:bg-background">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            Gagnez du temps avec HighRing
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            Depuis janvier 2023, nous avons répondu à <strong>95%</strong> des
            besoins de recrutement en **4 à 8 semaines**.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            *Sondage réalisé auprès de professionnels en recrutement
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Nos étapes de recrutement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prise de contact",
                description:
                  "Complétez votre demande et échangez avec un expert recrutement en moins de 24h.",
                icon: (
                  <MessageSquare size={40} className="text-yellow-500/50 mx-auto" />
                ),
              },
              {
                title: "Définition du besoin",
                description:
                  "Nous affinons ensemble le profil idéal et lançons la recherche des meilleurs talents.",
                icon: <FileText size={40} className="text-yellow-500/50 mx-auto" />,
              },
              {
                title: "Recrutement efficace",
                description:
                  "Nous vous accompagnons tout au long du processus : entretiens, sélection et finalisation.",
                icon: <Target size={40} className="text-yellow-500/50 mx-auto" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="p-6 text-center space-y-4 bg-primary/5 rounded-lg dark:bg-background dark:border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {step.icon}
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Une question ?
          </h2>
          <p className="text-muted-foreground">
            Consultez notre&nbsp;
            <a href="/faq" className="text-muted-foreground hover:underline">
              FAQ
            </a>
            &nbsp;ou&nbsp;
            <a
              href="/contact"
              className="text-muted-foreground hover:underline"
            >
              contactez-nous
            </a>
            .
          </p>
        </div>
      </section>
    </motion.main>
  );
};

export default Company;
