import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function deleteBusLineController(req: Request, res: Response) {
  try {
    const { id } = req.params

    const busLine = await prisma.vehicle.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(200).json(busLine)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
