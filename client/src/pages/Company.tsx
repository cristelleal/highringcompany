import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import compagnyImg from "../img/HighRing-recrutement-emploi-Bordeaux-Paris-team-laptop.webp";

declare global {
  interface Window {
    hbspt: any;
  }
}

const Company = () => {
  const formRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "26274332",
          formId: "333d3a90-fea7-4cff-8d31-28b1b79b7538",
          target: "#hubspot-form",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
                  Optimisez votre recrutement
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Gagnez du temps et trouvez le profil idéal grâce à notre expertise. Complétez le formulaire ci-dessous pour une offre sur-mesure.
              </p>
              <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <Button size="lg" onClick={scrollToForm}>
                  Compléter le formulaire
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={compagnyImg}
                alt="Team travaillant sur l'ordinateur"
                className="w-full rounded-3xl shadow-lg"
              />
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold">
              Gagnez du temps avec HighRing
            </h2>
            <p className="mt-4">
              Depuis janvier 2023, nous avons répondu à <strong>95%</strong> des besoins de recrutement en <strong>4 à 8 semaines</strong>.
              <br />
              <small>*Sondage réalisé auprès de professionnels en recrutement</small>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">Nos étapes de recrutement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Etape 1",
                description: "Complétez votre demande. Nous nous engageons à répondre en moins de 24 heures.",
              },
              {
                title: "Etape 2",
                description: "Découvrez notre méthode et affinons ensemble le profil recherché.",
              },
              {
                title: "Etape 3",
                description: "Nous vous accompagnons tout au long du processus de recrutement.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="p-6 border border-border rounded-xl bg-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="form" ref={formRef} className="py-16 bg-primary/10 dark:bg-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary dark:text-gray-900">
            Je souhaite recruter un talent
          </h2>
          <div id="hubspot-form" className="mx-auto"></div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Une question ?</h2>
          <p className="text-muted-foreground">
            Consultez notre&nbsp;
            <a href="/faq.html" className="text-muted-foreground hover:underline">
              FAQ
            </a>
            &nbsp;ou&nbsp;
            <a href="/contact" className="text-muted-foreground hover:underline">
              contactez-nous
            </a>.
          </p>
        </div>
      </section>
    </motion.main>
  );
};

export default Company;