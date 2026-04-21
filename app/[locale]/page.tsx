import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { MiniNosotros } from "@/components/sections/MiniNosotros";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Services />
      <Projects />
      <MiniNosotros />
      <CTA />
    </>
  );
}
