const audiences = [
  {
    title: "Emagrecimento",
    description: "Protocolos eficientes para redução de gordura com manutenção de massa magra e energia.",
    icon: "🔥",
  },
  {
    title: "Hipertrofia",
    description: "Estratégias de treino progressivo, volume e recuperação para ganhar músculo com qualidade.",
    icon: "🏋️",
  },
  {
    title: "Qualidade de vida",
    description: "Mais disposição no dia a dia, mobilidade, postura e condicionamento sem lesões.",
    icon: "🌱",
  },
  {
    title: "Iniciantes e avançados",
    description: "Planos claros para quem está começando ou periodização completa para atletas experientes.",
    icon: "🎯",
  },
];

export function TargetAudience() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Para quem é</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Treinos pensados para o seu objetivo</h2>
        </div>
        <div className="hidden text-sm text-slate-300 sm:block">Planos flexíveis para rotinas reais.</div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {audiences.map((item) => (
          <div key={item.title} className="card-surface flex gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-2xl">
              <span aria-hidden>{item.icon}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
