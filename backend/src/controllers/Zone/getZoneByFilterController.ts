import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'
import { Prisma } from '@prisma/client'

export async function getZoneByFilterController(req: Request, res: Response) {
    try {

        const { id, code } = req.query

        let filter = <Prisma.ZoneWhereUniqueInput>{}

        if (id) {
            filter = { id: Number(id) }
        } else if (code) {
            filter = { code: String(code) }
        } else {
            res.status(400).json({ message: 'id or code are requared' })
        }

        const zone = await prisma.zone.findUnique({
            where: filter
        })

        res.status(201).json(zone)

    } catch (error) {

        res.status(500).json({ message: 'Request error', error })
    }
}