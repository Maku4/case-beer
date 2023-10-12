import { Button } from "@/components/common/Button";

type Malt = {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
};

type MaltKey = "name" | "amount";

type MaltUpdateValue =
  | string
  | {
      value: number;
      unit: string;
    };

type IngredientsState = {
  malt: Malt[];
  food_pairing: string[];
  brewers_tips: string;
};

type ThirdStepProps = {
  handleChange: (
    setter: React.Dispatch<React.SetStateAction<IngredientsState>>
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  ingredients: IngredientsState;
  setIngredients: React.Dispatch<React.SetStateAction<IngredientsState>>;
};

export function ThirdStep({
  handleChange,
  ingredients,
  setIngredients,
}: ThirdStepProps) {
  const addMalt = () => {
    setIngredients((prev) => ({
      ...prev,
      malt: [...prev.malt, { name: "", amount: { value: 0, unit: "grams" } }],
    }));
  };

  const addFoodPairing = () => {
    setIngredients((prev) => ({
      ...prev,
      food_pairing: [...prev.food_pairing, ""],
    }));
  };

  const updateFoodPairing = (index: number, value: string) => {
    const newFoodPairings = [...ingredients.food_pairing];
    newFoodPairings[index] = value;
    setIngredients((prev) => ({ ...prev, food_pairing: newFoodPairings }));
  };

  const updateMalt = (index: number, key: MaltKey, value: MaltUpdateValue) => {
    const newMalts = [...ingredients.malt];

    if (key === "name") {
      newMalts[index].name = value as string;
    } else if (key === "amount") {
      newMalts[index].amount = value as { value: number; unit: string };
    }

    setIngredients((prev) => ({ ...prev, malt: newMalts }));
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md space-y-6 text-black">
      <div>
        <h2 className="font-semibold text-xl mb-4">Malts</h2>
        {ingredients?.malt?.map((malt, idx) => (
          <div key={idx} className="flex space-x-4 mb-2">
            <input
              className="border rounded-md p-2 flex-grow"
              placeholder="Malt name"
              value={malt.name}
              onChange={(e) => updateMalt(idx, "name", e.target.value)}
            />
            <input
              type="number"
              className="border rounded-md p-2 w-1/4"
              placeholder="Amount (grams)"
              value={malt.amount.value}
              onChange={(e) =>
                updateMalt(idx, "amount", {
                  ...malt.amount,
                  value: Number(e.target.value),
                })
              }
            />
          </div>
        ))}
        <Button
          ver="secondary"
          onClick={addMalt}
          className="border rounded-md px-4 py-2"
        >
          Add Malt
        </Button>
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-4">Food Pairings</h2>
        {ingredients?.food_pairing?.map((food, idx) => (
          <div key={idx} className="mb-2">
            <input
              className="border rounded-md p-2 w-full"
              placeholder="Food Pairing"
              value={food}
              onChange={(e) => updateFoodPairing(idx, e.target.value)}
            />
          </div>
        ))}
        <Button
          ver="secondary"
          onClick={addFoodPairing}
          className="border rounded-md px-4 py-2"
        >
          Add Food Pairing
        </Button>
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-4">Brewers Tips</h2>
        <textarea
          className="border rounded-md p-2 w-full"
          placeholder="Enter brewer's tips"
          name="brewers_tips"
          onChange={handleChange(setIngredients)}
          value={ingredients.brewers_tips}
        />
      </div>
    </div>
  );
}
