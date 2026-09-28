"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import FoodCard from "./FoodCard";
import { ProductDetail } from "@/context/ProductModalContext";

interface CategoryMenuSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: ProductDetail[];
  large?: boolean;
  columns?: string;
}

export default function CategoryMenuSection({
  eyebrow,
  title,
  description,
  items,
  large = false,
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}: CategoryMenuSectionProps) {
  return (
    <section className="relative py-16 md:py-24 bg-[#E0D4C5]">
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
              {eyebrow}
            </span>
          </div>
          <h1
            className="text-3xl md:text-4xl text-[#2B231C] font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title}
          </h1>
          <p className="text-[#2B231C]/55 text-sm mt-3 max-w-lg">{description}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className={`grid ${columns} gap-5`}
        >
          {items.map((item) => (
            <FoodCard key={item.id} item={item} large={large} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
