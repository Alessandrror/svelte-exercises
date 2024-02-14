import { z } from "zod"
import { InfoSchema } from "./info"

export const ResultCharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  species: z.string(),
  type: z.string(),
  gender: z.string(),
  origin: z.object({
    name: z.string(),
    url: z.string()
  }),
  location: z.object({
    name: z.string(),
    url: z.string()
  }),
  image: z.string(),
  episode: z.array(z.string()),
  url: z.string(),
  created: z.string()
})

export const CharacterSchema = z.object({
  info: InfoSchema,
  results: z.array(ResultCharacterSchema)
})

export type Character = z.infer<typeof ResultCharacterSchema>
export type Characters = z.infer<typeof CharacterSchema>
