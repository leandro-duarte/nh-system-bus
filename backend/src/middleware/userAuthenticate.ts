import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import 'dotenv/config'

export function userAuthenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Access denied' })
    }

    try {
        const hashToken = process.env.HASH_TOKEN || ''
        jwt.verify(token, hashToken)

        next()
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' })
    }
}
