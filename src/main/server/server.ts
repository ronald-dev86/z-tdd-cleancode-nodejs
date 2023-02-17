import app from '../config/app'

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`server is working PORT ${process.env.PORT}`)
})
