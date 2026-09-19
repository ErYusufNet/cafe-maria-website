import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Space_Mono } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { ProductModalProvider } from "@/context/ProductModalContext";
import ProductModal from "@/components/ProductModal";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Café Maria — Lämmintä paahtoa, tehty sydämellä",
  description:
    "Koe käsityöläiskahvi aivan uudella tavalla. Café Maria — pieni, lämminhenkinen kahvila jossa jokainen kuppi on huolella valmistettu hetki.",
  keywords: [
    "kahvila",
    "käsityöläiskahvi",
    "espresso",
    "Suomi",
    "cafe maria",
    "kahvila Suomessa",
    "specialty coffee",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${spaceMono.variable} bg-[#FEFAE6] text-[#2B231C] antialiased`} suppressHydrationWarning>
        <CartProvider>
          <ProductModalProvider>
            {children}
            <ProductModal />
          </ProductModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}
