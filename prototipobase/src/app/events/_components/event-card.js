import Link from "next/link";

export function EventCard(props) {
  return (
    <div className="bg-gray-900 text-white rounded-2xl p-6 w-full max-w-md shadow-lg">
      <h2 className="text-center text-xl font-bold mb-4">Detalhes do Evento</h2>
      <p>cachet:{props.cachet}</p>
      <p>date:{props.date}</p>
      <p>place:{props.place}</p>
    </div>
  );
}
