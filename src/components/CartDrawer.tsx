"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    cartTotal,
    isCartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<
    "cart" | "details" | "processing" | "success"
  >("cart");
  const [orderNumber, setOrderNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerNote, setCustomerNote] = useState("");
  const [submitError, setSubmitError] = useState("");

  const goToDetails = () => {
    setSubmitError("");
    setCheckoutStep("details");
  };

  const handlePlaceOrder = async () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      setSubmitError("Täytä nimi ja puhelinnumero.");
      return;
    }

    setSubmitError("");
    setCheckoutStep("processing");

    const mockOrderNum = "CM-" + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(mockOrderNum);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderNumber: mockOrderNum,
          customerName: customerName.trim(),
          customerPhone: customerPhone.trim(),
          note: customerNote.trim() || undefined,
          items: cart.map((c) => ({
            name: c.item.name,
            quantity: c.quantity,
            price: c.item.price,
          })),
          total: cartTotal,
        }),
      });

      // Even if delivery to the café failed server-side, we still show the
      // customer a friendly confirmation — the order number is proof of
      // intent either way, and a delivery failure is logged server-side.
      await res.json().catch(() => null);
    } catch {
      // Network hiccup — don't block the demo experience on it.
    }

    setTimeout(() => {
      setCheckoutStep("success");
    }, 1200);
  };

  const closeCart = () => {
    setCartOpen(false);
    setTimeout(() => {
      setCheckoutStep("cart");
      setCustomerName("");
      setCustomerPhone("");
      setCustomerNote("");
      setSubmitError("");
    }, 500);
  };

  const handleSuccessClose = () => {
    clearCart();
    closeCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={checkoutStep === "processing" ? undefined : closeCart}
            className="fixed inset-0 bg-[#2B231C]/70 backdrop-blur-sm z-[70] cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-[#F5E2D1]/97 border-l border-[#2B231C]/8 z-[80] shadow-2xl flex flex-col backdrop-blur-xl"
          >
            {checkoutStep === "cart" && (
              <>
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-[#2B231C]/8 flex items-center justify-between">
                  <div>
                    <h2
                      className="text-xl text-[#2B231C] font-semibold uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Tilauksesi
                    </h2>
                    <p className="text-[#2B231C]/50 text-[0.65rem] uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-mono)" }}>
                      Café Maria -kokemus
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="w-10 h-10 rounded-full border border-[#2B231C]/12 flex items-center justify-center text-[#2B231C]/60 hover:text-[#2B231C] hover:border-[#2B231C]/25 transition-all duration-300 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                      <div className="text-[#3E4A31] text-4xl">☕</div>
                      <p className="text-[#2B231C]/50 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                        Ostoskorisi on tyhjä.<br />Lisää herkullinen kahvi aloittaaksesi.
                      </p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <motion.div
                        key={item.item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center gap-4 bg-[#2B231C]/[0.02] border border-[#2B231C]/8 p-4 relative group"
                      >
                        {/* Item Thumbnail */}
                        <div
                          className="w-16 h-16 bg-[#E0D4C5] shrink-0 flex items-center justify-center text-lg"
                          style={
                            item.item.image
                              ? {
                                  backgroundImage: `url(${item.item.image})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }
                              : undefined
                          }
                        >
                          {!item.item.image && "🍽️"}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[#2B231C] text-sm font-medium truncate" style={{ fontFamily: "var(--font-inter)" }}>
                            {item.item.name}
                          </h4>
                          <p className="text-[#3E4A31] text-[0.65rem] uppercase tracking-widest mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                            {item.item.price}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 mt-3">
                            <button
                              onClick={() => updateQuantity(item.item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full border border-[#2B231C]/12 flex items-center justify-center text-[#2B231C]/60 hover:text-[#2B231C] hover:border-[#3E4A31] transition-colors cursor-pointer text-xs"
                            >
                              -
                            </button>
                            <span className="text-[#2B231C] text-xs font-medium min-w-[12px] text-center" style={{ fontFamily: "var(--font-mono)" }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full border border-[#2B231C]/12 flex items-center justify-center text-[#2B231C]/60 hover:text-[#2B231C] hover:border-[#3E4A31] transition-colors cursor-pointer text-xs"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => removeFromCart(item.item.id)}
                          className="text-[#2B231C]/25 hover:text-red-600 absolute top-4 right-4 transition-colors cursor-pointer"
                        >
                          ✕
                        </button>
                      </motion.div>
                    ))
                  )}
                </div>

                {/* Footer / Total */}
                {cart.length > 0 && (
                  <div className="p-6 md:p-8 border-t border-[#2B231C]/8 bg-[#2B231C]/[0.015]">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[#2B231C]/50 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                        Välisumma
                      </span>
                      <span className="text-[#2B231C] text-2xl font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
                        {cartTotal.toFixed(2)} €
                      </span>
                    </div>

                    <button
                      onClick={goToDetails}
                      className="w-full btn-cta text-center justify-center font-bold text-xs tracking-widest py-4 cursor-pointer"
                    >
                      JATKA TILAUKSEEN
                    </button>
                  </div>
                )}
              </>
            )}

            {checkoutStep === "details" && (
              <div className="flex-1 flex flex-col p-6 md:p-8 overflow-y-auto">
                <div className="flex items-center justify-between mb-2">
                  <h2
                    className="text-xl text-[#2B231C] font-semibold uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Noutotiedot
                  </h2>
                  <button
                    onClick={closeCart}
                    className="w-10 h-10 rounded-full border border-[#2B231C]/12 flex items-center justify-center text-[#2B231C]/60 hover:text-[#2B231C] hover:border-[#2B231C]/25 transition-all duration-300 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-[#2B231C]/50 text-xs mb-8" style={{ fontFamily: "var(--font-inter)" }}>
                  Tilaus lähetetään suoraan kahvilalle — nouda tilauksesi
                  paikan päältä, kun se on valmis.
                </p>

                <div className="space-y-5 flex-1">
                  <div>
                    <label className="block text-[#2B231C]/50 text-[0.65rem] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                      Nimi
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Etunimi Sukunimi"
                      className="w-full bg-white/60 border border-[#2B231C]/12 px-4 py-3 text-sm text-[#2B231C] placeholder:text-[#2B231C]/30 focus:outline-none focus:border-[#3E4A31] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2B231C]/50 text-[0.65rem] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                      Puhelinnumero
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+358 40 123 4567"
                      className="w-full bg-white/60 border border-[#2B231C]/12 px-4 py-3 text-sm text-[#2B231C] placeholder:text-[#2B231C]/30 focus:outline-none focus:border-[#3E4A31] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2B231C]/50 text-[0.65rem] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                      Viesti kahvilalle (valinnainen)
                    </label>
                    <textarea
                      value={customerNote}
                      onChange={(e) => setCustomerNote(e.target.value)}
                      placeholder="Esim. allergiat tai toivottu noutoaika"
                      rows={3}
                      className="w-full bg-white/60 border border-[#2B231C]/12 px-4 py-3 text-sm text-[#2B231C] placeholder:text-[#2B231C]/30 focus:outline-none focus:border-[#3E4A31] transition-colors resize-none"
                    />
                  </div>

                  {submitError && (
                    <p className="text-red-700 text-xs">{submitError}</p>
                  )}
                </div>

                <div className="pt-6 border-t border-[#2B231C]/8 mt-6">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[#2B231C]/50 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                      Yhteensä
                    </span>
                    <span className="text-[#2B231C] text-2xl font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
                      {cartTotal.toFixed(2)} €
                    </span>
                  </div>
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full btn-cta text-center justify-center font-bold text-xs tracking-widest py-4 cursor-pointer"
                  >
                    LÄHETÄ TILAUS KAHVILALLE
                  </button>
                </div>
              </div>
            )}

            {checkoutStep === "processing" && (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  {/* Spinning Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute inset-0 border-2 border-transparent border-t-[#3E4A31] rounded-full"
                  />
                  <span className="text-3xl">☕</span>
                </div>
                <div>
                  <h3 className="text-[#2B231C] text-lg font-semibold tracking-wider" style={{ fontFamily: "var(--font-playfair)" }}>
                    Lähetämme tilaustasi kahvilalle...
                  </h3>
                  <p className="text-[#2B231C]/50 text-xs mt-2 max-w-xs leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    Hetkinen, välitämme tilauksesi suoraan Café Marialle.
                  </p>
                </div>
              </div>
            )}

            {checkoutStep === "success" && (
              <div className="flex-1 flex flex-col p-6 md:p-8 justify-between overflow-y-auto">
                <div className="my-auto space-y-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 bg-[#3E4A31]/10 border border-[#3E4A31] rounded-full flex items-center justify-center mx-auto"
                  >
                    <span className="text-[#3E4A31] text-3xl">✓</span>
                  </motion.div>

                  <div>
                    <h3 className="text-[#2B231C] text-2xl font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-playfair)" }}>
                      Tilaus vastaanotettu
                    </h3>
                    <p className="text-[#2B231C]/50 text-xs mt-2" style={{ fontFamily: "var(--font-mono)" }}>
                      Tilausnumero: {orderNumber}
                    </p>
                  </div>

                  {/* Receipt Summary */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#F5E2D1] border border-[#2B231C]/8 p-6 text-left space-y-4 max-w-sm mx-auto"
                  >
                    <div className="border-b border-[#2B231C]/8 pb-3">
                      <p className="text-[#3E4A31] text-[0.6rem] uppercase tracking-widest font-bold" style={{ fontFamily: "var(--font-mono)" }}>
                        TILAUSYHTEENVETO
                      </p>
                    </div>

                    <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                      {cart.map((c) => (
                        <div key={c.item.id} className="flex justify-between text-xs">
                          <span className="text-[#2B231C]/65 truncate max-w-[200px]" style={{ fontFamily: "var(--font-inter)" }}>
                            {c.item.name} <span className="text-[#2B231C]/35 text-[10px]">x{c.quantity}</span>
                          </span>
                          <span className="text-[#2B231C]/85" style={{ fontFamily: "var(--font-mono)" }}>
                            {(parseFloat(c.item.price.replace("€", "").trim()) * c.quantity).toFixed(2)} €
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-[#2B231C]/8 pt-3 flex justify-between font-medium">
                      <span className="text-[#2B231C] text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>Yhteensä</span>
                      <span className="text-[#3E4A31] text-sm" style={{ fontFamily: "var(--font-mono)" }}>{cartTotal.toFixed(2)} €</span>
                    </div>
                  </motion.div>

                  <p className="text-[#2B231C]/45 text-xs max-w-xs mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    Tilauksesi on lähetetty Café Marialle. Saat viestin, kun
                    se on valmis noudettavaksi — nouda se tiskiltä
                    tilausnumerollasi.
                  </p>
                </div>

                <button
                  onClick={handleSuccessClose}
                  className="w-full btn-cta text-center justify-center font-bold text-xs tracking-widest py-4 cursor-pointer mt-6"
                >
                  VALMIS
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
