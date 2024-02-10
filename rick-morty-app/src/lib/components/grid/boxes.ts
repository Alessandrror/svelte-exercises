import axios from "axios"

type ResultCharacter = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string
}

type ResultLocation = {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[]
  url: string,
  created: string
}

type ResultEpisode = {
  id: number,
  name: string,
  air_Date: string,
  episode: string,
  characters: string[]
  url: string,
  created: string
}

type Info = {
  count: number,
  pageS: number,
  next: string,
  prev: string | null
}

type Characters = {
  info: Info,
  results: ResultCharacter[]
}

type Locations = {
  info: Info,
  results: ResultLocation[]
}

type Episodes = {
  info: Info,
  results: ResultEpisode[]
}

// const getCollections = async (path: string): Promise<Characters | Locations | Episodes> => {
//   const res = await axios.get<Characters | Locations | Episodes>(`https://rickandmortyapi.com/api/${path}`)
const getCollections = async (path: string): Promise<Characters> => {
  const res = await axios.get<Characters>(`https://rickandmortyapi.com/api/${path}`)
  return res.data
}

const searchChars = async (name: string): Promise<Characters> => {
  const res = await axios.get<Characters>(`https://rickandmortyapi.com/api/character/?${name}`)
  return res.data
}

export type { Characters, Locations, Episodes, ResultCharacter, ResultLocation, ResultEpisode }
export { getCollections, searchChars }
