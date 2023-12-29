import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'

export async function registerVehicleController(req:Request, res:Response) {
    try {
        
        const { manufacturer, model, prefix, manufacturingYear, capacity, companyId } = req.body

        const newVehicle = await prisma.vehicle.create({
            data:{
                manufacturer,
                model,
                prefix,
                manufacturingYear,
                capacity,
                companyId
            }
        })

        res.status(201).json(newVehicle)

    } catch (error) {
        res.status(500).json({message:'resquest error', error})
    }
}