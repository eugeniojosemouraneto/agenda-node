// db, prisma
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface createdUserRequest {
  username: string
  email: string
}

export class ModelUser {
  async createdUser({ username, email }: createdUserRequest) {
    try {
      return await prisma.user.create({
        data: {
          username: username,
          email: email,
        },
      })
    } catch (error) {
      throw new Error('User with this email or username already exists')
    }
  }
}
