import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-orange-50">
      <div className="text-center space-y-6 p-8 max-w-lg">
        <h1 className="text-5xl font-bold text-orange-800">
          🥩 Planificador de Asado
        </h1>
        <p className="text-xl text-orange-600">
          Organizá tu asado perfecto: participantes, cantidades y costos compartidos.
        </p>
        <Link
          href="/participants"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Ir al taller →
        </Link>
      </div>
    </main>
  );
}
