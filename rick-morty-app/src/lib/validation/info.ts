import { z } from "zod"

export const InfoSchema = z.object({
  count: z.number(),
  pages: z.number(),
  next: z.string(),
  prev: z.string().nullable()
})
