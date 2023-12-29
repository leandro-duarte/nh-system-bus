import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function deleteZoneController(req: Request, res: Response) {
  try {
    const { id } = req.params

    const zone = await prisma.vehicle.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(201).json(zone)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
