"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-pink-600 text-center mb-2">
          My Profile
        </h1>

        <p className="text-center text-gray-500 mb-8">
          User Information
        </p>

        <div className="space-y-4">

          <div className="bg-pink-50 p-5 rounded-xl">

            <p className="mb-3">
              <strong>Name:</strong> {user.name}
            </p>

            <p className="mb-3">
              <strong>Username:</strong> {user.username}
            </p>

            <p className="mb-3">
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>

          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="bg-yellow-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold">
                4
              </h3>

              <p>Products</p>
            </div>

            <div className="bg-purple-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold">
                Active
              </h3>

              <p>Account</p>
            </div>

            <div className="bg-green-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold">
                User
              </h3>

              <p>Status</p>
            </div>

          </div>

          <Link
            href="/items"
            className="
              block
              text-center
              mt-6
              bg-gradient-to-r
              from-pink-500
              via-purple-500
              to-yellow-400
              text-white
              py-3
              rounded-xl
              font-semibold
            "
          >
            Browse Products
          </Link>

        </div>

      </div>

    </div>
  );
}