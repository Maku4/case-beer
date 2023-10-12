"use client";
import BeerTile from "@/components/common/BeerTile";
import { BeerProps } from "@/interfaces/beerInterface";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CustomCollection() {
  const [customBeers, setCustomBeers] = useState([]);

  useEffect(() => {
    const storedBeers = JSON.parse(localStorage.getItem("customBeers") ?? "[]");
    setCustomBeers(storedBeers);
  }, []);

  if (customBeers.length === 0) {
    return (
      <main className="min-h-screen max-w-screen-xl mx-auto p-4 flex flex-col justify-center items-center space-y-6">
        <h2 className="text-2xl font-bold">No Beers Found 🍺</h2>
        <p className="text-lg text-center">
          We could not find any beers in the collection. You can add a custom
          one to get started!
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {customBeers.map((beer: BeerProps, index) => (
        <Link
          key={beer.name + index}
          href={{
            pathname: `/collection/${beer.name}`,
            query: { data: JSON.stringify(beer) },
          }}
        >
          <BeerTile {...beer} />
        </Link>
      ))}
    </main>
  );
}
