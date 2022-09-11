export interface Character {
  id: number,
  name: string,
  image: string,
  status: string,
  species: string,
  location: LastLocation,
  episode: CharacterEpisodies[],
  url: string
  isFavorite: boolean
}


export interface LastLocation {
  name: string,
}

export interface CharacterEpisodies {
  episode: []
}

export interface Episodes {
  id: number,
  name: string,
  characters: []
}
