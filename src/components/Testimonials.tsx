import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/dentalData";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // বাংলা: আগের Review দেখানো
  const previousReview = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  // বাংলা: পরের Review দেখানো
  const nextReview = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const activeReview = testimonials[activeIndex];

  return (
    <section className="overflow-hidden bg-navy py-28">
      <div className="container-main">

        {/* বাংলা: Section Heading */}
        <div className="text-center">
          <span className="section-label !text-[#9CC7BC]">
            PATIENT EXPERIENCES
          </span>

          <h2 className="heading-serif mx-auto mt-7 max-w-[700px] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Every smile has
            <span className="italic text-[#9CC7BC]">
              {" "}a story.
            </span>
          </h2>

          <p className="mt-5 text-sm text-white/55">
            A thoughtful experience makes all the difference.
          </p>
        </div>

        {/* বাংলা: Review Content */}
        <div className="mx-auto mt-16 max-w-[850px]">

          <div className="mb-8 flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={17}
                fill="#9CC7BC"
                className="text-[#9CC7BC]"
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="text-center"
            >
              <Quote
                size={38}
                className="mx-auto mb-8 text-[#9CC7BC]"
              />

              <blockquote className="heading-serif text-2xl leading-[1.6] text-white sm:text-3xl lg:text-4xl">
                “{activeReview.review}”
              </blockquote>

              <div className="mt-10">
                <p className="text-sm font-bold tracking-wide text-white">
                  {activeReview.name}
                </p>

                <p className="mt-2 text-xs text-white/50">
                  {activeReview.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* বাংলা: Slider Navigation */}
          <div className="mt-14 flex items-center justify-center gap-7">
            <button
              onClick={previousReview}
              aria-label="Previous review"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#9CC7BC] hover:bg-[#9CC7BC] hover:text-navy"
            >
              <ArrowLeft size={19} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show review ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-8 bg-[#9CC7BC]"
                      : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              aria-label="Next review"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#9CC7BC] hover:bg-[#9CC7BC] hover:text-navy"
            >
              <ArrowRight size={19} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}