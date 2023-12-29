import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function updateZoneController(req: Request, res: Response) {
  try {
    
    const { id } = req.params

    const { name, code } = req.body

    const updateZone = await prisma.zone.update({
      
      where:{id:Number(id)},
      data:{
        name,
        code,
        updatedAt:new Date()
      }
    })

    res.status(201).json(updateZone)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
