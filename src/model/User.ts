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
  },
  async emailExist(email: string, prisma: PrismaClient) {
    await prisma.user.findUnique({
      where: {
        email,
      }
    })
  }
}

export default User