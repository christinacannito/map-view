export interface Address {
  city: string;
  zip: string;
  state: string;
  country?: string;
  neighborhood: string;
  "status-code"?: number;
  building?: Building;
  address: string;
  entrances?: Entrance[];
  location?: Entrance;
}

export interface Building {
  type: string;
  coordinates: number[][][];
}

export interface Entrance {
  lon: number;
  "place-type": string;
  lat: number;
  "entrance-type"?: string;
}
