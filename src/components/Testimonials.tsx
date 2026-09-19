"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    id: 1,
    name: "Anna Korhonen",
    role: "Ravintola-arvostelija, ennakkomaistajaiset",
    quote:
      "Kävin Café Marian ennakkomaistajaisissa ja yllätyin täysin — tämä ei tule olemaan vain kahvila, vaan kokemus. Jokainen kulaus oli mestarikurssi tarkkuudessa ja intohimossa.",
  },
  {
    id: 2,
    name: "Mikael Lindqvist",
    role: "Luova johtaja, Lahti",
    quote:
      "Pääsin kurkistamaan tilaan ennen avajaisia — tunnelma, tuoksu, rituaali. Tässä näkyy mitä tapahtuu kun muotoilu kohtaa käsityöläistaidon. Lahti tarvitsi tämän.",
  },
  {
    id: 3,
    name: "Elina Virtanen",
    role: "Ruokabloggaaja",
    quote:
      "Olen maistanut kahvia kymmenissä maissa. Café Marian oma sekoitus, jota pääsin maistamaan ennakkoon, on ainoa joka sai minut pysähtymään ja sulkemaan silmäni.",
  },
  {
    id: 4,
    name: "Sofia Laine",
    role: "Sisustussuunnittelija",
    quote:
      "Kuin astuisi elävään tunnelmatauluun. Tila, kupit, kaato — kaikki on viimeistelty täydellisyyteen asti jo ennen avajaisia. Lahti saa jotain todella erityistä.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5 text-[#3E4A31]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FEFAE6] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-[1px] bg-[#937C65]" />
            <span
              className="text-[#796A54] text-[0.65rem] uppercase"
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3em" }}
            >
              Ennakkomaistajaisista
            </span>
            <span className="block w-8 h-[1px] bg-[#937C65]" />
          </div>
          <h2
            className="text-3xl md:text-4xl text-[#2B231C] font-semibold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ensivaikutelmia ennen avajaisia
          </h2>
          <p className="text-[#2B231C]/60 text-sm max-w-xl mx-auto">
            Kutsuimme muutamia lahtelaisia tutustumaan Café Mariaan jo
            ennen virallisia avajaisia. Näin he kuvailivat kokemustaan.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={staggerItem}
              className="bg-white/70 backdrop-blur-md border border-[#2B231C]/8 rounded-2xl p-8 shadow-sm"
            >
              <Stars />
              <p
                className="text-[#2B231C]/85 text-lg md:text-xl leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-[#2B231C]/10 pt-5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[0.7rem] font-semibold bg-[#3E4A31] text-[#FEFAE6]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-[#2B231C] text-sm font-medium">{t.name}</p>
                  <p className="text-[#2B231C]/50 text-[0.7rem] uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
