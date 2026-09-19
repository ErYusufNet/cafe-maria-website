"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PillButton from "./PillButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#2B231C]"
    >
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          y: imageY,
          scale: imageScale,
          objectPosition: "center 55%",
        }}
        src="/images/video/yenivideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B231C]/90 via-[#2B231C]/20 to-[#2B231C]/50" />
      <div className="absolute inset-0 bg-[#2B231C]/10" />

      {/* Floating "Explore Menu" pill, top-right of the photo itself */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-28 right-6 md:right-10 z-10"
      >
        <PillButton href="#categories" variant="light">
          Tutustu valikkoon
        </PillButton>
      </motion.div>

      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex items-end pb-24 md:items-center md:pb-0"
      >
        <div className="max-w-lg bg-[#2B231C]/40 backdrop-blur-md border border-[#FEFAE6]/15 p-8 md:p-10 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-[1px] bg-[#D1C8A9]" />
            <span
              className="text-[#D1C8A9] text-[0.6rem] uppercase"
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3em" }}
            >
              Avataan pian · Lahti
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl text-[#FEFAE6] font-semibold leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tuoretta kahvia
            <br />
            <span
              className="text-[#D1C8A9]"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
            >
              joka päivä
            </span>
          </h1>
          <p className="text-[#FEFAE6]/70 text-sm md:text-base leading-relaxed mb-8">
            Nauti tuoreesti paahdetun kahvin rikkaasta tuoksusta ja
            pehmeästä mausta — täydellinen tapa aloittaa päiväsi
            energialla ja lämmöllä.
          </p>
          <PillButton href="#special" variant="light">
            Tutustu menuun
          </PillButton>
        </div>
      </motion.div>
    </section>
  );
}
