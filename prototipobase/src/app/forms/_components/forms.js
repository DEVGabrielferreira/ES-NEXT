"use client";
import { useRef, useState } from "react";
import abel from "../../../../public/abel.jpg";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Forms() {
  const [artistsList, setArtistsList] = useState([]);
  const [search, setSearch] = useState("");
  const [artist, setArtist] = useState({});
  const [cachet, setCachet] = useState(0);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const comboboxRef = useRef(null);
  const router = useRouter();
  const handleSearch = async () => {
    try {
      const token =
        "BQAF5Z5goBeyER9oIxY6h3DscVSTC4721YLuQUaDPz2RBB0HHB1dLXzhl_ffKh_gWB3seeKg6f3C7xN49DDeNpbcshTW8WmuGLNozsVqNo1qMC3kVdgyfubp9IhSuw4mAiNUuyyb7u4";
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${search}&type=artist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setArtistsList(result.artists.items);
    } catch (err) {
      setError(err.message);
    }
  };
  const clearInput = () => {
    setSearch("");
    setArtistsList([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  function save() {
    const savedEvents = localStorage.getItem("events");
    const formatedEvents = JSON.parse(savedEvents) || [];
    if (cachet <= 0) {
      setError("Cache invalido");
      return;
    }
    if (date == "") {
      setError("Escolha uma Data");
      return;
    }
    if (place == "") {
      setError("Selecione um local");
      return;
    }

    const formData = {
      cachet: cachet,
      date: date,
      place: place,
    };
    const newEvent = [...formatedEvents, formData];
    localStorage.setItem("events", JSON.stringify(newEvent));
    router.push("/conclusion");
  }
  return (
    <div className="min-h-screen bg-sky-800 text-white">
      <div className="container mx-auto p-4">
        {artist && <pre>{JSON.stringify(artist)}</pre>}
        <h1 className="text-3xl font-bold text-center mb-6">
          Formulário de Contratação
        </h1>

        <div className="relative w-80" ref={comboboxRef}>
          <div className="flex">
            <div className="relative flex-grow">
              <input
                ref={inputRef}
                type="text"
                className="w-full px-4 py-2 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Pesquisar por artista..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsOpen(false)}
              />
              {search && (
                <button
                  onClick={clearInput}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <button
              onClick={handleSearch}
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              pesquisar
            </button>
          </div>
          {isOpen && (
            <ul className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
              {artistsList.map((artist, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearch(artist);
                    setIsOpen(false);
                  }}
                >
                  {artist.name}
                </li>
              ))}
              {artistsList.length === 0 && (
                <li className="px-4 py-2 text-sm text-gray-500">
                  Nenhum artista encontrado.
                </li>
              )}
            </ul>
          )}
        </div>

        <Link
          href="/"
          className="bg-sky-300 px-5 py-2 mb-3 rounded-md font-semibold flex items-center justify-center w-fit"
        >
          {" "}
          Página Inicial{" "}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Preencha os detalhes para contratar o Artista
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="cache"
                >
                  Cachê <span className="text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="cachet"
                  type="number"
                  placeholder="Valor"
                  onChange={(e) => setCachet(e.target.value)}
                  value={cachet}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="date"
                >
                  Data <span className="text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                  placeholder="dd/mm/aa"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Local do evento <span className="text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Cidade do evento"
                  onChange={(e) => setPlace(e.target.value)}
                  value={place}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={save}
                >
                  Enviar
                </button>

                {error && (
                  <div className="p-4 bg-red-600">
                    <p className="text-white font-bold">{error}</p>
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">The Weeknd</h2>

            <div className="mb-4">
              <div className="w-full h-48 bg-[#1e293b] rounded-lg flex items-center justify-center text-gray-500">
                <Image
                  src={abel}
                  alt="Abel"
                  className="object-contain"
                  width={300}
                  height={300}
                  quality={100}
                  priority
                />
              </div>
            </div>

            <p className="text-white mb-4">Informações do Artista</p>

            <p className="text-white-600 mb-4">
              The Weeknd, nome artístico de Abel Makkonen Tesfaye, é um cantor,
              compositor e produtor musical canadense. Conhecido por sua voz
              distintiva e produções atmosféricas, ele se tornou um dos artistas
              mais influentes da música pop e R&B contemporânea.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>Gêneros: R&B, Pop, Synth-pop</li>
              <li>
                Álbuns notáveis: "After Hours", "Starboy", "Beauty Behind the
                Madness"
              </li>
              <li>
                Prêmios: Múltiplos Grammy Awards, Billboard Music Awards, e
                American Music Awards
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
