import { z } from "zod"
import { InfoSchema } from "./info"

export const ResultLocationSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  dimension: z.string(),
  residents: z.array(z.string()),
  url: z.string(),
  created: z.string()
})

export const LocationSchema = z.object({
  info: InfoSchema,
  results: z.array(ResultLocationSchema)
})

export type Location = z.infer<typeof ResultLocationSchema>
export type Locations = z.infer<typeof LocationSchema>
