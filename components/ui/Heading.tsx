import { ReactNode } from "react";

type Level = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  children: ReactNode;
  level?: Level;
  className?: string;
}

const sizeMap: Record<Level, string> = {
  h1: "text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight",
  h2: "text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight",
  h3: "text-xl md:text-2xl leading-snug",
  h4: "text-lg md:text-xl leading-snug",
};

export default function Heading({ children, level = "h2", className = "" }: HeadingProps) {
  const Tag = level;
  return (
    <Tag
      className={`font-heading font-normal text-[#312f2c] ${sizeMap[level]} ${className}`}
      style={{ fontFamily: "var(--font-playfair)" }}
    >
      {children}
    </Tag>
  );
}
