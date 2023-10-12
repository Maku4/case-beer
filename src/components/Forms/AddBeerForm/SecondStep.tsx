import { Details } from "./MultiStepForm";

type SecondStepProps = {
  handleChange: (
    setter: React.Dispatch<React.SetStateAction<Details>>
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
  details: Details;
};

export function SecondStep({
  handleChange,
  setDetails,
  details,
}: SecondStepProps) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md space-y-4 text-black">
      <div className="flex flex-col space-y-2 ">
        <label htmlFor="name" className="font-semibold">
          Bottle Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter bottle name"
          onChange={handleChange(setDetails)}
          className="border rounded-md p-2 "
          value={details.name}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="first_brewed" className="font-semibold">
          First Brewed
        </label>
        <input
          type="month"
          id="first_brewed"
          name="first_brewed"
          placeholder="Select date"
          onChange={handleChange(setDetails)}
          value={details.first_brewed}
          className="border rounded-md p-2 "
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="tagline" className="font-semibold">
          Tagline
        </label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          placeholder="Enter tagline"
          onChange={handleChange(setDetails)}
          value={details.tagline}
          className="border rounded-md p-2 "
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="description" className="font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          onChange={handleChange(setDetails)}
          value={details.description}
          className="border rounded-md p-2 "
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="abv" className="font-semibold">
            ABV
          </label>
          <input
            type="number"
            id="abv"
            name="abv"
            placeholder="Enter ABV"
            onChange={handleChange(setDetails)}
            value={details.abv}
            className="border rounded-md p-2 "
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="ibu" className="font-semibold">
            IBU
          </label>
          <input
            type="number"
            id="ibu"
            name="ibu"
            placeholder="Enter IBU"
            onChange={handleChange(setDetails)}
            value={details.ibu}
            className="border rounded-md p-2 "
          />
        </div>
      </div>
    </div>
  );
}
