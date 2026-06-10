"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "../../../lib/api";

import {
  Laptop,
  Mouse,
  Keyboard,
  Monitor,
  Package,
} from "lucide-react";

export default function ItemDetailPage() {
  const params = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await api.get(
        `/items/${params.id}`
      );

      setItem(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const getIcon = (name) => {
    if (!name) return <Package size={90} />;

    switch (name.toLowerCase()) {
      case "laptop":
        return <Laptop size={90} />;

      case "mouse":
        return <Mouse size={90} />;

      case "keyboard":
        return <Keyboard size={90} />;

      case "monitor":
        return <Monitor size={90} />;

      default:
        return <Package size={90} />;
    }
  };

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Product...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">

      <div
        className="
          bg-white
          rounded-3xl
          shadow-xl
          p-10
          w-full
          max-w-2xl
        "
      >

        <div className="flex justify-center text-pink-500 mb-6">
          {getIcon(item.name)}
        </div>

        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
          {item.name}
        </h1>

        <div className="grid gap-4">

          <div className="bg-pink-50 p-4 rounded-xl">
            <p className="text-gray-500">
              Product Name
            </p>

            <p className="font-semibold text-lg">
              {item.name}
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl">
            <p className="text-gray-500">
              Price
            </p>

            <p className="font-semibold text-lg">
              Rp {Number(item.price).toLocaleString()}
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl">
            <p className="text-gray-500">
              Available Stock
            </p>

            <p className="font-semibold text-lg">
              {item.stock}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}