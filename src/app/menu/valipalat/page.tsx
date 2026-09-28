import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryMenuSection from "@/components/CategoryMenuSection";
import CategoryCrossLinks from "@/components/CategoryCrossLinks";
import { savoryItems } from "@/data/foodMenuData";

export const metadata: Metadata = {
  title: "Kevyttä ja täyttävää — Café Maria",
  description:
    "Nopeita, tuoreita suolaisia herkkuja kupin kylkeen — wrapit, ciabattat ja muut täyttävät välipalat.",
};

export default function ValipalatPage() {
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
          eyebrow="Ei vain kahvia"
          title="Kevyttä ja täyttävää"
          description="Nopeita, tuoreita herkkuja kupin kylkeen — ei raskasta ateriaa, vaan jotain oikeasti täyttävää kiireeseenkin."
          items={savoryItems}
          columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />
        <CategoryCrossLinks current="valipalat" />
      </div>
      <Footer />
    </main>
  );
}
