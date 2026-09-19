"use client";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "light" | "dark";
  className?: string;
}

// Mockup'taki "Explore Menu Button" tarzı: yuvarlak hap buton + sonunda küçük ok ikonu
export default function PillButton({ children, href, onClick, variant = "dark", className = "" }: PillButtonProps) {
  const base =
    "inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full text-[0.65rem] uppercase tracking-[0.15em] font-medium transition-all duration-300 cursor-pointer backdrop-blur-md";

  const variants = {
    light:
      "bg-[#FEFAE6]/15 text-[#FEFAE6] border border-[#FEFAE6]/30 hover:bg-[#FEFAE6]/25",
    dark:
      "bg-[#2B231C]/[0.04] text-[#2B231C] border border-[#2B231C]/15 hover:bg-[#2B231C]/[0.08]",
  };

  const iconBg = variant === "light" ? "bg-[#FEFAE6] text-[#2B231C]" : "bg-[#3E4A31] text-[#FEFAE6]";

  const content = (
    <>
      <span style={{ fontFamily: "var(--font-inter)" }}>{children}</span>
      <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1 9L9 1M9 1H2.5M9 1V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}
