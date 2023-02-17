import express from 'express'
import routes from './routes'
import { config as dotenv } from 'dotenv'

const app = express()

routes(app)

dotenv()

export default app
