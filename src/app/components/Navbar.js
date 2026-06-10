"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-md px-8 py-4">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-pink-600">
          SBD Store
        </h1>

        <div className="flex gap-6 items-center">

          <Link
            href="/"
            className="text-purple-600 hover:text-pink-500"
          >
            Home
          </Link>

          <Link
            href="/items"
            className="text-purple-600 hover:text-pink-500"
          >
            Products
          </Link>

          <Link
            href="/profile"
            className="text-purple-600 hover:text-pink-500"
          >
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="
              bg-pink-500
              text-white
              px-4
              py-2
              rounded-xl
              hover:bg-pink-600
            "
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}