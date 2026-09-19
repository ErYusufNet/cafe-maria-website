"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const photos = [
  { src: "/images/coffee/kahve.jpg", alt: "Jäinen kahvi roiskeineen" },
  { src: "/images/coffee/story_craft.jpg", alt: "Café Marian neonvalo" },
  { src: "/images/coffee/gallery_macchiato.jpg", alt: "Karamellimacchiaton pyörre" },
  { src: "/images/coffee/story_origin.jpg", alt: "Käsin paahdetut pavut" },
  { src: "/images/coffee/gallery_hotcup.jpg", alt: "Käsin suodatettu kahvi" },
  { src: "/images/coffee/gallery_nitro.jpg", alt: "Latte-taidetta ulkoterassilla" },
];

export default function InstagramGallery() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FEFAE6]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex items-end justify-between mb-10 flex-wrap gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-[1px] bg-[#937C65]" />
              <span
                className="text-[#796A54] text-[0.65rem] uppercase"
                style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3em" }}
              >
                Sosiaalinen media
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl text-[#2B231C] font-semibold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Seuraa meitä @cafemaria
            </h2>
          </div>
          <a
            href="#"
            className="text-[#2B231C]/60 hover:text-[#3E4A31] transition-colors text-[0.7rem] uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Instagramissa →
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {photos.map((p, i) => (
            <motion.a
              key={p.src}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${p.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-[#2B231C]/0 group-hover:bg-[#2B231C]/40 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#FEFAE6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21s-6.7-4.35-9.3-8.1C.8 10.1 1.4 6.6 4.4 5.1c2.3-1.15 4.6-.3 5.9 1.3l1.7 2.1 1.7-2.1c1.3-1.6 3.6-2.45 5.9-1.3 3 1.5 3.6 5 1.7 7.8C18.7 16.65 12 21 12 21z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
