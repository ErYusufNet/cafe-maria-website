"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function ToastContainer() {
  const { toasts, removeToast } = useCart();

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none max-w-sm w-full px-6 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
            className="pointer-events-auto flex items-center justify-between gap-4 p-4 bg-[#F5E2D1]/97 border border-[#3E4A31]/25 shadow-2xl backdrop-blur-md rounded-none"
          >
            <div className="flex items-center gap-3">
              <span className="text-base">☕</span>
              <p
                className="text-[#2B231C] text-xs font-medium tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {toast.message}
              </p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#2B231C]/40 hover:text-[#2B231C] transition-colors text-xs font-bold pl-2 cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
