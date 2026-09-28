import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryMenuSection from "@/components/CategoryMenuSection";
import CategoryCrossLinks from "@/components/CategoryCrossLinks";
import { coffeeItems } from "@/data/coffeeMenuItems";

export const metadata: Metadata = {
  title: "Kahvit — Café Maria",
  description:
    "Café Marian kahvilista: käsintehdyt erikoiskahvit, kylmät juomat ja kauden suosikit.",
};

export default function KahvitPage() {
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
          eyebrow="Käsintehtyä joka kupissa"
          title="Kahvit"
          description="Erikoiskahvimme ja kylmät suosikkimme — jokainen kuppi valmistetaan tilauksesta, tuoreista raaka-aineista."
          items={coffeeItems}
        />
        <CategoryCrossLinks current="kahvit" />
      </div>
      <Footer />
    </main>
  );
}
