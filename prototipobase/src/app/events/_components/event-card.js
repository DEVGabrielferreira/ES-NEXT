import Link from "next/link";

export function EventCard(props) {
  return (
    <div className="bg-gray-900 text-white rounded-2xl p-6 w-full max-w-md shadow-lg">
      <h2 className="text-center text-xl font-bold mb-4">
        {props.artist.name}
      </h2>
      <p>Cachê:{props.cachet}</p>
      <p>Data:{props.date}</p>
      <p>Endereço:{props.place}</p>
      <p>Genêro: {props.genres}</p>
    </div>
  );
}
