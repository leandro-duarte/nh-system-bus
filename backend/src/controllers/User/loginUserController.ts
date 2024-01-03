import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import prisma from '../../config/prismaClient'
import 'dotenv/config'

export async function loginUserController(req: Request, res: Response) {

    try {

        const { username, password } = req.body

        const user = await prisma.user.findUnique({
            
            where: {username}
        })

        if(!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const verifyPassword = await bcrypt.compare(password, user.password)

        if(!verifyPassword) {
            return res.status(401).json({ message: 'Password incorrect' })
        }

        const hashToken = process.env.HASH_TOKEN || ''

        const token = jwt.sign({username:user.username}, hashToken, {
            expiresIn:'8h'
        })

        const dataLog = {
            message:'Authenticated user',
            userData:{
                name:user.name,
                username:user.username,
                email:user.email
            },
            token:token
        }

        return res.status(200).json(dataLog)
   
    } catch (error) {
        
        res.status(500).json({ message: 'Request error', error })
        console.error(error)
    }
}