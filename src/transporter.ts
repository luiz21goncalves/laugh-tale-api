import { createTransport } from 'nodemailer'
import { ENV } from './env.ts'

export const transporter = createTransport({ url: ENV.MAILER_SMTP_URL })
