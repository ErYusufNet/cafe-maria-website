"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

type CupSize = "Pieni" | "Keskikoko" | "Suuri";
type MilkType = "Täysmaito" | "Kauramaito" | "Manteliaito" | "Kookosmaito";
type SyrupType = "Vanilja" | "Karamelli" | "Hasselpähkinä" | "Ei mitään";

export default function DrinkCustomizer() {
  const { addToCart, setCartOpen } = useCart();

  // Customizer state
  const [size, setSize] = useState<CupSize>("Keskikoko");
  const [milk, setMilk] = useState<MilkType>("Kauramaito");
  const [shots, setShots] = useState<number>(2);
  const [syrup, setSyrup] = useState<SyrupType>("Vanilja");
  const [syrupPumps, setSyrupPumps] = useState<number>(2);
  const [whippedCream, setWhippedCream] = useState<boolean>(true);
  const [caramelDrizzle, setCaramelDrizzle] = useState<boolean>(true);
  const [cinnamon, setCinnamon] = useState<boolean>(false);

  // Price Calculation
  const getBasePrice = () => {
    switch (size) {
      case "Pieni":
        return 3.95;
      case "Keskikoko":
        return 4.50;
      case "Suuri":
        return 4.95;
    }
  };

  const getMilkPrice = () => (milk === "Täysmaito" ? 0 : 0.70);
  const getShotsPrice = () => Math.max(0, shots - 1) * 0.80; // 1 annos sisältyy, lisäannos 0,80 € / kpl
  const getSyrupPrice = () => (syrup === "Ei mitään" ? 0 : syrupPumps * 0.15);
  const getToppingsPrice = () => {
    let total = 0;
    if (whippedCream) total += 0.50;
    if (caramelDrizzle) total += 0.40;
    if (cinnamon) total += 0.20;
    return total;
  };

  const totalPrice = getBasePrice() + getMilkPrice() + getShotsPrice() + getSyrupPrice() + getToppingsPrice();

  // SVG parameters
  const liquidBaseY = 260;
  const liquidMaxHeight = size === "Pieni" ? 150 : size === "Keskikoko" ? 190 : 230;
  const espressoHeight = shots * 35;
  const milkHeight = Math.max(0, liquidMaxHeight - espressoHeight);

  const espressoY = liquidBaseY - espressoHeight;
  const milkY = espressoY - milkHeight;

  const handleAddToOrder = () => {
    const toppingsList = [];
    if (whippedCream) toppingsList.push("Kermavaahto");
    if (caramelDrizzle) toppingsList.push("Karamellikastike");
    if (cinnamon) toppingsList.push("Kanelia");

    const toppingsStr = toppingsList.length > 0 ? ` + Lisukkeet: ${toppingsList.join(", ")}` : "";
    const syrupStr = syrup !== "Ei mitään" && syrupPumps > 0 ? ` + ${syrupPumps} x ${syrup}` : "";

    const item = {
      id: Date.now(), // Uniikki ID räätälöidylle juomalle
      name: `Oma Kuppi — ${size}`,
      subtitle: `${milk}${syrupStr}${toppingsStr}`,
      price: `${totalPrice.toFixed(2)} €`,
      image: "/images/coffee/kahve.jpg",
      description: `Juuri sinulle räätälöity ${size.toLowerCase()}-kokoinen juoma: ${milk}, ${shots} annosta espressoa ja valitut lisukkeet.`,
    };

    addToCart(item);
    setCartOpen(true);
  };

  return (
    <section id="customizer" className="relative py-24 md:py-32 bg-[#FEFAE6] overflow-hidden border-t border-[#2B231C]/5">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#3E4A31]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-[#3E4A31] text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.3em] block mb-3 font-mono font-bold"
          >
            Räätälöi kahvisi
          </span>
          <h2
            className="text-3xl md:text-5xl text-[#2B231C] font-semibold uppercase tracking-wider"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Luo oma kuppisi
          </h2>
          <div className="w-12 h-[1px] bg-[#3E4A31] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Cup Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#2B231C]/[0.02] border border-[#2B231C]/8 p-8 md:p-12 relative">
            <div className="absolute top-4 left-4 text-[#2B231C]/30 text-[0.65rem] uppercase tracking-widest font-mono">
              Esikatselu
            </div>

            {/* Cup Container */}
            <div className="relative w-64 h-96 flex items-center justify-center">
              <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-2xl overflow-visible">
                <defs>
                  {/* Clip liquid inside the cup */}
                  <clipPath id="cup-clip">
                    <path d="M 45,20 L 155,20 L 135,260 L 65,260 Z" />
                  </clipPath>
                </defs>

                {/* Cup outline / Glass backing */}
                <path
                  d="M 45,20 L 155,20 L 135,260 L 65,260 Z"
                  fill="rgba(43,35,28,0.02)"
                  stroke="rgba(43,35,28,0.2)"
                  strokeWidth="2"
                />

                {/* Masked Liquid layers */}
                <g clipPath="url(#cup-clip)">
                  {/* Espresso Layer */}
                  <motion.rect
                    x="0"
                    width="200"
                    fill="#3d2314"
                    animate={{ y: espressoY, height: espressoHeight }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  />

                  {/* Milk Layer */}
                  <motion.rect
                    x="0"
                    width="200"
                    fill={milk === "Täysmaito" ? "#fdfbf7" : milk === "Kauramaito" ? "#eae3d2" : milk === "Manteliaito" ? "#ebdcb9" : "#f5ebd5"}
                    animate={{ y: milkY, height: milkHeight }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  />

                  {/* Liquid surface foam reflection */}
                  <motion.ellipse
                    cx="100"
                    cy={milkY}
                    rx="50"
                    ry="6"
                    fill="rgba(255,255,255,0.25)"
                    animate={{ cy: milkY }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  />
                </g>

                {/* Whipped Cream Topping (drawn at the top) */}
                <AnimatePresence>
                  {whippedCream && (
                    <motion.path
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      d="M 45,22 C 55,0 75,-15 100,-15 C 125,-15 145,0 155,22 Z"
                      fill="#fbfaf5"
                      stroke="rgba(43,35,28,0.15)"
                      strokeWidth="1"
                    />
                  )}
                </AnimatePresence>

                {/* Caramel Drizzle Overlay */}
                <AnimatePresence>
                  {caramelDrizzle && (
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      d="M 50,30 Q 75,10 100,30 T 150,30"
                      fill="none"
                      stroke="#c98a3b"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  )}
                </AnimatePresence>

                {/* Cinnamon sprinkles */}
                <AnimatePresence>
                  {cinnamon && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <circle cx="80" cy="28" r="1.5" fill="#8b5a2b" />
                      <circle cx="100" cy="24" r="1" fill="#8b5a2b" />
                      <circle cx="120" cy="29" r="1.5" fill="#8b5a2b" />
                      <circle cx="90" cy="32" r="1.2" fill="#8b5a2b" />
                      <circle cx="110" cy="30" r="1" fill="#8b5a2b" />
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Circular Café Maria badge */}
                <circle cx="100" cy="140" r="26" fill="#2B231C" stroke="rgba(254,250,230,0.2)" strokeWidth="2" />
                <path d="M 85,140 C 85,120 115,120 115,140 C 115,150 85,150 85,140 Z" fill="none" stroke="#D1C8A9" strokeWidth="1.5" />
                <text x="100" y="143" fill="#D1C8A9" fontSize="6" fontWeight="bold" textAnchor="middle" letterSpacing="1">C.M.</text>

                {/* Cup Rim */}
                <ellipse cx="100" cy="20" rx="55" ry="8" fill="none" stroke="rgba(43,35,28,0.3)" strokeWidth="2" />
              </svg>
            </div>

            <div className="mt-8 text-center">
              <span className="text-[#2B231C]/50 text-[0.65rem] tracking-wider uppercase font-mono">ARVIOITU HINTA</span>
              <p className="text-3xl text-[#2B231C] font-semibold mt-1 font-mono">{totalPrice.toFixed(2)} €</p>
            </div>
          </div>

          {/* Right: Controls Panel */}
          <div className="lg:col-span-7 space-y-8">
            {/* Cup Size */}
            <div>
              <label className="text-[#2B231C]/50 text-[0.65rem] tracking-wider uppercase block mb-3 font-mono">1. Valitse koko</label>
              <div className="grid grid-cols-3 gap-3">
                {(["Pieni", "Keskikoko", "Suuri"] as CupSize[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`border p-3 text-xs tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                      size === s
                        ? "border-[#3E4A31] text-[#3E4A31] bg-[#3E4A31]/5"
                        : "border-[#2B231C]/12 text-[#2B231C]/60 hover:border-[#2B231C]/30 hover:text-[#2B231C]"
                    }`}
                  >
                    {s.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Milk Options */}
            <div>
              <label className="text-[#2B231C]/50 text-[0.65rem] tracking-wider uppercase block mb-3 font-mono">2. Valitse maito</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(["Täysmaito", "Kauramaito", "Manteliaito", "Kookosmaito"] as MilkType[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMilk(m)}
                    className={`border p-3 text-[10px] tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                      milk === m
                        ? "border-[#3E4A31] text-[#3E4A31] bg-[#3E4A31]/5"
                        : "border-[#2B231C]/12 text-[#2B231C]/60 hover:border-[#2B231C]/30 hover:text-[#2B231C]"
                    }`}
                  >
                    {m.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Espresso Shots */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-[#2B231C]/50 text-[0.65rem] tracking-wider uppercase font-mono">3. Espressoannokset</label>
                <span className="text-[#3E4A31] text-xs font-mono font-bold">{shots} {shots === 1 ? "annos" : "annosta"}</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShots(Math.max(1, shots - 1))}
                  className="w-10 h-10 border border-[#2B231C]/12 flex items-center justify-center hover:border-[#2B231C]/30 text-[#2B231C] hover:text-[#3E4A31] transition-colors cursor-pointer"
                >
                  -
                </button>
                <div className="flex-1 h-[2px] bg-[#2B231C]/10 relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[#3E4A31]"
                    animate={{ width: `${(shots / 4) * 100}%` }}
                  />
                </div>
                <button
                  onClick={() => setShots(Math.min(4, shots + 1))}
                  className="w-10 h-10 border border-[#2B231C]/12 flex items-center justify-center hover:border-[#2B231C]/30 text-[#2B231C] hover:text-[#3E4A31] transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Syrup Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[#2B231C]/50 text-[0.65rem] tracking-wider uppercase block mb-3 font-mono">4. Sirappi</label>
                <select
                  value={syrup}
                  onChange={(e) => setSyrup(e.target.value as SyrupType)}
                  className="w-full bg-[#F5E2D1] border border-[#2B231C]/12 text-[#2B231C] text-xs tracking-wider p-3 focus:outline-none focus:border-[#3E4A31] rounded-none cursor-pointer"
                >
                  <option value="Ei mitään">EI MITÄÄN</option>
                  <option value="Vanilja">VANILJA</option>
                  <option value="Karamelli">KARAMELLI</option>
                  <option value="Hasselpähkinä">HASSELPÄHKINÄ</option>
                </select>
              </div>

              {syrup !== "Ei mitään" && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-[#2B231C]/50 text-[0.65rem] tracking-wider uppercase font-mono">Sirapin määrä</label>
                    <span className="text-[#3E4A31] text-xs font-mono font-bold">{syrupPumps} {syrupPumps === 1 ? "pumppu" : "pumppua"}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSyrupPumps(Math.max(1, syrupPumps - 1))}
                      className="w-8 h-8 border border-[#2B231C]/12 flex items-center justify-center text-[#2B231C] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-[#2B231C] text-xs min-w-[20px] text-center font-mono">{syrupPumps}</span>
                    <button
                      onClick={() => setSyrupPumps(Math.min(6, syrupPumps + 1))}
                      className="w-8 h-8 border border-[#2B231C]/12 flex items-center justify-center text-[#2B231C] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Toppings Options */}
            <div>
              <label className="text-[#2B231C]/50 text-[0.65rem] tracking-wider uppercase block mb-3 font-mono">5. Lisukkeet</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setWhippedCream(!whippedCream)}
                  className={`border p-4 text-xs tracking-wider transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    whippedCream
                      ? "border-[#3E4A31] text-[#3E4A31] bg-[#3E4A31]/5"
                      : "border-[#2B231C]/12 text-[#2B231C]/60 hover:border-[#2B231C]/30 hover:text-[#2B231C]"
                  }`}
                >
                  <span>KERMAVAAHTO</span>
                  <span className="text-[9px] font-mono opacity-80">+0,50 €</span>
                </button>
                <button
                  onClick={() => setCaramelDrizzle(!caramelDrizzle)}
                  className={`border p-4 text-xs tracking-wider transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    caramelDrizzle
                      ? "border-[#3E4A31] text-[#3E4A31] bg-[#3E4A31]/5"
                      : "border-[#2B231C]/12 text-[#2B231C]/60 hover:border-[#2B231C]/30 hover:text-[#2B231C]"
                  }`}
                >
                  <span>KARAMELLIKASTIKE</span>
                  <span className="text-[9px] font-mono opacity-80">+0,40 €</span>
                </button>
                <button
                  onClick={() => setCinnamon(!cinnamon)}
                  className={`border p-4 text-xs tracking-wider transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    cinnamon
                      ? "border-[#3E4A31] text-[#3E4A31] bg-[#3E4A31]/5"
                      : "border-[#2B231C]/12 text-[#2B231C]/60 hover:border-[#2B231C]/30 hover:text-[#2B231C]"
                  }`}
                >
                  <span>KANELI</span>
                  <span className="text-[9px] font-mono opacity-80">+0,20 €</span>
                </button>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <button
                onClick={handleAddToOrder}
                className="w-full btn-cta text-center justify-center font-bold text-xs tracking-widest py-4 cursor-pointer"
              >
                LISÄÄ OMA KUPPI TILAUKSEEN
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
