"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import PillButton from "./PillButton";

const navLinks = [
  { label: "Etusivu", href: "#home" },
  { label: "Erikoiskahvit", href: "#special" },
  { label: "Tarina", href: "#story" },
  { label: "Kategoriat", href: "#categories" },
  { label: "Räätälöi", href: "#customizer" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setCartOpen } = useCart();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FEFAE6]/90 backdrop-blur-xl border-b border-[#2B231C]/10"
          : "bg-gradient-to-b from-[#2B231C]/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className={`text-lg font-bold tracking-[0.15em] transition-colors duration-500 ${
              scrolled ? "text-[#2B231C]" : "text-[#FEFAE6]"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            CAFÉ MARIA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors duration-300 text-[0.7rem] uppercase tracking-[0.2em] opacity-80 hover:opacity-100 ${
                scrolled ? "text-[#2B231C] hover:text-[#3E4A31]" : "text-[#FEFAE6] hover:text-[#D1C8A9]"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <PillButton onClick={() => setCartOpen(true)} variant={scrolled ? "dark" : "light"}>
              Kori ({cartCount})
            </PillButton>
          </div>

          {/* Mobile Cart Icon */}
          <button
            onClick={() => setCartOpen(true)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center relative cursor-pointer transition-colors duration-500 ${
              scrolled ? "text-[#2B231C]" : "text-[#FEFAE6]"
            }`}
            aria-label="Ostoskori"
          >
            <span className="text-lg">🛒</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#3E4A31] text-[#FEFAE6] text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            aria-label="Valikko"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-[1.5px] transition-colors duration-500 ${scrolled ? "bg-[#2B231C]" : "bg-[#FEFAE6]"}`}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block w-6 h-[1.5px] transition-colors duration-500 ${scrolled ? "bg-[#2B231C]" : "bg-[#FEFAE6]"}`}
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
              }
              className={`block w-6 h-[1.5px] transition-colors duration-500 ${scrolled ? "bg-[#2B231C]" : "bg-[#FEFAE6]"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#FEFAE6]/98 backdrop-blur-2xl border-t border-[#2B231C]/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#2B231C]/70 hover:text-[#3E4A31] transition-colors text-sm uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setCartOpen(true);
                }}
                className="btn-cta text-center text-[0.65rem] mt-4 cursor-pointer"
              >
                AVAA KORI ({cartCount})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
