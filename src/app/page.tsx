import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experiences } from "@/components/experiences";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      {/* About */}
      <section id="about" className="scroll-mt-24">
        <Hero />
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      {/* Experiences */}
      <section id="experiences" className="scroll-mt-24">
        <Experiences />
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
