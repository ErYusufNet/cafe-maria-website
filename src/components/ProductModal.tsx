"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useProductModal } from "@/context/ProductModalContext";
import { useCart } from "@/context/CartContext";

export default function ProductModal() {
  const { activeProduct, closeProduct } = useProductModal();
  const { addToCart } = useCart();

  useEffect(() => {
    if (!activeProduct) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProduct();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProduct, closeProduct]);

  const handleAdd = () => {
    if (!activeProduct) return;
    addToCart({
      id: activeProduct.id,
      name: activeProduct.name,
      subtitle: activeProduct.subtitle,
      description: activeProduct.description,
      price: activeProduct.price,
      image: activeProduct.image,
    });
    closeProduct();
  };

  return (
    <AnimatePresence>
      {activeProduct && (
        <motion.div
          key="product-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-[#2B231C]/70 backdrop-blur-md"
          onClick={closeProduct}
        >
          <motion.div
            key="product-modal-panel"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] md:max-h-[620px] bg-[#FEFAE6] border border-[#2B231C]/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeProduct}
              aria-label="Sulje"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-[#FEFAE6]/80 md:bg-[#2B231C]/5 text-[#2B231C] border border-[#2B231C]/15 backdrop-blur-md hover:bg-[#2B231C]/10 transition-colors cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto shrink-0">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${activeProduct.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B231C]/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#2B231C]/10" />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto flex flex-col">
              <span
                className="text-[#937C65] text-[0.65rem] uppercase"
                style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.25em" }}
              >
                {activeProduct.subtitle}
              </span>

              <h3
                className="text-[#2B231C] text-2xl md:text-3xl font-semibold leading-tight mt-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {activeProduct.name}
              </h3>

              <span className="text-[#3E4A31] text-base font-mono mt-2">{activeProduct.price}</span>

              <span className="block w-10 h-[1px] bg-[#2B231C]/12 my-5" />

              <p className="text-[#2B231C]/70 text-sm leading-relaxed">
                {activeProduct.longDescription}
              </p>

              {activeProduct.tags && activeProduct.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {activeProduct.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[0.6rem] uppercase tracking-[0.1em] text-[#796A54] bg-[#2B231C]/[0.05] border border-[#2B231C]/10"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-8">
                <button
                  onClick={handleAdd}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium bg-[#3E4A31] text-[#FEFAE6] hover:bg-[#2A331F] transition-colors duration-300 cursor-pointer"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Lisää tilaukseen
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[#FEFAE6] text-[#3E4A31]">
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
