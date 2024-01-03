import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'

export async function getUserController(req:Request, res:Response) {
    try {
        
        const user = await prisma.user.findMany()

        res.status(201).json(user)

    } catch (error) {
        
        res.status(500).json({message:'Request error', error})
    }
}