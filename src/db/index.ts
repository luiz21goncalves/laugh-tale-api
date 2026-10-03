import { drizzle } from 'drizzle-orm/bun-sql'
import { ENV } from '../env.ts'
import { relations } from './relations.ts'
export const db = drizzle(ENV.DATABASE_URL, { logger: true, relations })
