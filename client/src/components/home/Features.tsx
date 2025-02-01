import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";
import heroImage2 from "../../../public/img/HighRing-recrutement-emploi-Bordeaux-Paris-team-sun.webp";
import heroImage3 from "../../../public/img/HighRing-recrutement-emploi-Bordeaux-Paris-carte-2.webp";

const features = [
  {
    title: "Solutions sur-mesure pour les entreprises",
    description: "Nous accompagnons nos partenaires dans le staffing de leurs équipes. A l'écoute, nous combinons leurs attentes avec les compétences et les qualités humaines de LA bonne personne.",
    image: heroImage2,
    items: [
      "Accompagnement par un de nos experts métiers",
      "Bénéfice du réseau de toute notre équipe",
      "Suivi personnalisé en couplant nos méthodes avec les vôtres",
      "Fonctionnement au succès"
    ]
  },
  {
    title: "Opportunités motivantes pour les candidats",
    description: "Nous proposons le bon job au bon moment à nos talents. Sur la base de leurs souhaits, nous calibrons notre recherche pour trouver LE poste idéal.",
    image: heroImage3,
    items: [
      "Accompagnement par l'ensemble de notre équipe",
      "Conseil en choix de carrière",
      "Préparation au rendez-vous avec l'entreprise",
      "La cooptation est primée avec l'Avantage HR"
    ]
  }
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse mt-20" : ""
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl" />
              <img
                src={feature.image}
                alt={feature.title}
                className="relative rounded-3xl shadow-xl hover-scale"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {feature.description}
              </p>
              <ul className="space-y-4">
                {feature.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
