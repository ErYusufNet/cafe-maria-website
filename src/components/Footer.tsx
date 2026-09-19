"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const footerLinks = {
  Menu: ["Frappuccino", "Macchiato", "Kurpitsakahvi", "Nitro Cold Brew", "Flat White"],
  Kokemus: ["Tarinamme", "Galleria", "Tapahtumat"],
  Seuraa: ["Instagram", "Twitter", "TikTok", "LinkedIn"],
  Tietoa: ["Tietosuoja", "Käyttöehdot", "Työpaikat"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#FEFAE6] border-t border-[#2B231C]/5 overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="text-[12vw] md:text-[10vw] font-bold text-[#2B231C]/[0.04] uppercase whitespace-nowrap select-none"
          style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.1em" }}
        >
          CAFÉ MARIA
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Top Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <h3
                className="text-[#2B231C] text-lg font-bold tracking-[0.15em] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                CAFÉ MARIA
              </h3>
              <p className="text-[#2B231C]/40 text-xs leading-relaxed max-w-xs">
                Pieni, lämminhenkinen kahvila jossa jokainen kuppi on tehty
                sydämellä.
              </p>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-[#3E4A31] text-[0.6rem] uppercase mb-6"
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.25em",
                  }}
                >
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[#2B231C]/50 hover:text-[#2B231C] text-xs transition-colors duration-300"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#2B231C]/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-[#2B231C]/35 text-[0.6rem] uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.2em",
              }}
            >
              © 2026 Café Maria. Kaikki oikeudet pidätetään.
            </p>
            <p
              className="text-[#2B231C]/35 text-[0.6rem] uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.2em",
              }}
            >
              Tehty ♥ ja kofeiinilla
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
