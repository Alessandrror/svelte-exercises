import axios from "axios"
import { ZodSchema } from "zod"
import { CharacterSchema } from "./validation/character"
import { LocationSchema } from "./validation/location"
import { EpisodeSchema } from "./validation/episode"
import type { Characters } from "./validation/character"
import type { Locations } from "./validation/location"
import type { Episodes } from "./validation/episode"

type SchemeMap = {
  [key: string]: ZodSchema<Characters | Locations | Episodes>
}

const schemeMap: SchemeMap = {
  '/character': CharacterSchema,
  '/location': LocationSchema,
  '/episode': EpisodeSchema
}

export const getCollections = async (path: string): Promise<Characters | Locations | Episodes> => {

  const collectionSchema = schemeMap[path]

  if (!collectionSchema) throw new Error('Invalid path')

  try {
    const { data } = await axios.get<Characters | Locations | Episodes>(`https://rickandmortyapi.com/api/${path}`)

    const { success } = collectionSchema.safeParse(data)

    if (!success) throw new Error('Data is not correct!')

    return data

  } catch (err) {
    throw new Error('Connection failed!')
  }

}

// As a generic ColletionType for any APIResponse

// export const getCollections = async <CollectionType>(path: string): Promise<CollectionType> => {

//   const collectionSchema = schemeMap[path]

//   if (!collectionSchema) throw new Error('Invalid path')

//   const res = await axios.get<CollectionType>(`https://rickandmortyapi.com/api/${path}`)
//   const data = collectionSchema.safeParse(res.data)

//   if (!data.success) throw new Error('Data is not correct!')

//   return data.data as CollectionType
// }
