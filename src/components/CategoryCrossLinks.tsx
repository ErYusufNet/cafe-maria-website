"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { menuCategories } from "@/data/menuCategories";

export default function CategoryCrossLinks({ current }: { current: string }) {
  const others = menuCategories.filter((cat) => cat.slug !== current);

  return (
    <section className="relative py-16 md:py-20 bg-[#FEFAE6] border-t border-[#2B231C]/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-8"
        >
          <span
            className="text-[#796A54] text-[0.65rem] uppercase"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3em" }}
          >
            Katso myös
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {others.map((cat) => (
            <motion.div key={cat.slug} variants={staggerItem}>
              <Link
                href={cat.href}
                className="relative flex items-center justify-between gap-3 rounded-2xl overflow-hidden group h-24 px-6"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-[#2B231C]/55 group-hover:bg-[#2B231C]/45 transition-colors duration-300" />
                <p
                  className="relative text-[#FEFAE6] text-base font-semibold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {cat.name}
                </p>
                <span className="relative w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-[#FEFAE6] text-[#2B231C]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 9L9 1M9 1H2.5M9 1V7.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
