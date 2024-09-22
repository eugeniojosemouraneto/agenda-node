import fastify from 'fastify'
import z from 'zod'
// routes
import { createdUser } from './routes/user.js'

const app = fastify().withTypeProvider()

app.register(createdUser)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server runnig!')
  })
