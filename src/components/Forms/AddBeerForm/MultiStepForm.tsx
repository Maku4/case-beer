import { useId, useState } from "react";
import { Button } from "../../common/Button";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";
import { Preview } from "./Preview";

enum Steps {
  UPLOAD_IMAGE = 1,
  DETAILS,
  INGREDIENTS,
  PREVIEW,
}

export type Details = {
  name: string;
  first_brewed: string;
  tagline: string;
  description: string;
  abv: number;
  ibu: number;
};

export type Ingredient = {
  malt: { name: string; amount: { value: number; unit: string } }[];
  food_pairing: string[];
  brewers_tips: string;
};

type MultiStepFormProps = {
  onClose: () => void;
};

function MultiStepForm({ onClose }: MultiStepFormProps) {
  const id = useId();
  const numericId = +id;
  const [step, setStep] = useState<Steps>(Steps.UPLOAD_IMAGE);
  const [image, setImage] = useState<string | undefined>();
  const [details, setDetails] = useState<Details>({
    name: "",
    first_brewed: "",
    tagline: "",
    description: "",
    abv: 0,
    ibu: 0,
  });
  const [ingredients, setIngredients] = useState<Ingredient>({
    malt: [],
    food_pairing: [],
    brewers_tips: "",
  });

  const { name, first_brewed, tagline, description, abv, ibu } = details;

  const { malt, food_pairing, brewers_tips } = ingredients;

  const bottle = {
    id: numericId,
    image_url: image,
    name,
    first_brewed,
    tagline,
    description,
    abv,
    ibu,
    ingredients: { malt },
    food_pairing,
    brewers_tips,
  };

  const isValid = (currentStep: Steps) => {
    switch (currentStep) {
      case Steps.UPLOAD_IMAGE:
        if (!image) {
          alert("Please upload an image.");
          return false;
        }
        return true;

      case Steps.DETAILS:
        if (!name || !first_brewed || !tagline || !description) {
          alert("Please fill out all the details.");
          return false;
        }
        if (abv <= 0 || ibu <= 0) {
          alert("ABV and IBU should be greater than 0.");
          return false;
        }
        return true;

      case Steps.INGREDIENTS:
        if (malt.length === 0 || food_pairing.length === 0) {
          alert("Please add at least one malt and one food pairing.");
          return false;
        }
        return true;

      case Steps.PREVIEW:
        return true;

      default:
        return false;
    }
  };

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<any>>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    };

  const handleSubmit = () => {
    const existingCustomBeers = JSON.parse(
      localStorage.getItem("customBeers") ?? "[]"
    );

    existingCustomBeers.push(bottle);

    localStorage.setItem("customBeers", JSON.stringify(existingCustomBeers));
    alert("New beer added to collection!");

    onClose();
    window.location.reload();
  };

  let content;
  switch (step) {
    case Steps.UPLOAD_IMAGE:
      content = <FirstStep image={image} setImage={setImage} />;
      break;
    case Steps.DETAILS:
      content = (
        <SecondStep
          setDetails={setDetails}
          handleChange={handleChange}
          details={details}
        />
      );
      break;
    case Steps.INGREDIENTS:
      content = (
        <ThirdStep
          ingredients={ingredients}
          setIngredients={setIngredients}
          handleChange={handleChange}
        />
      );
      break;
    case Steps.PREVIEW:
      content = <Preview beer={bottle} />;
      break;
    default:
      content = <div>Invalid step</div>;
  }

  return (
    <div>
      {content}
      <div className="flex justify-between mt-4">
        {step > Steps.UPLOAD_IMAGE && (
          <Button onClick={() => setStep(step - 1)}>Previous</Button>
        )}
        {step < Steps.PREVIEW ? (
          <Button
            onClick={() => {
              if (isValid(step)) {
                setStep(step + 1);
              }
            }}
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={() => {
              if (isValid(step)) {
                handleSubmit();
              }
            }}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
