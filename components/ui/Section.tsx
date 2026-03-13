import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}
