// biome-ignore-all lint/style/useNamingConvention: environment variables validations
import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.url(),
  PORT: z.coerce.number(),
})

export const ENV = envSchema.parse(Bun.env)
