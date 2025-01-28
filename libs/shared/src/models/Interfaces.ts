export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: NamedAPIResource;
  location: NamedAPIResource;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
