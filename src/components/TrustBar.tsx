import { Award, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";

// বাংলা: Clinic-এর বিশ্বাসযোগ্যতার বিষয়গুলো
const trustItems = [
  {
    icon: ShieldCheck,
    title: "Thoughtful Care",
    description: "Personalized treatment approach",
  },
  {
    icon: Sparkles,
    title: "Modern Dentistry",
    description: "Technology-led dental care",
  },
  {
    icon: HeartHandshake,
    title: "Patient First",
    description: "Comfort at every visit",
  },
  {
    icon: Award,
    title: "Quality Focused",
    description: "Care built around your needs",
  },
];

export default function TrustBar() {
  return (
    <section id="trust" className="relative z-20 bg-white py-9">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-7 md:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-teal">
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-navy">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}