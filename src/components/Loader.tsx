"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        const timer = setTimeout(() => {
          setShow(false);
          setTimeout(onComplete, 800);
        }, 300);
        return () => clearTimeout(timer);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FEFAE6]"
        >
          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <h1
              className="text-3xl md:text-5xl font-bold text-[#2B231C] uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              CAFÉ MARIA
            </h1>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="block w-8 h-[1px] bg-[#937C65]" />
              <span
                className="text-[#937C65] text-[0.65rem] uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.3em",
                }}
              >
                Kahvila
              </span>
              <span className="block w-8 h-[1px] bg-[#937C65]" />
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-48 md:w-64">
            <div className="h-[1px] bg-[#2B231C]/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#3E4A31]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <p
              className="text-center text-[#2B231C]/50 text-[0.65rem] mt-4"
              style={{
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.2em",
              }}
            >
              {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
