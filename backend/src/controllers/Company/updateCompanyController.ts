import { Request, Response } from "express"
import prisma from "../../config/prismaClient"

export async function updateCompanyController(req: Request, res: Response) {
  try {
    
    const { id } = req.params

    const { name, cnpj, adress, email, phone, busNetworkId } = req.body

    const updateCompany = await prisma.company.update({
      
      where:{id:Number(id)},
      data:{
        name,
        cnpj,
        adress,
        email,
        phone,
        busNetworkId,
        updatedAt:new Date()
      }
    })

    res.status(201).json(updateCompany)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
