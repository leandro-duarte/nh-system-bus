import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function deleteUserController(req: Request, res: Response) {
  try {
    const { id } = req.params

    const user = await prisma.agency.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
