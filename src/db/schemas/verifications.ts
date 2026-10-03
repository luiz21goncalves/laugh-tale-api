import { index, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const verifications = pgTable(
  'verifications',
  {
    createdAt: timestamp('created_at').notNull(),
    expiresAt: timestamp('expires_at').notNull(),
    id: text('id').primaryKey(),
    identifier: text('identifier').notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
    value: text('value').notNull(),
  },
  (table) => [index('verifications_identifier_idx').on(table.identifier)]
)
