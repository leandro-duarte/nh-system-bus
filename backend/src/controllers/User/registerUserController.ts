import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'
import * as bcrypt from 'bcrypt'

export async function registerUserController(req:Request, res:Response) {
    try {
        
        const { name, username, cpf, rg, adress, email, phone, cellPhone, employeeId, password } = req.body

        const cryptPassword = await bcrypt.hash(password, 10)
        
        const newUser = await prisma.user.create({
            data:{
                name,
                username,
                cpf,
                rg,
                adress,
                email,
                phone,
                cellPhone,
                employeeId,
                password:String(cryptPassword)
            }
        })

        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json({message:'resquest error', error})
    }
}