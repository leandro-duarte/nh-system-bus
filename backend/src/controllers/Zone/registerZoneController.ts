import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function registerZoneController(
  req: Request,
  res: Response
) {
  try {
    const { name, code } = req.body

    const newZone = await prisma.zone.create({
      data: {
        name,
        code
      }
    })

    res.status(201).json(newZone);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "resquest error", error })
  }
}
