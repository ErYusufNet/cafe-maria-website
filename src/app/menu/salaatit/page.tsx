import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryMenuSection from "@/components/CategoryMenuSection";
import CategoryCrossLinks from "@/components/CategoryCrossLinks";
import { saladItems } from "@/data/foodMenuData";

export const metadata: Metadata = {
  title: "Salaatit — Café Maria",
  description:
    "Tuoreet salaattimme — raikas lounas tai kevyt lisuke, valmistettu tuoreista raaka-aineista.",
};

export default function SalaatitPage() {
  return (
    <main>
      <Header variant="solid" />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2B231C]/50 hover:text-[#2B231C] text-xs uppercase tracking-[0.2em] transition-colors duration-300"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ← Etusivulle
          </Link>
        </div>
        <CategoryMenuSection
          eyebrow="Raikkaasti ja täyttävästi"
          title="Salaatit"
          description="Tuoreet salaattimme sopivat kevyeksi lounaaksi tai virkistäväksi lisukkeeksi."
          items={saladItems}
          columns="grid-cols-1 sm:grid-cols-2"
          large
        />
        <CategoryCrossLinks current="salaatit" />
      </div>
      <Footer />
    </main>
  );
}
