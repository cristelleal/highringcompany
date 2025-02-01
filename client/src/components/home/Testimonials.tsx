import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Une qualité de service optimale, un accompagnement sur mesure ainsi qu'un sens de l'écoute sans égal ! Je remercie l'équipe pour son travail et la compréhension de mon projet professionnel qui me permet aujourd'hui de faire le métier que j'aime. Foncez, les yeux fermés !",
    author: "Valentin Thebaud",
    role: "Candidat"
  },
  {
    quote: "L'équipe HighRing allie ambition et empathie envers ses clients, talents et collaborateurs. Suite à une journée immersive au sein de l'entreprise, j'ai été très agréablement surpris par la méthodologie de travail et l'énergie humaine qui anime cette entreprise.",
    author: "Amine Zeffane",
    role: "Candidat"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
