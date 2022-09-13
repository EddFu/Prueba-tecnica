export interface Characters {
  info: Info,
  characters: Character[]
}

export interface Character {
  id: number,
  name: string,
  image: string,
  status: string,
  species: string,
  location: LastLocation,
  episode: CharacterEpisodies[],
  url: string
  isFavorite: boolean,
}

export interface LastLocation {
  id: number,
  name: string,
  type: string,
  dimension: string,
  url: string,
  residents: []
}


export interface CharacterEpisodies {
  episode: string
}

export interface Episodes {
  id: number,
  name: string,
  characters: []
}


export interface Info {
  count: number,
  pages: number,
  next: string,
  prev: string
}
