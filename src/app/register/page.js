"use client";

import { useState } from "react";
import api from "../../lib/api";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/register", form);

      setMessage(response.data.message);

      setForm({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return ( 
  <div className="min-h-screen flex items-center justify-center p-6">
    <div className="card w-full max-w-md">

      <h1 className="text-4xl font-bold text-center mb-2 text-pink-600">
        Create Account 
      </h1>

      <p className="text-center text-gray-600 mb-6">
        Join SBD Store Today!
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border border-pink-200 p-3 rounded-xl"
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border border-pink-200 p-3 rounded-xl"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border border-pink-200 p-3 rounded-xl"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="border border-pink-200 p-3 rounded-xl"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border border-pink-200 p-3 rounded-xl"
        />

        <button
          type="submit"
          className="
            bg-gradient-to-r
            from-pink-500
            via-purple-500
            to-yellow-400
            text-white
            p-3
            rounded-xl
            font-semibold
          "
        >
          Register
        </button>
      </form>

            {message && (
        <p className="mt-4 text-center font-medium">
          {message}
        </p>
      )}
    </div>
  </div>
  );
}