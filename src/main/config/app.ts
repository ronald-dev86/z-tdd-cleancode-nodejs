import express from 'express'
import routes from './routes'
import { config as dotenv } from 'dotenv'
import middleware from './middleware'

const app = express()
middleware(app)
routes(app)

dotenv()

export default app
