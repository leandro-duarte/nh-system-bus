import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'
import { Prisma } from '@prisma/client'

export async function getBusLineByFilterController(req: Request, res: Response) {
    try {

        const { id, code } = req.query

        let filter = <Prisma.BusLineWhereUniqueInput>{}

        if (id) {
            filter = { id: Number(id) }
        } else if (code) {
            filter = { code: Number(code) }
        } else {
            res.status(400).json({ message: 'id or code line are requared' })
        }

        const busLine = await prisma.busLine.findUnique({
            where: filter
        })

        res.status(201).json(busLine)

    } catch (error) {

        res.status(500).json({ message: 'Request error', error })
    }
}