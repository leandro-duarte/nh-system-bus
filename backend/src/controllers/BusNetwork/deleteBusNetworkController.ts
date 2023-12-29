import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function deleteBusNetworkController(req: Request, res: Response) {
  try {
    const { id } = req.params

    const busNetwork = await prisma.vehicle.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(201).json(busNetwork)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
