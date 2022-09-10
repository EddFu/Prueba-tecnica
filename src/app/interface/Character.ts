export interface Character {
  id: number,
  name: string,
  image: string,
  status: string,
  species: string,
  location: LastLocation,
  episode: CharacterEpisodies[]
}


export interface LastLocation {
  name: string,
}

export interface CharacterEpisodies {
  episode: []
}
