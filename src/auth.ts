import { drizzleAdapter } from '@better-auth/drizzle-adapter'
import { betterAuth } from 'better-auth'
import { emailOTP, openAPI } from 'better-auth/plugins'
import { db } from './db/index.ts'
import { schemas } from './db/relations.ts'
import { transporter } from './transporter.ts'
export const auth = betterAuth({
  appName: 'Laugh Tale',
  basePath: '/auth',
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: schemas,
    usePlural: true,
  }),
  disabledPaths: [],
  plugins: [
    openAPI(),
    emailOTP({
      changeEmail: { enabled: false, verifyCurrentEmail: true },
      async sendVerificationOTP({ email, otp, type }) {
        await transporter.sendMail({
          from: { address: 'auth@laughtale.com', name: 'Autenticação' },
          subject: type,
          text: otp,
          to: { address: email },
        })
      },
    }),
  ],
})
