import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: { region: string; portalId: string; formId: string; target: string }) => void;
      };
    };
  }
}
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "../components/ui/button";

const Contact = () => {
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
          formId: "03004f45-0475-4fb4-b800-fd43b7443e89",
          target: "#hubspot-form",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className="bg-primary/5 dark:bg-background/90 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contactez-nous
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Parlons de vos besoins en recrutement. Notre équipe vous répondra dans les plus brefs délais.
          </p>
          <div>
            <Button
              size="lg"
              variant="outline"
              onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Remplir le formulaire
            </Button>
          </div>
        </div>
      </section>

      <section
        ref={formRef}
        className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Parlons de votre projet</h2>
            <p className="text-lg text-muted-foreground">
              Trouver le bon profil cadre n’a jamais été aussi simple.  
              Contactez l'agence HighRing la plus proche pour commencer.
            </p>
          </div>

          <div className="p-6 border border-border rounded-xl bg-card space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MapPin size={20} /> HighRing Paris
            </h3>
            <p className="text-muted-foreground">1-7 Cours Valmy, 92800 Puteaux</p>
            <div className="flex flex-col space-y-2 mt-2">
              <a href="tel:+33646375008" className="text-primary flex items-center gap-2">
                <Phone size={16} /> +33 6 46 37 50 08
              </a>
              <a href="mailto:m.tayebi@highring.fr" className="text-primary flex items-center gap-2">
                <Mail size={16} /> m.tayebi@highring.fr
              </a>
            </div>
          </div>

          <div className="p-6 border border-border rounded-xl bg-card space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MapPin size={20} /> HighRing Bordeaux
            </h3>
            <p className="text-muted-foreground">51 Quai Lawton, 33300 Bordeaux</p>
            <div className="flex flex-col space-y-2 mt-2">
              <a href="tel:+33687631997" className="text-primary flex items-center gap-2">
                <Phone size={16} /> +33 6 87 63 19 97
              </a>
              <a href="mailto:t.langronier@highring.fr" className="text-primary flex items-center gap-2">
                <Mail size={16} /> t.langronier@highring.fr
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-background dark:bg-background rounded-xl p-6 shadow-md border border-border"
        >
          <h2 className="text-2xl font-bold mb-4">
            Formulaire de contact
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Remplissez ce formulaire et nos recruteurs vous recontacteront rapidement.
          </p>
          <div id="hubspot-form" className="mx-auto"></div>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Contact;