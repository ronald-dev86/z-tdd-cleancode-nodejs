// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/register-vehicle', (req, res) => {
    res.sendStatus(200)
  })
}
