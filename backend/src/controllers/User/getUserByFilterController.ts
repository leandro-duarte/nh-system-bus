import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'
import { Prisma } from '@prisma/client'
import { UserProps } from '../../interfaces/User'

export async function getUserByFilterController(req: Request, res: Response) {
    try {

        
        const { id, username, employeeId } = req.query

        let filter = <Prisma.UserWhereUniqueInput>{}

        if(id) {
            filter = { id: Number(id) }
        } else if(username) {
            filter = { username: String(username) }
        } else if(employeeId) {
            filter = { employeeId: String(employeeId) }
        } else {
            res.status(400).json({message:'id, username or employeedId are required'})
        }

        const user = await prisma.user.findUnique({
            where:filter
        })

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        return res.status(200).json(user)

    } catch (error) {

        res.status(500).json({ message: 'Request error', error })
    }
}