import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function About() {
  const whatsappLink = buildWhatsAppLink();

  return (
    <div className="section-shell grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-20">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Sobre o Lucas</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Acompanhamento profissional e humano</h2>
        <p className="text-lg text-slate-200">
          Sou Lucas Santos, personal trainer focado em ajudar pessoas a conquistarem resultados reais com treinos
          eficientes, seguros e adaptados à sua rotina. Meu objetivo é simplificar o processo, entregar clareza no
          passo a passo e manter você motivado durante toda a jornada.
        </p>
        <p className="text-slate-300">
          Cada aluno recebe atenção individual, ajustes constantes e estratégias pensadas para evoluir de forma
          sustentável. Vamos construir juntos um plano que caiba no seu dia a dia.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-400"
          >
            Falar agora no WhatsApp
          </a>
          <a
            href="#depoimentos"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
          >
            Ver resultados de alunos
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-slate-950/40" />
        <Image
          src="/images/mulher-segurando-pesos-perto-de-barras_651396-1617.avif"
          alt="Lucas Santos orientando durante treino"
          width={1200}
          height={900}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
