import React from "react";
import { motion } from "framer-motion";
import { Handshake, MapPin, Rocket, Medal } from "lucide-react";
import foundersImage from "../img/HighRing-recrutement-Bordeaux-Paris-cofondateurs.webp";

const OurStory = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6">
          Notre histoire
            </h1>
            <p className="leading-relaxed text-muted-foreground">
              HighRing, c’est l’histoire de <strong>Thomas & Mourad</strong>, deux experts avec plus de 11 ans d’expérience dans le conseil en ingénierie.  
              Une vision commune, des valeurs partagées, et l’envie d’innover.
            </p>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Mourad Tayebi & Thomas Langronier
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={foundersImage}
              alt="Les cofondateurs de HighRing"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold">Notre valeur ajoutée</h2>
          <p className="text-lg leading-relaxed mt-6 text-muted-foreground">
            Depuis 2022, HighRing révolutionne le recrutement de cadres en combinant <strong>rapidité</strong> et <strong>innovation</strong>.  
            Nous guidons nos Talents dans leur évolution et accompagnons nos Partenaires bien au-delà du simple CV.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 text-primary">
            <p className="text-sm text-muted-foreground">
              Nous vous accueillons dans nos bureaux à <strong>Paris</strong> et <strong>Bordeaux</strong>.
            </p>
          </div>
        </motion.div>

        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold mb-12">Notre approche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 text-center space-y-4 bg-primary/5 rounded-lg dark:bg-background dark:border border-border"
            >
              <Medal size={40} className="mx-auto text-primary" />
              <h3 className="text-xl font-bold">Convaincre</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Thomas et Mourad possèdent une expertise en <strong>négociation</strong> et en argumentation, acquise par des années d’expérience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 text-center space-y-4 bg-primary/5 rounded-lg dark:bg-background dark:border border-border"
            >
              <Rocket size={40} className="mx-auto text-primary" />
              <h3 className="text-xl font-bold">Innover</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Un mix unique entre <strong>terrain</strong> et <strong>plateforme digitale</strong> pour un recrutement fluide et efficace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 text-center space-y-4 bg-primary/5 rounded-lg dark:bg-background dark:border border-border"
            >
              <Handshake size={40} className="mx-auto text-primary" />
              <h3 className="text-xl font-bold">Unir</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Un <strong>matching intelligent</strong> entre clients et candidats, basé sur des critères précis.
              </p>
            </motion.div>
            
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory;