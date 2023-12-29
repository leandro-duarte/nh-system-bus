import express from 'express'
import 'dotenv/config'

const server = express()

const port = process.env.PORT || 3333

export { server, port }