"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { useCart } from "@/context/CartContext";
import { useProductModal, ProductDetail } from "@/context/ProductModalContext";

export default function FoodCard({
  item,
  large = false,
}: {
  item: ProductDetail;
  large?: boolean;
}) {
  const { addToCart } = useCart();
  const { openProduct } = useProductModal();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!item.video) return;
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
  }, [item.video]);

  return (
    <motion.div
      variants={staggerItem}
      onClick={() => openProduct(item)}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer ${
        large ? "aspect-[4/5]" : "aspect-[5/4]"
      }`}
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
        {item.video ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={item.video}
            poster={item.image}
            loop
            muted
            playsInline
            preload="none"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B231C] via-[#2B231C]/25 to-[#2B231C]/5 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
      <div className="absolute inset-0 border border-[#FEFAE6]/10 rounded-3xl pointer-events-none group-hover:border-[#D1C8A9]/40 transition-colors duration-500" />

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart({
            id: item.id,
            name: item.name,
            subtitle: item.subtitle,
            description: item.description,
            price: item.price,
            image: item.image,
          });
        }}
        className="absolute top-4 right-4 inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full text-[0.6rem] uppercase tracking-[0.15em] font-medium bg-[#FEFAE6]/15 text-[#FEFAE6] border border-[#FEFAE6]/30 backdrop-blur-md hover:bg-[#FEFAE6]/25 transition-all duration-300 cursor-pointer opacity-100 translate-y-0 md:opacity-0 md:translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0"
      >
        Lisää
        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[#FEFAE6] text-[#2B231C]">
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
            <path
              d="M1 9L9 1M9 1H2.5M9 1V7.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span
          className="text-[#D1C8A9]/80 text-[0.6rem] uppercase"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.2em" }}
        >
          {item.subtitle}
        </span>
        <div className="flex items-start justify-between gap-3 mt-1">
          <h3
            className="text-[#FEFAE6] text-lg font-semibold leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {item.name}
          </h3>
          <span className="text-[#D1C8A9] text-sm font-mono shrink-0 mt-1">{item.price}</span>
        </div>
        <p className="text-[#FEFAE6]/55 text-xs leading-relaxed mt-2 max-h-20 opacity-100 md:max-h-0 md:group-hover:max-h-20 md:opacity-0 md:group-hover:opacity-100 overflow-hidden transition-all duration-500">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
