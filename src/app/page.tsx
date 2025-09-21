import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
