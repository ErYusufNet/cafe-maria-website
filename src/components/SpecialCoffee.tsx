"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import PillButton from "./PillButton";

const photos = [
  "/images/coffee/gallery_latte.jpg",
  "/images/coffee/gallery_macchiato.jpg",
  "/images/coffee/gallery_nitro.jpg",
  "/images/coffee/gallery_hotcup.jpg",
  "/images/coffee/gallery_americano.jpg",
];

export default function SpecialCoffee() {
  return (
    <section id="special" className="relative py-16 md:py-24 bg-[#FEFAE6]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-[#F5E2D1] rounded-3xl p-6 md:p-10 border border-[#2B231C]/[0.06]"
        >
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[1px] bg-[#937C65]" />
                <span
                  className="text-[#796A54] text-[0.65rem] uppercase"
                  style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3em" }}
                >
                  Käsintehtyä joka kupissa
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl text-[#2B231C] font-semibold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Erikoiskahvimme
              </h2>
            </div>
            <PillButton href="#menu" variant="dark">
              Tutustu menuun
            </PillButton>
          </div>

          <div className="flex rounded-2xl overflow-hidden h-[280px] md:h-[420px]">
            {photos.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative flex-1 overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
