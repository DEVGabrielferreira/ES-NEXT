import Link from "next/link";

export function NoEvents() {
  return (
    <div className="min-h-screen bg-sky-800 text-white">
      <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <div className="w-full h-48 bg-[#1e293b] rounded-lg flex items-center justify-center text-white">
            <p className="text-white-600 mb-4">Não há eventos agendados </p>
          </div>
        </div>
      </div>
    </div>
  );
}
