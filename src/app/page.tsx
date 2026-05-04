import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import CaseStudies from '@/components/CaseStudies'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <CaseStudies />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}
