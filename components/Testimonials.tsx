import Image from "next/image";

const testimonials = [
  {
    name: "Mariana Costa",
    result: "-8kg em 3 meses",
    text: "Lucas montou um plano realista para minha rotina corrida. Ganhei confiança e energia para treinar sem parar.",
    image: "/images/mulher-segurando-pesos-perto-de-barras_651396-1617.avif",
  },
  {
    name: "Carlos Almeida",
    result: "+5kg de massa magra",
    text: "O acompanhamento semanal fez toda diferença. Ajustes precisos e feedbacks rápidos para evoluir sem lesionar.",
    image: "/images/cbum-1730138756-3488979227448699344-186611121-1-.avif",
  },
  {
    name: "Juliana Ribeiro",
    result: "Mais disposição e postura",
    text: "Os treinos são objetivos e claros. Melhorou minha coluna, sono e ânimo para o trabalho e família.",
    image: "/images/fisioculturista7.avif",
  },
];

export function Testimonials() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-8 max-w-2xl space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Prova social</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Resultados reais de alunos</h2>
        <p className="text-slate-200">Depoimentos que mostram como o acompanhamento próximo acelera o progresso.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="card-surface flex flex-col gap-4 p-6">
            <div className="relative h-44 overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="text-sm font-medium text-brand-200">{item.result}</p>
            </div>
            <p className="text-slate-200">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
