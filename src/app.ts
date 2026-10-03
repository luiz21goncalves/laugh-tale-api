import openapi from '@elysia/openapi'
import Elysia from 'elysia'
import { auth } from './auth.ts'

const app = new Elysia()
  .use(
    openapi({
      documentation: {
        externalDocs: { description: 'Auth', url: '/auth/reference' },
        info: {
          description: 'Onde você encontrará todos os tesouros.',
          title: 'Laugh Tale',
          version: '0.0.0',
        },
      },
      path: 'docs',
    })
  )
  .mount(auth.handler)
  .get('/', () => ({ ok: true }))

export { app }
