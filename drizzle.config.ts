import { defineConfig } from 'drizzle-kit'
import { ENV } from './src/env.ts'

// biome-ignore lint/style/noDefaultExport: configuration file
export default defineConfig({
  dbCredentials: {
    url: ENV.DATABASE_URL,
  },
  dialect: 'postgresql',
  out: './drizzle',
  schema: './src/db/schemas',
})
