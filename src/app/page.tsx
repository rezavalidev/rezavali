import About from "@/components/home/About"
import Footer from "@/components/home/Footer"
import Hero from "@/components/home/Hero"
import Navbar from "@/components/home/Navbar"
import Projects from "@/components/home/Projects"
import Services from "@/components/home/Services"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-8 md:px-8">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Footer />
      </div>
    </main>
  )
}
