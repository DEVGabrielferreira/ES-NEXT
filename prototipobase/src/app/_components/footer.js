import rir from "../../../public/rir.png";
import knot from "../../../public/knot.jpg";
import lolla from "../../../public/lolla.jpg";
import summer from "../../../public/summer.png";
import tomorrowland from "../../../public/tomorrowland.png";
import town from "../../../public/town.png";
import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Rock in Rio", logo: rir },
  { name: "Knotfest Brasil", logo: knot },
  { name: "Lollapalooza Brasil", logo: lolla },
  { name: "Summer Breeze Brasil", logo: summer },
  { name: "The Town", logo: town },
  { name: "Tomorrowland Brasil", logo: tomorrowland },
];

export function Footer() {
  return (
    <section className="bg-sky-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Eventos parceiros
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-black p-1 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">ES Stage</h3>
            <p className="mb-4">Alguns direitos reservados.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: es@stage.com</p>
            <p>Telefone: (21) 99999-9999</p>
            <p>São Paulo | SP</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="#" target="_blank">
                <FacebookLogo className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <InstagramLogo className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <YoutubeLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
