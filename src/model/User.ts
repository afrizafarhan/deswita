import { PrismaClient } from "@prisma/client";


const User = {
  async createUser(user: User, prisma: PrismaClient){
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        username: user.username ?? user.email,
        password: user.password,
      }
    })
  }
}

export default User