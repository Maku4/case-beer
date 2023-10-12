import { DefaultBeer } from "@/utils/DefaultBeer";
import Image from "next/image";

type BeerTileProps = {
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url?: string;
  abv: number;
  ibu: number;
};

function BeerTile({
  name,
  tagline,
  first_brewed,
  image_url,
  abv,
  ibu,
}: BeerTileProps) {
  return (
    <div className="bg-white p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg m-4 cursor-pointer overflow-hidden">
      <div className="w-full h-56 relative flex items-center justify-center ">
        {image_url ? (
          <Image
            width={300}
            height={150}
            src={image_url}
            alt={name}
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        ) : (
          <DefaultBeer />
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-1">{name}</h2>
        <p className="text-gray-600 italic mb-2">{tagline}</p>
        <p className="text-sm text-gray-500 mb-4">
          First Brewed: {first_brewed}
        </p>
        <div className="flex justify-between">
          <p className="text-gray-700 font-medium">ABV: {abv}%</p>
          <p className="text-gray-700 font-medium">IBU: {ibu}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerTile;
