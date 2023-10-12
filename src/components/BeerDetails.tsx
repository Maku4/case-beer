import { BeerProps } from "@/interfaces/beerInterface";
import { DefaultBeer } from "@/utils/DefaultBeer";

import Image from "next/image";

export interface BeerDetailsProps {
  beer: BeerProps;
}

export function BeerDetails({ beer }: BeerDetailsProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0">
        <div className="flex-shrink-0 w-full flex items-center justify-center center mr-8 md:w-auto">
          {beer.image_url ? (
            <Image
              src={beer.image_url}
              alt={beer.name}
              width={200}
              height={300}
              className="h-auto "
            />
          ) : (
            <DefaultBeer />
          )}
        </div>

        <div className="flex-grow space-y-3">
          <h1 className="text-3xl font-bold">{beer.name}</h1>
          <p className="text-xl italic">{beer.tagline}</p>
          <p>{beer.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <span>
              <strong>ABV:</strong> {beer.abv}%
            </span>
            <span>
              <strong>IBU:</strong> {beer.ibu}
            </span>
          </div>
          {beer.ingredients?.malt && (
            <div>
              <h2 className="text-2xl font-bold">Ingredients:</h2>
              <h3>Malt:</h3>
              <ul className="list-disc list-inside">
                {beer.ingredients.malt.map((m) => (
                  <li key={m.name}>
                    {m.name} - {m.amount.value} {m.amount.unit}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {beer.food_pairing && (
            <div>
              <h2 className="text-2xl font-bold">Food Pairing:</h2>
              <ul className="list-disc list-inside">
                {beer.food_pairing.map((food) => (
                  <li key={food}>{food}</li>
                ))}
              </ul>
            </div>
          )}
          <p>
            <strong>Brewers Tips:</strong> {beer.brewers_tips}
          </p>
        </div>
      </div>
    </div>
  );
}
