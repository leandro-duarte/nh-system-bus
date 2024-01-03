import { Request, Response } from "express"
import prisma from "../../config/prismaClient"
import * as bcrypt from 'bcrypt'

export async function updateUserController(req: Request, res: Response) {
  try {
    
    const { id } = req.params

    const { name, username, cpf, rg, adress, email, phone, cellPhone, employeeId, password } = req.body

    const cryptPassword = await bcrypt.hash(password, 10)
    
    const updateUser = await prisma.user.update({
      
      where:{id:Number(id)},
      data:{
        name,
        username,
        cpf,
        rg,
        adress,
        email,
        phone,
        cellPhone,
        employeeId,
        password:String(cryptPassword),
        updatedAt:new Date()
      }
    })

    res.status(201).json(updateUser)
  } catch (error) {
    res.status(500).json({ message: "Request error", error })
  }
}
