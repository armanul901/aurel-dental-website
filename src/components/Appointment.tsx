import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { clinicInfo } from "../data/dentalData";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  // বাংলা: Form Submit হলে এই Function কাজ করবে
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // বাংলা: আপাতত Demo Confirmation দেখানো হচ্ছে
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="bg-[#F0F4F0] py-28">
      <div className="container-main">
        <div className="grid overflow-hidden bg-white lg:grid-cols-2">

          {/* বাংলা: Left Side - Contact Information */}
          <div className="relative overflow-hidden bg-navy p-8 text-white sm:p-12 lg:p-16">

            <div className="relative z-10">
              <span className="section-label !text-[#9CC7BC]">
                YOUR NEXT CHAPTER
              </span>

              <h2 className="heading-serif mt-7 text-4xl leading-tight sm:text-5xl">
                Let's make room
                <span className="italic text-[#9CC7BC]">
                  {" "}for your smile.
                </span>
              </h2>

              <p className="mt-7 max-w-[400px] text-sm leading-8 text-white/65">
                Your journey to a healthier smile starts with a
                conversation. Get in touch with our team to discuss
                your dental care needs.
              </p>

              {/* বাংলা: Contact Details */}
              <div className="mt-12 space-y-8">

                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="flex items-start gap-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 text-[#9CC7BC]">
                    <Phone size={19} />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                      Call Us
                    </p>

                    <p className="mt-2 text-sm">
                      {clinicInfo.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="flex items-start gap-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 text-[#9CC7BC]">
                    <Mail size={19} />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                      Email Us
                    </p>

                    <p className="mt-2 text-sm">
                      {clinicInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 text-[#9CC7BC]">
                    <MapPin size={19} />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                      Visit Us
                    </p>

                    <p className="mt-2 text-sm">
                      {clinicInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 text-[#9CC7BC]">
                    <Clock3 size={19} />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                      Opening Hours
                    </p>

                    <p className="mt-2 text-sm">
                      Monday – Friday · 9 AM – 6 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* বাংলা: Decorative Background */}
            <div className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full border border-white/10" />
          </div>

          {/* বাংলা: Right Side - Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 lg:p-16"
          >
            <div className="mb-10">
              <span className="section-label">
                BOOK AN APPOINTMENT
              </span>

              <h3 className="heading-serif mt-5 text-3xl text-navy sm:text-4xl">
                We'd love to hear from you.
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted">
                Tell us a little about yourself and how we can help.
              </p>
            </div>

            {submitted ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <CheckCircle2
                  size={52}
                  className="text-teal"
                />

                <h3 className="heading-serif mt-6 text-3xl text-navy">
                  Thank you!
                </h3>

                <p className="mt-4 max-w-[320px] text-sm leading-7 text-muted">
                  Your demo request has been submitted successfully.
                  Please contact the clinic directly to arrange a real visit.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-xs font-bold uppercase tracking-wider text-teal underline underline-offset-4"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* বাংলা: Name ও Email */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-xs font-semibold text-navy"
                    >
                      Your Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Full name"
                      required
                      className="w-full border-b border-navy/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-teal"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-xs font-semibold text-navy"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="w-full border-b border-navy/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-teal"
                    />
                  </div>
                </div>

                {/* বাংলা: Phone ও Treatment */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-xs font-semibold text-navy"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                      required
                      className="w-full border-b border-navy/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-teal"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="treatment"
                      className="mb-3 block text-xs font-semibold text-navy"
                    >
                      Treatment *
                    </label>

                    <select
                      id="treatment"
                      name="treatment"
                      required
                      defaultValue=""
                      className="w-full border-b border-navy/20 bg-transparent py-3 text-sm text-muted outline-none focus:border-teal"
                    >
                      <option value="" disabled>
                        Select treatment
                      </option>

                      <option>Cosmetic Dentistry</option>
                      <option>Dental Implants</option>
                      <option>Teeth Whitening</option>
                      <option>Preventive Care</option>
                      <option>General Consultation</option>
                    </select>
                  </div>
                </div>

                {/* বাংলা: Preferred Date */}
                <div>
                  <label
                    htmlFor="date"
                    className="mb-3 block text-xs font-semibold text-navy"
                  >
                    Preferred Date
                  </label>

                  <div className="relative">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full border-b border-navy/20 bg-transparent py-3 pr-10 text-sm text-muted outline-none focus:border-teal"
                    />

                    <CalendarDays
                      size={18}
                      className="pointer-events-none absolute right-2 top-3 text-teal"
                    />
                  </div>
                </div>

                {/* বাংলা: Additional Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-xs font-semibold text-navy"
                  >
                    Anything We Should Know?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your dental care needs..."
                    className="w-full resize-none border-b border-navy/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-teal"
                  />
                </div>

                {/* বাংলা: Submit Button */}
                <button
                  type="submit"
                  className="button-primary w-full justify-between"
                >
                  Request an Appointment
                  <ArrowUpRight size={17} />
                </button>

                <p className="text-center text-[10px] leading-5 text-muted">
                  Demo form only. No personal information is stored
                  or sent to a server.
                </p>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}