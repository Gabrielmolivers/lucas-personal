import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CTA() {
  const whatsappLink = buildWhatsAppLink();

  return (
    <div className="section-shell pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-brand-500/20 via-brand-500/15 to-slate-900 p-10 shadow-xl sm:p-14">
        <div className="absolute right-10 top-8 h-20 w-20 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-100">Pronto para começar?</p>
            <h3 className="text-3xl font-bold text-white sm:text-4xl">
              Chegou a hora de mudar. Comece hoje seu acompanhamento com um profissional.
            </h3>
            <p className="text-slate-200">Clique e fale diretamente com o Lucas para montar seu plano.</p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-glow transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
