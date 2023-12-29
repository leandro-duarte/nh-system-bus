import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function updateAgencyController(req: Request, res: Response) {
  try {
    
    const { id } = req.params

    const { name, cnpj, adress, email, phone } = req.body

    const updateAgency = await prisma.agency.update({
      
      where:{id:Number(id)},
      data:{
        name,
        cnpj,
        adress,
        email,
        phone,
        updatedAt:new Date()
      }
    })

    res.status(201).json(updateAgency)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
