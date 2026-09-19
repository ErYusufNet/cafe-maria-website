"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const cards = [
  {
    label: "Avajaiset",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lines: ["Avaamme keväällä 2026", "Seuraa some-kanaviamme", "tarkasta päivämäärä"],
  },
  {
    label: "Sijainti",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.3" />
      </svg>
    ),
    lines: ["Aleksanterinkatu 8", "15110 Lahti"],
  },
  {
    label: "Ota yhteyttä",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 5h16v14H4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 6l8 7 8-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lines: ["hei@cafemaria.fi", "+358 44 123 4567"],
  },
];

export default function VisitInfo() {
  return (
    <section className="relative py-20 md:py-24 bg-[#FEFAE6] border-t border-[#2B231C]/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-[1px] bg-[#3E4A31]" />
            <span
              className="text-[#3E4A31] text-[0.65rem] uppercase"
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3em" }}
            >
              Avaamme pian
            </span>
            <span className="block w-8 h-[1px] bg-[#3E4A31]" />
          </div>
          <h2
            className="text-3xl md:text-4xl text-[#2B231C] font-semibold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tavataan pian Lahdessa
          </h2>
          <p className="text-[#2B231C]/50 text-sm max-w-xl mx-auto">
            Café Maria valmistautuu avajaisiin Lahden keskustassa.
            Jätä yhteystietosi tai seuraa some-kanaviamme, niin kuulet
            avajaispäivän ensimmäisten joukossa.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {cards.map((c) => (
            <motion.div
              key={c.label}
              variants={staggerItem}
              className="bg-white/50 border border-[#2B231C]/8 rounded-2xl p-8 text-center"
            >
              <div className="w-11 h-11 mx-auto mb-5 rounded-full flex items-center justify-center bg-[#3E4A31]/10 text-[#3E4A31]">
                {c.icon}
              </div>
              <h3
                className="text-[#2B231C] text-sm uppercase tracking-[0.15em] font-semibold mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {c.label}
              </h3>
              <div className="space-y-1">
                {c.lines.map((line) => (
                  <p key={line} className="text-[#2B231C]/60 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
