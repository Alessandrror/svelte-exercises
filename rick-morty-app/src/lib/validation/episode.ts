import { z } from "zod"
import { InfoSchema } from "./info"

export const ResultEpisodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  air_Date: z.string(),
  episode: z.string(),
  characters: z.array(z.string()),
  url: z.string(),
  created: z.string()
})

export const EpisodeSchema = z.object({
  info: InfoSchema,
  results: z.array(ResultEpisodeSchema)
})

export type Episodes = z.infer<typeof EpisodeSchema>
