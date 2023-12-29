import { Router } from 'express'

import { registerBusLineController } from '../controllers/BusLine/registerBusLineController'
import { getBusLineController } from '../controllers/BusLine/getBusLineController'
import { deleteBusLineController } from '../controllers/BusLine/deleteBusLineController'
import { updateBusLineController } from '../controllers/BusLine/updateBusLineController'

import busLineValidator from '../middleware/busLineValidator'

const busLineRouter = Router()

busLineRouter.post('/busLine', busLineValidator, registerBusLineController)
busLineRouter.get('/busLine', getBusLineController)
busLineRouter.delete('/busLine/:id', deleteBusLineController)
busLineRouter.put('/busLine/:id', busLineValidator, updateBusLineController)



export default busLineRouter