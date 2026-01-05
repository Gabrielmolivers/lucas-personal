const benefits = [
  {
    title: "Treinos 100% personalizados",
    description: "Planilhas adaptadas à sua rotina, preferências e histórico, com ajustes contínuos.",
    icon: "📋",
  },
  {
    title: "Acompanhamento profissional",
    description: "Contato direto com o personal para tirar dúvidas, corrigir execução e manter motivação.",
    icon: "🤝",
  },
  {
    title: "Evolução monitorada",
    description: "Métricas, fotos e feedbacks frequentes para garantir progresso sem estagnar.",
    icon: "📈",
  },
  {
    title: "Saúde e performance",
    description: "Treinos seguros, eficientes e pensados para performance e bem-estar a longo prazo.",
    icon: "⚡",
  },
];

export function Benefits() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-8 max-w-2xl space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Benefícios</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Metodologia que entrega resultado</h2>
        <p className="text-slate-200">
          Combinação de prescrição inteligente, suporte contínuo e ajustes precisos para você evoluir com segurança.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="card-surface group relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/15 text-xl">
                <span aria-hidden>{benefit.icon}</span>
              </span>
              <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
            </div>
            <p className="mt-3 text-slate-200">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
