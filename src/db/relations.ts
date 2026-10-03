import { defineRelations } from 'drizzle-orm'
import { accounts } from './schemas/accounts.ts'
import { sessions } from './schemas/sessions.ts'
import { users } from './schemas/users.ts'
import { verifications } from './schemas/verifications.ts'

export const schemas = { accounts, sessions, users, verifications }

export const relations = defineRelations(schemas, (r) => ({
  accounts: {
    user: r.one.users({
      from: r.accounts.userId,
      to: r.users.id,
    }),
  },
  sessions: {
    user: r.one.users({
      from: r.sessions.userId,
      to: r.users.id,
    }),
  },
  users: {
    accounts: r.many.accounts(),
    sessions: r.many.sessions(),
  },
}))
