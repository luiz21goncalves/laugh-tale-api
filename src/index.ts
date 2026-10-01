import { app } from './app.ts'
import { ENV } from './env.ts'

app.listen(ENV.PORT)
