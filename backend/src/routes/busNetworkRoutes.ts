import { Router } from 'express'

import { registerBusNetworkController } from '../controllers/BusNetwork/registerBusNetworkController'
import { getBusNetworkController } from '../controllers/BusNetwork/getBusNetworkController'
import { deleteBusNetworkController } from '../controllers/BusNetwork/deleteBusNetworkController'
import { updateBusNetworkController } from '../controllers/BusNetwork/updateBusNetworkController'

import busNetworkValidator from '../middleware/busNetworkValidator'

const busNetworkRouter = Router()

busNetworkRouter.post('/busNetwork', busNetworkValidator, registerBusNetworkController)
busNetworkRouter.get('/busNetwork', getBusNetworkController)
busNetworkRouter.delete('/busNetwork/:id', deleteBusNetworkController)
busNetworkRouter.put('/busNetwork/:id', busNetworkValidator, updateBusNetworkController)


export default busNetworkRouter