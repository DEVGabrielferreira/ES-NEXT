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
  const [artist, setArtist] = useState(null);
  const [cachet, setCachet] = useState(0);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [cep, setCep] = useState("");
  const [viaCepError, setViaCepError] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const inputRef = useRef(null);
  const comboboxRef = useRef(null);
  const router = useRouter();

  const handleSearch = async () => {
    try {
      const tokenResponse = await fetch("/api/spotify-token");
      const tokenData = await tokenResponse.json();
      if (!tokenResponse.ok) {
        throw new Error(tokenData.error || "Erro ao obter o token");
      }
      const token = tokenData.token;

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          search
        )}&type=artist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Falha ao buscar os dados dos artistas");
      }

      const result = await response.json();
      setArtistsList(result.artists.items);
      setIsOpen(true);
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

  const fetchAddress = async (cepValue) => {
    if (cepValue.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cepValue}/json/`
        );
        const data = await response.json();
        if (data.erro) {
          setViaCepError("CEP inválido. Verifique e tente novamente.");
          setLogradouro("");
          setCidade("");
          setEstado("");
          setPlace("");
        } else {
          setViaCepError("");
          setLogradouro(data.logradouro || "");
          setCidade(data.localidade || "");
          setEstado(data.uf || "");
          setPlace(`${data.logradouro}, ${data.localidade} - ${data.uf}`);
        }
      } catch (error) {
        setViaCepError("Erro ao buscar CEP. Tente novamente.");
      }
    }
  };

  const handleCepChange = (e) => {
    const cepValue = e.target.value.replace(/\D/g, "");
    setCep(cepValue);
    if (cepValue.length === 8) {
      fetchAddress(cepValue);
    }
  };

  function save() {
    const savedEvents = localStorage.getItem("events");
    const formatedEvents = JSON.parse(savedEvents) || [];
    if (artist == null) {
      setError("Selecione um Artista");
      return;
    }
    if (cachet <= 0) {
      setError("Cache inválido");
      return;
    }
    if (date === "") {
      setError("Escolha uma Data");
      return;
    }
    if (place === "") {
      setError("Selecione um local");
      return;
    }

    const formData = {
      artist: artist,
      cachet: cachet,
      date: date,
      place: place,
    };
    const newEvent = [...formatedEvents, formData];
    localStorage.setItem("events", JSON.stringify(newEvent));
    router.push("/conclusion");
  }

  return (
    <div className="min-h-screen bg-sky-800 text-black">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Formulário de Contratação
        </h1>
        <div className="justify-between flex items-center gap-2 mb-2">
          <Link
            href="/"
            className="bg-sky-300 px-5 py-2 mb-3 rounded-md font-semibold flex items-center justify-center w-fit"
          >
            Página Inicial
          </Link>
          <div className="relative w-80" ref={comboboxRef}>
            <div className="flex">
              <div className="relative flex-grow">
                <input
                  ref={inputRef}
                  type="text"
                  className="w-full px-4 py-2 text-sm border rounded-l-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                disabled={search === ""}
                className="px-4 py-2 text-sm text-white bg-blue-500 mb-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Procurar
              </button>
            </div>
            {isOpen && (
              <ul className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                {artistsList.map((artist, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setArtist(artist);
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Preencha os detalhes para contratar o Artista
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="cep"
                >
                  CEP <span className="text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="cep"
                  type="text"
                  placeholder="Digite o CEP"
                  value={cep}
                  onChange={handleCepChange}
                  maxLength={8}
                />
                {viaCepError && (
                  <p className="text-red-600 text-sm">{viaCepError}</p>
                )}
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
                  placeholder="Endereço completo"
                  onChange={(e) => setPlace(e.target.value)}
                  value={place}
                  readOnly
                />
              </div>
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
          {artist ? (
            <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl text-white font-semibold mb-4">
                {artist.name}
              </h2>
              <Link
                href={artist.external_urls.spotify}
                target="_blank"
                className="text-green-500 font-semibold mb-2 block hover:underline"
              >
                Perfil Spotify
              </Link>
              <div className="mb-4">
                <div className="w-full h-60 flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src={artist.images[0].url}
                    alt={artist.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <p className="text-white mb-4">Informações do Artista</p>
              <ul className="list-disc list-inside text-white">
                <li>Seguidores: {artist.followers.total}</li>
                <li className="text-white mb-4">
                  Popularidade: {artist.popularity}
                </li>
                <li>
                  Gênero:
                  <div className="flex flex-wrap gap-3 mt-1">
                    {artist.genres.map((genre, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-white px-2 py-1 rounded-md"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg ">
              <div className="flex items-center justify-center text-white">
                Por favor, selecione um artista
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
