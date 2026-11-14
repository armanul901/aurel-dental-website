import { motion } from "motion/react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

const values = [
  "Personalized treatment plans",
  "Modern dental technology",
  "A welcoming, comfortable environment",
  "Clear and thoughtful communication",
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-28">
      <div className="container-main">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* বাংলা: Left Side - Clinic Images */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[500px] overflow-hidden sm:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1000&q=85"
                alt="Modern dental treatment environment"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* বাংলা: Floating Experience Card */}
            <div className="absolute -bottom-8 right-0 max-w-[250px] bg-navy p-7 text-white sm:-right-7">
              <Sparkles size={24} className="text-[#9CC7BC]" />

              <p className="heading-serif mt-5 text-3xl">
                Care, with intention.
              </p>

              <p className="mt-3 text-xs leading-6 text-white/70">
                A thoughtful approach to every smile and every visit.
              </p>
            </div>

            {/* বাংলা: Decorative Shape */}
            <div className="absolute -left-5 -top-5 -z-0 h-28 w-28 border border-teal/30" />
          </motion.div>

          {/* বাংলা: Right Side - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-8 lg:pt-0"
          >
            <span className="section-label">
              THE AUREL APPROACH
            </span>

            <h2 className="heading-serif mt-7 text-4xl leading-[1.2] text-navy sm:text-5xl lg:text-[58px]">
              Dentistry that puts
              <span className="italic text-teal">
                {" "}you first.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-muted">
              We believe great dental care begins with listening.
              Understanding your concerns, respecting your comfort,
              and creating a care experience that feels personal.
            </p>

            <p className="mt-4 text-sm leading-8 text-muted">
              At AUREL Dental Studio, our approach combines
              thoughtful attention, modern techniques, and a
              commitment to helping every patient feel informed
              and confident.
            </p>

            {/* বাংলা: Clinic-এর মূল বৈশিষ্ট্য */}
            <div className="mt-8 space-y-5">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-teal">
                    <Check size={15} />
                  </span>

                  <span className="text-sm font-medium text-navy">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#doctors"
              className="mt-10 inline-flex items-center gap-4 border-b border-teal pb-3 text-[11px] font-bold uppercase tracking-[1.5px] text-navy transition-colors hover:text-teal"
            >
              Meet Our Team
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}