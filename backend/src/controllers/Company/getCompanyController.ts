import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'

export async function getCompanyController(req:Request, res:Response) {
    try {
        
        const company = await prisma.company.findMany()

        res.status(201).json(company)

    } catch (error) {
        
        res.status(500).json({message:'Request error', error})
    }
}