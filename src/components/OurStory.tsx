"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import PillButton from "./PillButton";

const stats = [
  { value: "100%", label: "Luomutuore" },
  { value: "24h", label: "Tuore paahto" },
  { value: "2026", label: "Avaamme Lahdessa" },
];

export default function OurStory() {
  return (
    <section id="story" className="relative py-20 md:py-28 bg-[#FEFAE6] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[1px] bg-[#937C65]" />
              <span
                className="text-[#796A54] text-[0.65rem] uppercase"
                style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3em" }}
              >
                Uusi kahvila Lahteen
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl text-[#2B231C] font-semibold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tarinamme:
            </h2>
          </div>
          <PillButton href="#about" variant="dark">
            Lue lisää
          </PillButton>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="lg:col-span-7 relative aspect-[5/4] lg:aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/images/coffee/about_brand.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </motion.div>

          {/* Glass Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="lg:col-span-6 lg:-ml-16 relative z-10 bg-[#FEFAE6]/95 backdrop-blur-xl border border-[#2B231C]/10 text-[#2B231C] p-8 md:p-10 rounded-2xl shadow-2xl mt-[-2.5rem] mx-4 lg:mx-0"
          >
            <h3
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kahvitarinamme
            </h3>
            <p className="text-[#2B231C]/65 text-sm leading-relaxed mb-8">
              Café Maria avaa ovensa pian Lahden sydämessä. Rakennamme
              kahvilaa intohimolla ja käytämme vain parhaita
              raaka-aineita varmistaaksemme tuoreimman ja rikkaimman
              maun jokaisessa kupissa. Eettisesti hankituista pavuista
              huolella paahdettuun kahviin — tuomme lahtelaisille maun
              joka herättää aistit ja inspiroi aamuja.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-[#2B231C]/10 pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-xl md:text-2xl font-semibold text-[#3E4A31]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[0.6rem] uppercase tracking-wider text-[#2B231C]/50 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative milk-splash divider */}
      <svg
        className="absolute -bottom-1 left-0 w-full text-[#2B231C]/[0.04]"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,72 1440,16 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
