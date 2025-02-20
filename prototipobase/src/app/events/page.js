"use client";

import { NoEvents } from "./_components/no-events";
import { EventCard } from "./_components/event-card";
import Link from "next/link";

export default function Home() {
  const events = JSON.parse(localStorage.getItem("events")) || [];
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen bg-sky-800 p-4">
        <h1 className="text-white text-2xl font-bold mb-6">Meus Eventos</h1>
        <div className="flex items-center gap-2 mb-2 text-white">
          <Link
            href="../forms"
            className="bg-sky-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit"
          >
            {" "}
            Novo Evento{" "}
          </Link>
          <Link
            href="/"
            className="bg-sky-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit"
          >
            {" "}
            Página Inicial{" "}
          </Link>
        </div>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.map((item, id) => (
              <EventCard {...item} key={id} />
            ))}
          </div>
        ) : (
          <NoEvents />
        )}
      </div>
    </div>
  );
}
