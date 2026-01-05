import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { TargetAudience } from "@/components/TargetAudience";
import { Testimonials } from "@/components/Testimonials";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <Hero />
      <section id="publico">
        <TargetAudience />
      </section>
      <section id="beneficios">
        <Benefits />
      </section>
      <section id="sobre">
        <About />
      </section>
      <section id="depoimentos">
        <Testimonials />
      </section>
      <section id="contato">
        <CTA />
      </section>
    </main>
  );
}
