import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function deleteVehicleController(req: Request, res: Response) {
  try {
    const { id } = req.params

    const vehicle = await prisma.vehicle.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(200).json(vehicle)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
