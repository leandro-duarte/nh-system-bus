import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'
import { Prisma } from '@prisma/client'

export async function getAgencyByFilterController(req: Request, res: Response) {
    try {

        const { id } = req.params

        let filter = <Prisma.AgencyWhereUniqueInput>{}

        if(id) {
            filter = { id: Number(id) }
        } else {
            res.status(400).json({message:'id is required'})
        }

        const agency = await prisma.agency.findUnique({
            where:filter
        })

        if (!agency) {
            return res.status(404).json({ message: 'Agency not found' })
        }

        return res.status(200).json(agency)

    } catch (error) {

        res.status(500).json({ message: 'Request error', error })
    }
}