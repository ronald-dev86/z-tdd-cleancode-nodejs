// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Express } from 'express'
import { bodyParse, cors } from '../middleware'

export default (app: Express): void => {
  app.use(bodyParse)
  app.use(cors)
}
