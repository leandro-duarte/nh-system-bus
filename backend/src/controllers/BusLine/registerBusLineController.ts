import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function registerBusLineController(
  req: Request,
  res: Response
) {
  try {
    const { code, name, timeStart, timeEnd, ridership, vehicleId, companyId } = req.body

    const newBusLine = await prisma.busLine.create({
      data: {
        code,
        name,
        timeStart,
        timeEnd,
        ridership,
        vehicleId,
        companyId
      }
    })

    res.status(201).json(newBusLine);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "resquest error", error })
  }
}
