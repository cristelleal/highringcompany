import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users2,
  Briefcase,
  GraduationCap,
  Building,
  HardDrive,
  Network,
  Wrench,
  Cable,
  Droplet,
  Map,
  Factory,
  BookOpen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import brandsImg from "../img/HighRing-recrutement-metier-consulting.webp";
import brandsImg2 from "../img/HighRing-recrutement-construction-emploi.webp";
import brandsImg3 from "../img/HighRing-recrutement-emploi-Bordeaux-Paris-glass.webp";
import testimonialPic from "../img/Thomas-Langronier-portrait-HighRing_50.webp";
import testimonialPic2 from "../img/mourad-tayebi-portrait_50.webp";

const Brands = () => {
  const brandsData = [
    {
      name: "HighRing Construction",
      description:
        "Maillon indispensable du processus, l'ingénieur construction intervient dans différentes phases de travaux, de conception et réalisation d'un projet. Thomas Langronier, co-fondateur de HighRing, issu d'un cursus Ingénieur en Génie Civil à l'ESITC promo 2016, représente la marque au sein de l'entreprise.",
      intro:
        "Nous avons pris le parti de la spécialisation, pour faire la différence sur le marché du recrutement en exploitant notre expertise métier, associée à l'expérience du recrutement. Nous travaillons avec tous les acteurs du secteur du BTP : Entreprise Générale, Maîtrise d'Oeuvre, Maîtrise d'Ouvrage, Contractant Générale, Bureau d'Études, Bureau de Contrôle, etc.",
      sectors: [
        {
          name: "Bâtiments : bureaux, logements, commerces, gymnases, écoles, magasins et tous types d'infrastructures",
          icon: <Building2 size={20} />,
        },
        {
          name: "Travaux Publics : Ouvrages linéaires, ouvrages d'art, et aménagements urbains",
          icon: <Map size={20} />,
        },
      ],
      roles: [
        { name: "Génie Climatique (CVC)", icon: <Factory size={20} /> },
        { name: "Génie Électrique (CFO, Cfa, BT, HT)", icon: <Cable size={20} /> },
        { name: "Génie Civil (Gros Œuvre, Travaux Publics)", icon: <Building size={20} /> },
        { name: "BIM (Building Information Modeling)", icon: <Network size={20} /> },
        { name: "Structures métalliques, bois, mixtes", icon: <HardDrive size={20} /> },
        { name: "Génie Hydraulique", icon: <Droplet size={20} /> },
        { name: "VRD (Voiries Réseaux Divers)", icon: <Map size={20} /> },
        { name: "Géotechnique / Fondations spéciales", icon: <Map size={20} /> },
        { name: "Sites et sols pollués", icon: <Factory size={20} /> },
        { name: "Déconstruction / désamiantage", icon: <Wrench size={20} /> },
        { name: "Ingénieur Études", icon: <BookOpen size={20} /> },
        { name: "Directeur de Bureau d'Études", icon: <GraduationCap size={20} /> },
        { name: "Ingénieur Travaux", icon: <HardDrive size={20} /> },
        { name: "Directeur Travaux", icon: <Users2 size={20} /> },
        { name: "Chef de Projet", icon: <Users2 size={20} /> },
        { name: "Responsable d'Activité", icon: <Briefcase size={20} /> },
      ],
      image: brandsImg2,
      testimonial: {
        text: "Lors de mes premières expériences en tant qu'Ingénieur Travaux, j'ai eu la chance de participer à la réhabilitation du Conservatoire du XIIIème arrondissement de Paris avec Pradeau Morin (Groupe Eiffage Construction). J'ai pu également participer à 2 chantiers en neuf, cette fois-ci chez Bouygues Construction, sur la construction de logements sociaux, et la construction d'un hôtel. J'ai ensuite tourné une nouvelle page et j'ai évolué pendant 6 ans dans le conseil opérationnel en ingénierie, spécialisé dans le BTP, chez Bee Engineering et OneSide Consulting. Après avoir rencontré plus de 2700 candidats ingénieurs, et 2500 prospects et clients, je pense avoir les armes aujourd'hui pour être crédible vis-à-vis de nos partenaires et nos talents.",
        author: "Thomas Langronier, ambassadeur de HighRing Construction",
        image: testimonialPic,
      },
    },
    {
      name: "HighRing Consulting",
      description:
        "Nos partenaires n'ont pas toujours la possibilité ni la volonté de s'engager sur un CDI ou un CDD, mais ont seulement besoin d'une intervention ponctuelle sur leur projet. Nos talents pensent leur carrière différemment et veulent plus d'indépendance en se mettant à leur compte, mais n'ont pas le temps de démarcher une nouvelle clientèle.",
      intro:
        "En transverse avec toutes nos marques, HighRing possède un réseau d'indépendants qui peuvent intervenir dans de courts délais. Nous faisons le lien.",
      sectors: [
        { name: "Construction", icon: <Building size={20} /> },
        { name: "Sales", icon: <Briefcase size={20} /> },
      ],
      roles: [
        { name: "Ingénieur Travaux expérimenté", icon: <HardDrive size={20} /> },
        { name: "Ingénieur Études expérimenté", icon: <BookOpen size={20} /> },
        { name: "Économiste de la Construction", icon: <Building2 size={20} /> },
        { name: "Responsable d'Activité", icon: <Briefcase size={20} /> },
        { name: "Expert en Développement Commercial", icon: <Users2 size={20} /> },
        { name: "Expert en Stratégie RH", icon: <Users2 size={20} /> },
      ],
      image: brandsImg,
    },
    {
      name: "HighRing Sales",
      description:
        "Les ingénieurs d'affaires accompagnent les entreprises dans leur développement commercial et stratégique, en identifiant de nouvelles opportunités de croissance.",
      sectors: [
        { name: "Entreprises de services du numérique (ESN, ex-SSII)", icon: <Network size={20} /> },
        { name: "Grandes industries", icon: <Factory size={20} /> },
      ],
      roles: [
        { name: "Ingénieur d'Affaires", icon: <Briefcase size={20} /> },
        { name: "Business Manager", icon: <Users2 size={20} /> },
        { name: "Business Developer", icon: <Users2 size={20} /> },
        { name: "Responsable de Département", icon: <Users2 size={20} /> },
        { name: "Responsable d'Agence", icon: <Building2 size={20} /> },
      ],
      image: brandsImg3,
      testimonial: {
        text: "Après cinq années d'activité, j'ai atteint les objectifs que je m'étais fixés : la gestion d'un centre de profits de plusieurs millions d'euros, le recrutement, la formation et le succès de près d'une dizaine de commerciaux.",
        author: "Mourad Tayebi, ambassadeur de HighRing Sales",
        image: testimonialPic2,
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <Tabs defaultValue={brandsData[0].name} className="w-full">
          <TabsList className="flex justify-center mb-12 space-x-4">
            {brandsData.map((brand) => (
              <TabsTrigger
                key={brand.name}
                value={brand.name}
              >
                {brand.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {brandsData.map((brand) => (
            <TabsContent key={brand.name} value={brand.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="text-center max-w-3xl mx-auto space-y-6">
                  <h1 className="text-4xl font-bold tracking-tight">{brand.name}</h1>
                  <p className="text-muted-foreground leading-relaxed">
                    {brand.description}
                  </p>
                  {brand.intro && (
                    <p className="text-muted-foreground leading-relaxed">{brand.intro}</p>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2 mx-auto"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="rounded-2xl duration-300"
                  />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="dark:border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building2 className="h-6 w-6" />
                        Secteurs d'activité
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {brand.sectors.map((sector, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 group"
                          >
                            <span className="text-muted-foreground group-hover:text-primary transition-colors">
                              {sector.icon}
                            </span>
                            <span className="text-muted-foreground group-hover:text-primary transition-colors">
                              {sector.name}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="dark:border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users2 className="h-6 w-6" />
                        Métiers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {brand.roles.map((role, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 group"
                          >
                            <span className="text-muted-foreground group-hover:text-primary transition-colors">
                              {role.icon}
                            </span>
                            <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm">
                              {role.name}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {brand.testimonial && (
                  <Card className="max-w-3xl mx-auto dark:border-0">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          "{brand.testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <img
                            src={brand.testimonial.image}
                            alt={brand.testimonial.author}
                            className="w-16 h-16 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                          />
                          <p className="font-semibold text-primary">
                            {brand.testimonial.author}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Brands;