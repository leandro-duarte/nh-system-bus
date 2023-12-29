import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'

export async function registerAgencyController(req:Request, res:Response) {
    try {
        
        const { name, cnpj, adress, email, phone } = req.body

        const newAgency = await prisma.agency.create({
            data:{
                name,
                cnpj,
                adress,
                email,
                phone
            }
        })

        res.status(201).json(newAgency)

    } catch (error) {
        res.status(500).json({message:'resquest error', error})
    }
}