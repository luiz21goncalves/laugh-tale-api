// biome-ignore-all lint/style/useNamingConvention: environment variables validations
import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.url(),
  MAILER_SMTP_URL: z.url(),
  NODE_ENV: z.enum(['test', 'development', 'production']),
  PORT: z.coerce.number(),
  BETTER_AUTH_URL: z.url(),
  BETTER_AUTH_SECRET: z.string(),
})

export const ENV = envSchema.parse(Bun.env)
