"use client";
import BeerTile from "@/components/common/BeerTile";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { BeerProps } from "@/interfaces/beerInterface";
import { fetchBeers } from "@/service/fetchBeers";
import Link from "next/link";

import { useState, useEffect, useRef, useCallback } from "react";

export default function Collection() {
  const [beers, setBeers] = useState<BeerProps[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const lastBeerElementRef = useRef(null);
  console.log(beers);

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    const newBeers = await fetchBeers(page);
    if (newBeers.length === 0 && isInitialLoad) {
      setIsInitialLoad(false);
    } else {
      setBeers((prev) => [...prev, ...newBeers]);
      setPage((prev) => prev + 1);
    }
    setIsLoading(false);
  }, [page, isInitialLoad]);

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        setIsInitialLoad(false);
        loadMore();
      }
    });
    if (lastBeerElementRef.current) {
      observer.observe(lastBeerElementRef.current);
    }
    return () => observer.disconnect();
  }, [loadMore, isLoading]);

  return (
    <main className="min-h-screen max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {beers.length === 0 && !isInitialLoad ? (
        <div className="col-span-3 text-center text-xl font-semibold">
          Not found any beers.
        </div>
      ) : (
        beers.map((beer, index) => (
          <Link
            key={beer.id + index}
            href={{
              pathname: `/collection/${beer.id}`,
              query: { data: JSON.stringify(beer) },
            }}
          >
            <div ref={index === beers.length - 1 ? lastBeerElementRef : null}>
              <BeerTile {...beer} />
            </div>
          </Link>
        ))
      )}
      {isLoading &&
        (isInitialLoad ? (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-700">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="col-span-3 text-center mt-4">
            <LoadingSpinner />
          </div>
        ))}
    </main>
  );
}
