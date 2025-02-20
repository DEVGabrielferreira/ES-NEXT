"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slipknot from "../../../public/slipknot.jpg";
import linkin from "../../../public/linkin-park.jpg";
import jorge from "../../../public/jorge-ben.jpg";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Os gigantes do nu metal desembarcam para uma temporada épica de shows no Brasil! Com setlist recheado de clássicos e uma energia inigualável, a banda promete noites inesquecíveis para os fãs. Não perca essa oportunidade única!",
    author: "Linkin Park",
    image: linkin,
  },
  {
    content:
      "Prepare-se para uma experiência brutal! Slipknot traz sua turnê avassaladora para o Brasil, garantindo performances insanas, máscaras icônicas e um som pesado que faz tremer qualquer arena. Os fãs do metal não podem perder!",
    author: "Slipknot",
    image: slipknot,
  },
  {
    content:
      "O mestre do samba rock está brilhando nos palcos brasileiros! Com sua energia contagiante e hits que atravessam gerações, Jorge Ben embala o público em noites mágicas de pura música e swing. Não fique de fora!",
    author: "Jorge Ben",
    image: jorge,
  },
];

export function Alta() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Confira os artistas em alta no Brasil!
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>

                      <p className="text-gray-200">{item.content}</p>

                      <div>
                        <p className="font-bold">{item.author}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
