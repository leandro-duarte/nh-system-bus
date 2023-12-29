import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'
import { Prisma } from '@prisma/client'

export async function getCompanyByFilterController(req: Request, res: Response) {
    try {

        const { id, cnpj } = req.query

        let filter = <Prisma.CompanyWhereUniqueInput>{}

        if (id) {
            filter = { id: Number(id) }
        } else if (cnpj) {
            filter = { cnpj: String(cnpj) }
        } else {
            res.status(400).json({ message: 'id or cnpj are requared' })
        }

        const company = await prisma.company.findUnique({
            where: filter
        })

        res.status(201).json(company)

    } catch (error) {

        res.status(500).json({ message: 'Request error', error })
    }
}