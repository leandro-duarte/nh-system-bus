import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function updateBusLineController(req: Request, res: Response) {
  try {
    
    const { id } = req.params

    const { code, name, timeStart, timeEnd, ridership, vehicleId, companyId } = req.body

    const updateBusLine = await prisma.busLine.update({
      
      where:{id:Number(id)},
      data:{
        code,
        name,
        timeStart,
        timeEnd,
        ridership,
        vehicleId,
        companyId,
        updatedAt:new Date()
      }
    })

    res.status(201).json(updateBusLine)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
