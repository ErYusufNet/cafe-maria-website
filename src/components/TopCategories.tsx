"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { menuCategories, MenuCategoryMeta } from "@/data/menuCategories";

function CategoryCard({ cat }: { cat: MenuCategoryMeta }) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!cat.video) return;
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
  }, [cat.video]);

  return (
    <motion.div
      variants={staggerItem}
      onClick={() => router.push(cat.href)}
      className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
    >
      {cat.video ? (
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
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(${cat.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {menuCategories.map((cat) => (
            <CategoryCard key={cat.slug} cat={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
