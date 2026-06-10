"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.payload)
      );

      setMessage(" Login successful");

      setTimeout(() => {
        router.push("/items");
      }, 1000);

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-2 text-purple-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Login to continue shopping
        </p>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              border
              border-purple-200
              p-3
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-purple-400
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              border
              border-purple-200
              p-3
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-purple-400
            "
          />

          <button
            type="submit"
            className="
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-yellow-400
              text-white
              p-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition
            "
          >
            Login
          </button>

        </form>

        {message && (
          <p className="mt-4 text-center font-medium text-purple-600">
            {message}
          </p>
        )}

      </div>

    </div>
  );
}