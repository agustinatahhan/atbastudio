import { Hero } from '@/components/sections/Hero'
// import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Services />
      <Projects />
      <CTA />
    </>
  )
}
