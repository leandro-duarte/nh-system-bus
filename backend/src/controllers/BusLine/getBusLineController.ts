import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'

export async function getBusLineController(req:Request, res:Response) {
    try {
        
        const busLine = await prisma.busLine.findMany()

        res.status(201).json(busLine)

    } catch (error) {
        
        res.status(500).json({message:'Request error', error})
    }
}