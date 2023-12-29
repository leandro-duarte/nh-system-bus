import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function updateVehicleController(req: Request, res: Response) {
  try {
    
    const { id } = req.params

    const { manufacturer, model, prefix, manufacturingYear, capacity, companyId } = req.body

    const updateVehicle = await prisma.vehicle.update({
      
      where:{id:Number(id)},
      data:{
        manufacturer,
        model,
        prefix,
        manufacturingYear,
        capacity,
        companyId,
        updatedAt:new Date()
      }
    })

    res.status(201).json(updateVehicle)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
