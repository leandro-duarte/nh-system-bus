import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'
import { Prisma } from '@prisma/client'

export async function getVehcleByFilterController(req: Request, res: Response) {
    try {

        const { id, prefix } = req.query

        let filter = <Prisma.VehicleWhereUniqueInput>{}

        if (id) {
            filter = { id: Number(id) }
        } else if (prefix) {
            filter = { prefix: String(prefix) }
        } else {
            res.status(400).json({ message: 'id or prefix are required' })
        }

        const vehicle = await prisma.vehicle.findUnique({
            where: filter
        })

        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' })
        }

        return res.status(200).json(vehicle)

    } catch (error) {

        res.status(500).json({ message: 'Request error', error })
    }
}