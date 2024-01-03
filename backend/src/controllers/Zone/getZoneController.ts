import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'

export async function getZoneController(req:Request, res:Response) {
    try {
        
        const agency = await prisma.zone.findMany()

        res.status(200).json(agency)

    } catch (error) {
        
        res.status(500).json({message:'Request error', error})
    }
}