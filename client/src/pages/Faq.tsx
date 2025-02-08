import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <Card className="border border-border rounded-lg transition-all">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${question}`}
      >
        <span className="font-medium">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <CardContent className="px-5 pb-4 pt-0">
              <p className="leading-relaxed text-muted-foreground">{answer}</p>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

const FAQPage = () => {
  const faqItems = [
    {
      question:
        "Est-ce que le service HighRing est payant pour les candidats ?",
      answer:
        "Le candidat n'aura aucun frais à payer. Nos services sont 100% gratuits pour les candidats !",
    },
    {
      question:
        "En tant qu'entreprise, de quelle garantie puis-je bénéficier si mon recrutement ne fonctionne pas ?",
      answer:
        "HighRing garantit pendant un mois la fiabilité d'un recrutement. Si le.a candidat.e quitte l’entreprise, nous nous engageons à le.a remplacer.",
    },
    {
      question:
        "Me tiendra-t-on informé si ma candidature n'est pas retenue par l'entreprise ?",
      answer:
        "Nous informons systématiquement nos candidats du statut de leur candidature, qu'il soit positif ou négatif.",
    },
    {
      question:
        "En tant qu'entreprise, pourquoi choisir de travailler avec HighRing ?",
      answer:
        "Nous fonctionnons au 'success fee' : les honoraires sont dus uniquement si le recrutement est réussi et validé.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 font-montserrat min-h-screen"
    >
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">FAQ</h2>
          <p className="text-lg text-muted-foreground">
            Le recrutement chez HighRing : questions fréquentes
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-3xl mx-auto px-6 space-y-3">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            D'autres questions ?&nbsp;
            <a href="/contact" className="text-primary hover:underline">
              Contactez-nous.
            </a>
          </p>
        </div>
      </section>
    </motion.main>
  );
};

export default FAQPage;
