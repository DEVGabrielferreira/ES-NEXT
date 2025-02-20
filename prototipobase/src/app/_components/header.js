import Link from "next/link";
import weeknd from "../../../public/weeknd.png";
import Image from "next/image";

export function Header() {
  return (
    <section className="bg-sky-900 text-white overflow-hidden">
      <div>
        <Image
          src={weeknd}
          alt="The Weeknd"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 md:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg: grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg: text-5xl font-bold leading-10 ">
              Seu evento merece talento, qualidade e momentos inesquecíveis.
            </h1>
            <p className="lg: text-lg">
              A <strong>ES Stage</strong> oferece os melhores artistas e bandas
              para garantir que sua festa, show ou celebração seja única e
              memorável.
            </p>
            <div className="flex items-center gap-2">
              {" "}
              <Link
                href="../forms"
                className="bg-sky-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit"
              >
                {" "}
                Novo Evento{" "}
              </Link>
              <Link
                href="./events"
                className="bg-sky-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit"
              >
                {" "}
                Meus eventos{" "}
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-sm mb-4">
                Realize orçamentos, consulte cachês e agendamentos.
              </p>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={weeknd}
              alt="The Weeknd"
              className="object-contain"
              width={500}
              height={300}
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
