"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useCart } from "@/context/CartContext";
import { useProductModal, ProductDetail } from "@/context/ProductModalContext";

const categories: ProductDetail[] = [
  {
    id: 901,
    name: "Espresso",
    subtitle: "Suosikkikategoria",
    description: "Espresso — talon suosikkien joukosta.",
    longDescription:
      "Täydellisesti paahdetuista papuista uutettu tiivis, voimakas espresso — täynnä syvää makua ja samettista cremaa. Nautitaan parhaiten pienestä kupista, hitaasti, jotta jokainen sävy makuprofiilista pääsee esiin.",
    image: "/images/coffee/menu_macchiato.jpg",
    price: "3.50 €",
    tags: ["Intensiivinen", "Klassikko"],
  },
  {
    id: 902,
    name: "Latte",
    subtitle: "Suosikkikategoria",
    description: "Latte — talon suosikkien joukosta.",
    longDescription:
      "Silkkisen pehmeä espresso yhdistettynä huolella höyrytettyyn maitoon. Tasapainoinen, lämmin ja aina yhtä lohduttava — kahvilamme suosituin valinta niin aamuun kuin iltapäivän taukoon.",
    image: "/images/coffee/menu_frap_highres.jpg",
    price: "4.50 €",
    tags: ["Pehmeä", "Suosikki"],
  },
  {
    id: 903,
    name: "Cold Brew",
    subtitle: "Suosikkikategoria",
    description: "Cold Brew — talon suosikkien joukosta.",
    longDescription:
      "Hitaasti, kylmällä vedellä uutettu kahvi tarjoaa pehmeän, vähemmän hapokkaan maun. Tarjoillaan jäillä — raikas valinta erityisesti lämpimänä päivänä tai kun kaipaat jotain kevyempää.",
    image: "/images/coffee/menu_nitro.jpg",
    price: "4.95 €",
    tags: ["Raikas", "Vähemmän hapan"],
  },
];

export default function TopCategories() {
  const { addToCart } = useCart();
  const { openProduct } = useProductModal();

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
            <motion.div
              key={cat.id}
              variants={staggerItem}
              onClick={() => openProduct(cat)}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${cat.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B231C]/85 via-[#2B231C]/15 to-[#2B231C]/30" />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart({
                    id: cat.id,
                    name: cat.name,
                    subtitle: cat.subtitle,
                    description: cat.description,
                    price: cat.price,
                    image: cat.image,
                  });
                }}
                className="absolute top-4 right-4 inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full text-[0.6rem] uppercase tracking-[0.15em] font-medium bg-[#FEFAE6]/15 text-[#FEFAE6] border border-[#FEFAE6]/30 backdrop-blur-md hover:bg-[#FEFAE6]/25 transition-all duration-300 cursor-pointer"
              >
                Osta
                <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[#FEFAE6] text-[#2B231C]">
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H2.5M9 1V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="text-[#FEFAE6] text-lg font-semibold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {cat.name}
                </p>
                <p className="text-[#D1C8A9] text-xs font-mono">{cat.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
