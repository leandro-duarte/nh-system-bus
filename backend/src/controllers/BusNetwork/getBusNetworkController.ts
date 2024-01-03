import { Request, Response } from 'express'
import prisma from '../../config/prismaClient'

export async function getBusNetworkController(req:Request, res:Response) {
    try {
        
        const busNetwork = await prisma.busNetwork.findMany()

        res.status(200).json(busNetwork)

    } catch (error) {
        
        res.status(500).json({message:'Request error', error})
    }
}