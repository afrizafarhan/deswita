import { PrismaClient } from "@prisma/client";
import User from "../model/User";
const prisma = new PrismaClient();

const addNewUser = (user: User) => {
  User.createUser(user, prisma)
    .catch(e => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect
    })
}