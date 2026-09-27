"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

interface CategoryTile {
  id: number;
  name: string;
  subtitle: string;
  video: string;
  image: string;
  targetId: string;
}

const categories: CategoryTile[] = [
  {
    id: 901,
    name: "Kevyttä ja täyttävää",
    subtitle: "Suosikkikategoria",
    video: "/images/menu/kalkkuna-ciabatta.mp4",
    image: "/images/menu/kalkkuna-ciabatta.jpg",
    targetId: "menu-savory",
  },
  {
    id: 902,
    name: "Makeat herkut",
    subtitle: "Suosikkikategoria",
    video: "/images/menu/suffleleivos.mp4",
    image: "/images/menu/suffleleivos.jpg",
    targetId: "menu-sweet",
  },
  {
    id: 903,
    name: "Salaatit",
    subtitle: "Suosikkikategoria",
    video: "/images/menu/bataatti-granaattiomenasalaatti.mp4",
    image: "/images/menu/bataatti-granaattiomenasalaatti.jpg",
    targetId: "menu-salad",
  },
];

function CategoryCard({ cat }: { cat: CategoryTile }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {});
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    document
      .getElementById(cat.targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      variants={staggerItem}
      onClick={handleClick}
      className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={cat.video}
        poster={cat.image}
        loop
        muted
        playsInline
        preload="none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B231C]/85 via-[#2B231C]/15 to-[#2B231C]/30" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span
          className="text-[#D1C8A9]/80 text-[0.6rem] uppercase"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.2em" }}
        >
          {cat.subtitle}
        </span>
        <p
          className="text-[#FEFAE6] text-lg font-semibold mt-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {cat.name}
        </p>
      </div>
    </motion.div>
  );
}

export default function TopCategories() {
  return (
    <section id="categories" className="relative py-20 md:py-28 bg-[#FEFAE6]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[1px] bg-[#937C65]" />
            <span
              className="text-[#796A54] text-[0.65rem] uppercase"
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3em" }}
            >
              Suosikit joka päivä
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl text-[#2B231C] font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Suosikkikategoriamme:
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
