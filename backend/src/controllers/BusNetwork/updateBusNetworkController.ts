import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function updateBusNetworkController(req: Request, res: Response) {
  try {
    
    const { id } = req.params

    const { name, cnpj, adress, email, phone, agencyId, zoneId } = req.body

    const updateBusNetwork = await prisma.busNetwork.update({
      
      where:{id:Number(id)},
      data:{
        name,
        cnpj,
        adress,
        email,
        phone,
        agencyId,
        zoneId,
        updatedAt:new Date()
      }
    })

    res.status(201).json(updateBusNetwork)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
