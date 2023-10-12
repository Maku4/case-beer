import { BeerDetails, BeerDetailsProps } from "@/components/BeerDetails";

export function Preview({ beer }: BeerDetailsProps) {
  return (
    <div>
      <BeerDetails beer={beer} />
    </div>
  );
}
