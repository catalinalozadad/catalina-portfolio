import Hero from "../components/Hero"
import SelectedWork from "../components/SelectedWork"
import ProjectCategories from "../components/ProjectCategories"
import About from "../components/About"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <ProjectCategories />
      <About />
      <Footer />
    </main>
  )
}