import Image from "next/image";
import stage from "../../../public/stage.jpg";
import stage2 from "../../../public/stage2.jpg";
import { Check, MapPin } from "lucide-react";

export function About() {
  return (
    <section className="bg-[#f5f7fa] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={stage}
                alt="Show a noite"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={stage2}
                alt="Apresentação"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Até que você tenha vivido a emoção de um show incrível, uma parte
              da sua alma permanece adormecida. Na ES Stage, acreditamos no
              poder da música e da arte para despertar emoções e criar momentos
              inesquecíveis. Com uma curadoria de artistas excepcionais, suporte
              dedicado e um processo seguro e simples, sua experiência conosco
              será tão única quanto o seu evento.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-blue-500" /> Atuando no mercado desde
                2006.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-blue-500" /> Equipe especializada em
                produção de eventos.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-blue-500" /> Qualidade e profissionalismo
                são nossas prioridades.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="#contato"
                className="bg-blue-500 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                Entre em contato
              </a>

              <a
                href="#endereco"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md border border-blue-500 text-blue-500"
              >
                <MapPin className="w-5 h-5" />
                Nosso endereço
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
