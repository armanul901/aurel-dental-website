import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[760px] items-center overflow-hidden bg-navy lg:min-h-[850px]"
    >
      {/* বাংলা: Background Dental Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=2000&q=90"
          alt="Modern dental clinic interior"
          className="h-full w-full object-cover object-center"
        />

        {/* বাংলা: Image-এর উপর Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10282F]/95 via-[#10282F]/80 to-[#10282F]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10282F]/60 via-transparent to-transparent" />
      </div>

      <div className="container-main relative z-10 pb-20 pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* বাংলা: Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-[690px]"
          >
            <div className="mb-8 inline-flex items-center gap-3 border border-white/25 px-4 py-3">
              <Sparkles size={15} className="text-teal" />
              <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-white/90">
                A More Thoughtful Dental Experience
              </span>
            </div>

            <h1 className="font-serif text-[54px] leading-[1.12] tracking-[-2px] text-white sm:text-7xl lg:text-[82px]">
              A healthier smile.
              <br />
              <span className="italic text-[#9CC7BC]">
                A brighter you.
              </span>
            </h1>

            <p className="mt-8 max-w-[480px] text-[14px] leading-[1.9] text-white/75 sm:text-base">
              Discover a more personal approach to dentistry, where
              thoughtful care, modern technology, and your comfort
              come together.
            </p>

            {/* বাংলা: Primary ও Secondary Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#appointment"
                className="group inline-flex min-h-[58px] items-center gap-5 bg-white px-7 text-[11px] font-bold uppercase tracking-[1.5px] text-navy transition-colors hover:bg-[#9CC7BC]"
              >
                Book Your Visit
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="inline-flex min-h-[58px] items-center gap-3 border border-white/40 px-7 text-[11px] font-semibold uppercase tracking-[1.5px] text-white transition-colors hover:bg-white/10"
              >
                Explore Treatments
                <ArrowRight size={16} />
              </a>
            </div>

            {/* বাংলা: Trust Indicators */}
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-7">
              {[
                "Personalized Care",
                "Modern Technology",
                "Comfort First",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[11px] font-medium text-white/80"
                >
                  <Check size={14} className="text-[#9CC7BC]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* বাংলা: Right Side Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden justify-end lg:flex"
          >
            <div className="w-[260px] border border-white/25 bg-white/10 p-7 backdrop-blur-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9CC7BC] text-navy">
                <Sparkles size={20} />
              </div>

              <p className="mt-7 font-serif text-3xl text-white">
                Care that feels different.
              </p>

              <p className="mt-4 text-xs leading-7 text-white/70">
                Your comfort, confidence, and individual needs are
                at the heart of every visit.
              </p>

              <a
                href="#about"
                className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[1.5px] text-[#B5D8CD]"
              >
                Discover Our Approach
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* বাংলা: Bottom Scroll Indicator */}
        <a
          href="#trust"
          className="absolute bottom-7 right-0 hidden items-center gap-3 text-[9px] font-semibold uppercase tracking-[2px] text-white/60 lg:flex"
        >
          Scroll to explore
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}