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
  disabledPaths: [
    '/sign-in/social',
    '/callback/:id',
    '/sign-up/email',
    '/sign-in/email',
    '/verify-password',
    '/verify-email',
    '/send-verification-email',
    '/change-email',
    '/change-password',
    '/reset-password',
    '/delete-user',
    '/request-password-reset',
    '/reset-password/:token',
    '/link-social',
    '/list-accounts',
    '/delete-user/callback',
    '/unlink-account',
    '/account-info',
    '/list-accounts',
    '/email-otp/check-verification-otp',
    '/email-otp/verify-email',
    '/email-otp/request-password-reset',
    '/forget-password/email-otp',
    '/email-otp/reset-password',
    '/email-otp/request-email-change',
    '/email-otp/change-email',
  ],
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
