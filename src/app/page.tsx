import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Experience } from "@/components/experience";
import { Creds } from "@/components/creds";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="wrap">
      <Hero />
      <Work />
      <Experience />
      <Creds />
      <Contact />
      <Footer />
    </main>
  );
}
