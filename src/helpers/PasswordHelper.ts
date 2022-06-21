import bcrypt from 'bcrypt'
const saltRounds : number = 10;

const PasswordHelper = {
    hashPassword: (password: string) => bcrypt.hashSync(password, saltRounds)
}

export default PasswordHelper;
