import request from 'supertest'
import app from '../config/app'

describe('Middlewares', () => {
  it('Should Body-Parse', async () => {
    app.post('/body-parse', (req, res) => {
      res.send(req.body)
    })
    await request(app).post('/body-parse')
      .send({ name: 'Ronald' })
      .expect({ name: 'Ronald' })
  })
})
