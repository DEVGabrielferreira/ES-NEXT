"use client";
import useEmblaCarousel from "embla-carousel-react";

const services = [
  {
    title: "Artistas profissionais e qualificados.",
    description:
      "Contamos com uma curadoria rigorosa de artistas e bandas, garantindo que todos os profissionais sejam experientes, talentosos e preparados para diversos tipos de eventos. Seja um show acústico, uma festa corporativa ou um casamento, nossos artistas entregam performances de alta qualidade.",
  },
  {
    title: "Processo de Contratação Seguro e Transparente",
    description:
      "Oferecemos um processo de contratação claro e seguro, com contrato detalhado e suporte jurídico. Você saberá exatamente o que está contratando, sem surpresas ou custos ocultos. Além disso, garantimos a pontualidade e o cumprimento de todas as cláusulas acordadas.",
  },
  {
    title: "Suporte Personalizado 24/7",
    description:
      "Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para ajudar em qualquer etapa do processo. Desde a escolha do artista ideal até a logística do evento, estamos aqui para garantir que tudo saia perfeito. Conte conosco para resolver qualquer imprevisto!",
  },
];

export function Advantages() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  return (
    <section className="bg-sky-700 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Vantagens</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#134] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-xl my-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm select-none">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
