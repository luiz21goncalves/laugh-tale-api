import { boolean, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
export const users = pgTable('users', {
  createdAt: timestamp('created_at').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  id: text('id').primaryKey(),
  image: text('image'),
  name: text('name').notNull(),
  updatedAt: timestamp('updated_at')
    .$onUpdate(() => new Date())
    .notNull(),
})
