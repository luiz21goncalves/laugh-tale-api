import Elysia from 'elysia'

const app = new Elysia().get('/', () => ({ ok: true }))

export { app }
