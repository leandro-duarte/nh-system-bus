import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function deleteCompanyController(req: Request, res: Response) {
  try {
    const { id } = req.params

    const company = await prisma.vehicle.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(200).json(company)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
