import { server, port } from './config/server'
import { json } from 'express'

import  agencyRouter  from './routes/agencyRoutes'
import busNetworkRouter from './routes/busNetworkRoutes'
import zoneRouter from './routes/zoneRoutes'
import companyRouter from './routes/companyRoutes'
import vehicleRouter from './routes/vehicleRoutes'
import busLineRouter from './routes/busLineRoutes'

server.use(json())

server.use(
    agencyRouter, 
    busNetworkRouter, 
    zoneRouter, 
    companyRouter,
    vehicleRouter,
    busLineRouter
)

server.listen(port, () => console.log(`Server is running on port:${port}`))

