"use client";
import { BeerDetails } from "@/components/BeerDetails";
import { BeerProps } from "@/interfaces/beerInterface";

import { useSearchParams } from "next/navigation";

export default function BeerDetailsPage() {
  const searchParams = useSearchParams();

  const beerData = searchParams.get("data");
  if (!beerData) return "No data found";
  const beer = JSON.parse(beerData) as BeerProps;

  return <BeerDetails beer={beer} />;
}
