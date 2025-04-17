
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 p-10 flex flex-col items-center space-y-10">
      <h1 className="text-3xl font-bold text-center">Welcome to Kisantu-0</h1>
      <p className="text-center max-w-xl text-sm text-neutral-500">
        The beginning of the Nkisi Network — a living, fractal archive of healing, memory, and resistance.
      </p>
      <div className="flex flex-col space-y-4 mt-8 w-full max-w-xs">
        <Link href="/cloth" className="w-full text-center bg-brown-700 text-white py-3 rounded-lg hover:bg-brown-800">
          🌿 View Status Cloth
        </Link>
        <Link href="/log" className="w-full text-center bg-neutral-800 text-white py-3 rounded-lg hover:bg-neutral-900">
          📖 Nkisi Logbook
        </Link>
        <Link href="/sync" className="w-full text-center bg-green-700 text-white py-3 rounded-lg hover:bg-green-800">
          🪡 Sync Cloth Archive
        </Link>
        <Link href="/beads" className="w-full text-center bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800">
          🧿 View Nkisi Beads
        </Link>
      </div>
    </main>
  );
}
