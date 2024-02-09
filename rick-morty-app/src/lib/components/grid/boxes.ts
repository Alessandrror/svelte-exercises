import axios from "axios"

type Result = {
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

type Info = {
  count: number,
  pageS: number,
  next: string,
  prev: string | null
}

type Characters = {
  info: Info,
  results: Result[]
}

const getChars = async (): Promise<Characters> => {
  const res = await axios.get<Characters>('https://rickandmortyapi.com/api/character')
  return res.data
}

const searchChars = async (name: string): Promise<Characters> => {
  const res = await axios.get<Characters>(`https://rickandmortyapi.com/api/character/?${name}`)
  return res.data
}

export type { Characters, Result }
export { getChars, searchChars }