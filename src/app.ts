import openapi from '@elysia/openapi'
import Elysia from 'elysia'
import { auth } from './auth.ts'

const app = new Elysia()
  .use(
    openapi({
      documentation: {
        info: { title: 'Laugh Tale', version: '0.0.0', description: 'Onde você encontrará todos os tesouros.' },
      },
      path: 'docs',
    })
  )
  .mount(auth.handler)
  .get('/', () => ({ ok: true }))

export { app }
