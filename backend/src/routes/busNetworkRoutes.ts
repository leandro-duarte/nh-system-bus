import { Router } from 'express'

import { getBusNetworkController } from '../controllers/BusNetwork/getBusNetworkController'
import { getBusNetworkByFilterController } from '../controllers/BusNetwork/getBusNetworkByFilterController'
import { registerBusNetworkController } from '../controllers/BusNetwork/registerBusNetworkController'
import { deleteBusNetworkController } from '../controllers/BusNetwork/deleteBusNetworkController'
import { updateBusNetworkController } from '../controllers/BusNetwork/updateBusNetworkController'

import busNetworkValidator from '../middleware/busNetworkValidator'
import { userAuthenticate } from '../middleware/userAuthenticate'

const busNetworkRouter = Router()

busNetworkRouter.get('/busNetwork', getBusNetworkController)
busNetworkRouter.get('/busNetwork/filter', getBusNetworkByFilterController)

busNetworkRouter.post('/busNetwork', userAuthenticate, busNetworkValidator, registerBusNetworkController)
busNetworkRouter.delete('/busNetwork/:id', userAuthenticate, deleteBusNetworkController)
busNetworkRouter.put('/busNetwork/:id', userAuthenticate, busNetworkValidator, updateBusNetworkController)


export default busNetworkRouter