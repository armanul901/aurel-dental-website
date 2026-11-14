import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { clinicInfo } from "../data/dentalData";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Story", href: "#about" },
  { name: "Treatments", href: "#services" },
  { name: "Our Team", href: "#doctors" },
  { name: "Book a Visit", href: "#appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-[#10282F] text-white">

      {/* বাংলা: Main Footer Content */}
      <div className="container-main py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">

          {/* বাংলা: Brand Information */}
          <div>
            <a href="#home" className="inline-flex flex-col">
              <span className="font-serif text-4xl font-semibold tracking-[5px]">
                AUREL
              </span>

              <span className="mt-1 text-[9px] font-semibold tracking-[4px] text-white/55">
                DENTAL STUDIO
              </span>
            </a>

            <p className="mt-7 max-w-[350px] text-sm leading-8 text-white/60">
              A more thoughtful approach to dentistry.
              Discover personalized dental care designed
              around your comfort and confidence.
            </p>

            {/* বাংলা: Social Media Icons */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/20 transition-colors hover:border-teal hover:bg-teal"
              >
                
              </a>
            </div>
          </div>

          {/* বাংলা: Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[2px] text-[#9CC7BC]">
              Explore
            </h3>

            <div className="mt-8 space-y-5">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.name}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* বাংলা: Contact Information */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[2px] text-[#9CC7BC]">
              Get in Touch
            </h3>

            <div className="mt-8 space-y-6">

              <a
                href={`tel:${clinicInfo.phone}`}
                className="flex items-start gap-4 text-sm text-white/65 transition-colors hover:text-white"
              >
                <Phone size={17} className="shrink-0 text-[#9CC7BC]" />
                {clinicInfo.phone}
              </a>

              <a
                href={`mailto:${clinicInfo.email}`}
                className="flex items-start gap-4 text-sm text-white/65 transition-colors hover:text-white"
              >
                <Mail size={17} className="shrink-0 text-[#9CC7BC]" />
                {clinicInfo.email}
              </a>

              <div className="flex items-start gap-4 text-sm leading-7 text-white/65">
                <MapPin size={17} className="mt-1 shrink-0 text-[#9CC7BC]" />
                {clinicInfo.address}
              </div>

            </div>

            <a
              href="#appointment"
              className="mt-9 inline-flex items-center gap-3 border-b border-[#9CC7BC] pb-2 text-xs font-bold uppercase tracking-[1.5px] text-white transition-colors hover:text-[#9CC7BC]"
            >
              Book Your Visit
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </div>

      {/* বাংলা: Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container-main flex flex-col justify-between gap-4 py-7 text-[11px] text-white/45 sm:flex-row sm:items-center">

          <p>
            © {new Date().getFullYear()} AUREL Dental Studio.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="transition-colors hover:text-white"
          >
            Back to top ↑
          </a>

        </div>
      </div>

    </footer>
  );
}