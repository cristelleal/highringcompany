import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Une qualité de service optimale, un accompagnement sur mesure ainsi qu'un sens de l'écoute sans égal ! Je remercie l'équipe pour son travail et la compréhension de mon projet professionnel qui me permet aujourd'hui de faire le métier que j'aime. Foncez, les yeux fermés !",
    author: "Valentin Thebaud",
    role: "Candidat",
  },
  {
    quote:
      "L'équipe HighRing allie ambition et empathie envers ses clients, talents et collaborateurs. Suite à une journée immersive au sein de l'entreprise, j'ai été très agréablement surpris par la méthodologie de travail et l'énergie humaine qui anime cette entreprise.",
    author: "Amine Zeffane",
    role: "Candidat",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-3xl font-semibold mb-10 text-foreground">
          Témoignages
        </h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-border rounded-xl p-6 bg-card"
            >
              <div className="flex gap-1 mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-base text-muted-foreground leading-relaxed mb-4">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-sm font-medium text-foreground">
                {testimonial.author}, <span className="text-muted-foreground">{testimonial.role}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
