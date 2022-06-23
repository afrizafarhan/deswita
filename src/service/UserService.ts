import { PrismaClient } from "@prisma/client";
import User from "../model/User";
const prisma = new PrismaClient();

const UserService = {
    addNewUser: (user: User) => {
        return User.createUser(user, prisma)
            .then((res) : any => {
                return {
                    status: 201,
                    message: 'Success add user'
                }
            })
            .catch(e => {
                throw e
            })
            .finally(async () => {
                await prisma.$disconnect
            })
    },
    emailExist: (email: string) => {
        return User.emailExist(email, prisma).then((res) => true).catch(
            e => {
                throw e
            }
        ).finally(async () => {
            await prisma.$disconnect()
        })
    }
}
export default UserService

