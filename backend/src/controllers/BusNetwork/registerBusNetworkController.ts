import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function registerBusNetworkController(
  req: Request,
  res: Response
) {
  try {
    const { name, cnpj, adress, email, phone, agencyId, zoneId } = req.body

    const newBusNetwork = await prisma.busNetwork.create({
      data: {
        name,
        cnpj,
        adress,
        email,
        phone,
        agencyId,
        zoneId
      }
    })

    res.status(201).json(newBusNetwork);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "resquest error", error })
  }
}
