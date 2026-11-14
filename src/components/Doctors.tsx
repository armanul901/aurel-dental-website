import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { doctors } from "../data/dentalData";

export default function Doctors() {
  return (
    <section id="doctors" className="bg-[#F0F4F0] py-28">
      <div className="container-main">

        {/* বাংলা: Section Heading */}
        <div className="mx-auto mb-16 max-width:650px text-center">
          <span className="section-label">
            MEET YOUR DENTAL TEAM
          </span>

          <h2 className="heading-serif mt-7 text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
            Expertise with
            <span className="italic text-teal"> a human touch.</span>
          </h2>

          <p className="mx-auto mt-6 max-width:500px text-sm leading-7 text-muted">
            Get to know the people behind your care.
            Our team believes in thoughtful communication
            and a comfortable dental experience.
          </p>
        </div>

        {/* বাংলা: Doctor Profile Cards */}
        <div className="mx-auto grid max-width:850px gap-9 sm:grid-cols-2">
          {doctors.map((doctor, index) => (
            <motion.article
              key={doctor.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* বাংলা: Doctor Image */}
              <div className="relative h-[400px] overflow-hidden bg-white">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* বাংলা: Hover Contact Icon */}
                <a
                  href="#appointment"
                  aria-label={`Book a visit with ${doctor.name}`}
                  className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center bg-white text-navy opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-teal hover:text-white"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>

              {/* বাংলা: Doctor Information */}
              <div className="flex items-center justify-between border-b border-navy/15 py-6">
                <div>
                  <h3 className="heading-serif text-2xl text-navy">
                    {doctor.name}
                  </h3>

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[1.5px] text-teal">
                    {doctor.role}
                  </p>
                </div>

             
              </div>
            </motion.article>
          ))}
        </div>

        {/* বাংলা: Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#appointment"
            className="button-primary"
          >
            Schedule Your Consultation
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}