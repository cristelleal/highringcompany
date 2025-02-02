import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle } from "lucide-react";

const brands = [
  {
    title: "CONSTRUCTION",
    subtitle: "Pour tous les acteurs du domaine (EG, MOE, MOA, CG, BET, etc.)",
    features: [
      "Formalisation des souhaits du candidat",
      "Définition du profil type pour le client",
      "Recrutement en direct dans l'entreprise",
    ],
  },
  {
    title: "SALES",
    subtitle: "Pour les sociétés de conseil en ingénierie (ESN, anciennes SSI)",
    features: [
      "Formalisation des souhaits du candidat",
      "Définition du profil type pour le client",
      "Recrutement en direct dans l'entreprise",
    ],
  },
  {
    title: "CONSULTING",
    subtitle: "Pour travailler avec notre réseau de freelances multi-sectoriel",
    features: [
      "Formalisation des souhaits du freelance",
      "Elaboration du cahier des charges client",
      "Début de la mission au sein de l'entreprise",
    ],
  },
];

const Brands = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Nos marques</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            HighRing se spécialise. Votre secteur ? Notre expertise ! Maintenant
            spécialisé en ingénierie de la construction, en développement
            commercial et doté d'un réseau de freelance multi-sectoriel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full hover-scale">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2">{brand.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {brand.subtitle}
                  </p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {brand.features.map((feature, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm">
                     <CheckCircle className="h-4 w-4 text-primary" /> 
                     {feature}
                   </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-auto" variant="outline">
                    Choisir cette marque
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
