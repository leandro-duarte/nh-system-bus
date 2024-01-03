import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'

export async function getVehicleController(req:Request, res:Response) {
    try {
        
        const vehicle = await prisma.vehicle.findMany()

        res.status(200).json(vehicle)

    } catch (error) {
        
        res.status(500).json({message:'Request error', error})
    }
}