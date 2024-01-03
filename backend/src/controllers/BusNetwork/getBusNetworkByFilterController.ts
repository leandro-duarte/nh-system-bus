import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'
import { Prisma } from '@prisma/client'

export async function getBusNetworkByFilterController(req: Request, res: Response) {
    try {

        const { id, cnpj } = req.query

        let filter = <Prisma.BusNetworkWhereUniqueInput>{}

        if (id) {
            filter = { id: Number(id) }
        } else if (cnpj) {
            filter = { cnpj: String(cnpj) }
        } else {
            res.status(400).json({ message: 'id or cnpj are required' })
        }

        const busNetwork = await prisma.busNetwork.findUnique({
            where: filter
        })

        if (!busNetwork) {
            return res.status(404).json({ message: 'Consortium not found' })
        }

        return res.status(200).json(busNetwork)

    } catch (error) {

        res.status(500).json({ message: 'Request error', error })
    }
}