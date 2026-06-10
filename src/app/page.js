import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <div className="card text-center max-w-xl">

        <h1 className="text-5xl font-bold text-pink-600 mb-4">
          SBD Store
        </h1>

        <p className="text-gray-600 mb-8">
          Welcome to our colorful online store
        </p>

        <div className="flex gap-4 justify-center">

          <Link
            href="/register"
            className="
              px-6 py-3 rounded-xl
              bg-pink-500 text-white
            "
          >
            Register
          </Link>

          <Link
            href="/login"
            className="
              px-6 py-3 rounded-xl
              bg-purple-500 text-white
            "
          >
            Login
          </Link>

          <Link
            href="/items"
            className="
              px-6 py-3 rounded-xl
              bg-yellow-400 text-black
            "
          >
            Products
          </Link>

        </div>

      </div>

    </div>
  );
}