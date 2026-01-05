import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const stats = [
  { label: "Alunos acompanhados", value: "120+" },
  { label: "Planos personalizados", value: "100%" },
  { label: "Foco em saúde e performance", value: "Equilíbrio" },
];

export function Hero() {
  const whatsappLink = buildWhatsAppLink();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/jonathan-borba-lrqptqs7nqq-unsplash.avif"
          alt="Atleta treinando com personal trainer"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900/80" />
      </div>

      <div className="section-shell relative flex flex-col gap-12 py-20 lg:py-28">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-brand-100 ring-1 ring-white/10 backdrop-blur">
            Lucas Santos Personal
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Transforme seu corpo com acompanhamento profissional de verdade
          </h1>
          <p className="text-lg text-slate-200 sm:text-xl">
            Treinos personalizados, foco em resultados reais e acompanhamento direto com Lucas Santos.
            Alcance o seu próximo nível com segurança, estratégia e constância.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-brand-400 focus-visible:outline-none"
            >
              Fale no WhatsApp
            </a>
            <a
              href="#beneficios"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              Ver benefícios
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="card-surface p-6 shadow-inner shadow-black/10">
              <p className="text-sm uppercase tracking-[0.08em] text-slate-300">{item.label}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
              <div className="mt-3 h-[3px] w-14 rounded-full bg-gradient-to-r from-brand-400 to-brand-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
