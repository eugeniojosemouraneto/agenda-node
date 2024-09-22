import fastify, { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
// models
import { ModelUser } from '../model/user.js'

const modelUser = new ModelUser()

interface createdUserRequest {
  username: string
  email: string
}

export class ControllerUser {
  async createdUser(
    request: FastifyRequest<{ Body: createdUserRequest }>,
    response: FastifyReply
  ) {
    const createTransactionBodySchema = z.object({
      username: z
        .string()
        .min(6, 'Username must be at learst 6 characters')
        .max(45, "Username can't execeed 45 characters"),
      email: z.string().email('Invalid email format'),
    })
    try {
      const user: createdUserRequest = createTransactionBodySchema.parse(
        request.body
      )
      const new_user = await modelUser.createdUser(user)
      return response.status(201).send(new_user)
    } catch (error) {
      return response.status(400).send({
        error,
      })
    }
  }
}
