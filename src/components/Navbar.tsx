import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
{ name: "Home", href: "#home" },
{ name: "Our Story", href: "#about" },
{ name: "Treatments", href: "#services" },
{ name: "Our Team", href: "#doctors" },
];

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <header className="absolute left-0 top-0 z-50 w-full"> <div className="container-main"> <nav className="flex h-24 items-center justify-between border-b border-white/20">

```
      {/* Brand Logo */}
      <a href="#home" className="group flex flex-col leading-none">
        <span className="font-serif text-[32px] font-semibold tracking-[5px] !text-white">
          AUREL
        </span>
        <span className="mt-1 text-[9px] font-semibold tracking-[4px] !text-white/75">
          DENTAL STUDIO
        </span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-9 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{ color: "#FFFFFF" }}
            className="text-[12px] font-medium transition-colors hover:!text-[#9CC7BC]"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Appointment Button */}
      <a
        href="#appointment"
        className="hidden items-center gap-3 bg-white px-5 py-4 text-[11px] font-bold uppercase tracking-[1px] !text-[#142D35] transition-colors hover:bg-teal hover:!text-white lg:inline-flex"
      >
        Book a Visit
        <ArrowUpRight size={15} />
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        className="flex h-11 w-11 items-center justify-center border border-white/30 !text-white lg:hidden"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>

    {/* Mobile Navigation Menu */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="absolute left-0 top-24 w-full border-t border-white/10 bg-navy px-6 py-7 shadow-xl lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-4 !text-white/90"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#appointment"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-between bg-white px-5 py-4 text-xs font-bold uppercase tracking-wider !text-[#142D35]"
          >
            Book an Appointment
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</header>


);
}
