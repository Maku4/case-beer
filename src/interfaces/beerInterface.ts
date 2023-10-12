interface Amount {
  value: number;
  unit: string;
}

interface Hop {
  name: string;
  amount: Amount;
  add: string;
  attribute: string;
}

interface Malt {
  name: string;
  amount: Amount;
}

interface Fermentation {
  temp: Amount;
}

interface MashTemp {
  duration: number;
  temp: Amount;
}

export interface BeerProps {
  abv: number;
  attenuation_level?: number;
  boil_volume?: Amount;
  brewers_tips: string;
  contributed_by?: string;
  description: string;
  ebc?: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url?: string;
  ingredients: {
    hops?: Hop[];
    malt: Malt[];
    yeast?: string;
  };
  method?: {
    mash_temp?: MashTemp[];
    fermentation?: Fermentation;
    twist?: string | null;
  };
  name: string;
  ph?: number;
  srm?: number;
  tagline: string;
  target_fg?: number;
  target_og?: number;
  volume?: Amount;
}
