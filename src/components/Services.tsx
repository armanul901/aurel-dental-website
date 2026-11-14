import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { services } from "../data/dentalData";

export default function Services() {
  return (
    <section id="services" className="bg-[#F8F8F4] py-28">
      <div className="container-main">

        {/* বাংলা: Section Heading */}
        <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <span className="section-label">
              OUR EXPERTISE
            </span>

            <h2 className="heading-serif mt-6 max-w-[650px] text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
              Complete care.
              <br />
              <span className="italic text-teal">
                Beautifully considered.
              </span>
            </h2>
          </div>

          <p className="max-w-[360px] text-sm leading-7 text-muted">
            From preventive visits to smile transformations,
            discover dental care designed around your individual needs.
          </p>
        </div>

        {/* বাংলা: Service Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group overflow-hidden bg-white"
            >
              {/* বাংলা: Service Image */}
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />

                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/20 text-xs font-semibold text-white backdrop-blur-sm">
                  {service.number}
                </span>

                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy transition-colors group-hover:bg-teal group-hover:text-white">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* বাংলা: Service Information */}
              <div className="p-6">
                <h3 className="heading-serif text-[23px] text-navy">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-[13px] leading-6 text-muted">
                  {service.description}
                </p>

                <a
                  href="#appointment"
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-teal transition-colors hover:text-navy"
                >
                  Explore Treatment
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* বাংলা: Bottom Call to Action */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-navy/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <Sparkles size={18} className="text-teal" />
            <p className="text-sm text-muted">
              Not sure which treatment is right for you?
            </p>
          </div>

          <a
            href="#appointment"
            className="button-primary"
          >
            Talk to Our Team
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}