"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "../../lib/api";

import {
  Laptop,
  Mouse,
  Keyboard,
  Monitor,
  Package,
} from "lucide-react";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await api.get("/items");
      setItems(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredItems = items.filter((item) =>
    item.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "laptop":
        return <Laptop size={50} />;

      case "mouse":
        return <Mouse size={50} />;

      case "keyboard":
        return <Keyboard size={50} />;

      case "monitor":
        return <Monitor size={50} />;

      default:
        return <Package size={50} />;
    }
  };

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-5xl font-bold text-center text-pink-600 mb-3">
        Our Products
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Browse products directly from the database
      </p>

      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            p-4
            rounded-2xl
            border
            border-pink-200
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-pink-400
          "
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredItems.map((item) => (
          <Link
            key={item.id}
            href={`/items/${item.id}`}
          >
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                hover:scale-105
                hover:shadow-2xl
                transition
                duration-300
                text-center
                cursor-pointer
                h-full
              "
            >
              <div className="flex justify-center text-pink-500 mb-4">
                {getIcon(item.name)}
              </div>

              <h2 className="text-2xl font-bold text-purple-600">
                {item.name}
              </h2>

              <p className="mt-4 text-lg font-semibold text-yellow-600">
                Rp {Number(item.price).toLocaleString()}
              </p>

              <p className="mt-2 text-gray-500">
                Stock: {item.stock}
              </p>

              <button
                className="
                  mt-5
                  w-full
                  bg-gradient-to-r
                  from-pink-500
                  via-purple-500
                  to-yellow-400
                  text-white
                  py-2
                  rounded-xl
                  font-semibold
                "
              >
                View Details
              </button>
            </div>
          </Link>
        ))}

      </div>

      {filteredItems.length === 0 && (
        <div className="text-center mt-10 text-gray-500">
          No products found
        </div>
      )}

    </div>
  );
}