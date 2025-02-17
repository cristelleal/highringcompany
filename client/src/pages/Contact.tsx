import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
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
      className="pt-32 font-montserrat"
    >
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary">Contactez-nous</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Prenez contact avec l’une de nos agences ou remplissez le formulaire ci-dessous.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 border border-border rounded-xl bg-card"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MapPin size={20} /> HighRing Paris
            </h3>
            <p className="text-muted-foreground mt-2">1-7 Cours Valmy, 92800 Puteaux</p>
            <div className="mt-4 flex gap-4">
              <a href="tel:+33646375008" className="text-primary flex items-center gap-2">
                <Phone size={16} /> +33 6 46 37 50 08
              </a>
              <a href="mailto:m.tayebi@highring.fr" className="text-primary flex items-center gap-2">
                <Mail size={16} /> m.tayebi@highring.fr
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 border border-border rounded-xl bg-card"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MapPin size={20} /> HighRing Bordeaux
            </h3>
            <p className="text-muted-foreground mt-2">51 Quai Lawton, 33300 Bordeaux</p>
            <div className="mt-4 flex gap-4">
              <a href="tel:+33687631997" className="text-primary flex items-center gap-2">
                <Phone size={16} /> +33 6 87 63 19 97
              </a>
              <a href="mailto:t.langronier@highring.fr" className="text-primary flex items-center gap-2">
                <Mail size={16} /> t.langronier@highring.fr
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="form" ref={formRef} className="py-16 bg-primary/10 dark:bg-background dark:border-t dark:border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary dark:text-white">
            Formulaire de contact
          </h2>
          <div id="hubspot-form" className="mx-auto"></div>
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;
