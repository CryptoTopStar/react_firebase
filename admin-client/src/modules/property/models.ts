export interface Property {
  id: string;
  name: string;
  imageUrl?: string;
  owners: string[];
  type: PropertyType;
  size: number;
  suites: number;
  buildings: number;
  address: string;
  city: string;
  state: string;
  country: string;
  zip: number;
}

export enum PropertyType {
  office,
  retail,
  industrial,
  multiFamily,
  association,
}


