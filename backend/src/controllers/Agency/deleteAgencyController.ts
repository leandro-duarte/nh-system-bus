import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function deleteAgencyController(req: Request, res: Response) {
  try {
    const { id } = req.params

    const agency = await prisma.agency.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(201).json(agency)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
