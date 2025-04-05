import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const notes = defineCollection({
  loader: glob({ base: './content', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = { notes }
