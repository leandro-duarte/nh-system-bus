import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'

export async function registerCompanyController(req:Request, res:Response) {
    try {
        
        const { name, cnpj, adress, email, phone, busNetworkId } = req.body

        const newCompany = await prisma.company.create({
            data:{
                name,
                cnpj,
                adress,
                email,
                phone,
                busNetworkId
            }
        })

        res.status(201).json(newCompany)

    } catch (error) {
        res.status(500).json({message:'resquest error', error})
    }
}