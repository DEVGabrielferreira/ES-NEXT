import Image from "next/image";
import mic from "../../../../public/mic.png";
import Link from "next/link";

export function Conclusion() {
  return (
    <div className="min-h-screen bg-sky-800 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Negócio fechado.
        </h1>

        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-center font-semibold mb-4">
            Seu evento foi agendado com sucesso!
          </h2>
          <Image
            src={mic}
            alt="conclusion"
            style={{
              width: "500px",
              height: "500px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          />
          <div className="mb-4">
            <div className="w-full h-48 bg-[#1e293b] rounded-lg flex items-center justify-center text-white">
              <p className="text-white-600 mb-4">
                Tudo certo! Sua solicitação foi confirmada. Em breve, você
                receberá um e-mail com todos os detalhes do evento. Se precisar
                ajustar alguma informação ou tiver dúvidas, nossa equipe está à
                disposição para ajudar. Agora é só aguardar e se preparar para
                uma experiência incrível!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="bg-sky-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit"
            >
              {" "}
              Página Inicial{" "}
            </Link>

            <Link
              href="/events"
              className="bg-sky-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit"
            >
              {" "}
              Meus eventos{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
