import bcrypt  from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { APP_SECRET } from '../utils'

const signup = async (parent, args, context, info) => {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.createUser({...args, password})
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    
    return {
        token,
        user,
    }
}

export { signup }