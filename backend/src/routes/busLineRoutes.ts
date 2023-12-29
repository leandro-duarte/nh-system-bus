import { Router } from 'express'

import { getBusLineByFilterController } from '../controllers/BusLine/getBusLineByFilterController'
import { getBusLineController } from '../controllers/BusLine/getBusLineController'
import { registerBusLineController } from '../controllers/BusLine/registerBusLineController'
import { deleteBusLineController } from '../controllers/BusLine/deleteBusLineController'
import { updateBusLineController } from '../controllers/BusLine/updateBusLineController'

import busLineValidator from '../middleware/busLineValidator'

const busLineRouter = Router()

busLineRouter.get('/busLine', getBusLineController)
busLineRouter.get('/busLine', busLineValidator, getBusLineByFilterController)
busLineRouter.post('/busLine', busLineValidator, registerBusLineController)
busLineRouter.delete('/busLine/:id', deleteBusLineController)
busLineRouter.put('/busLine/:id', busLineValidator, updateBusLineController)

export default busLineRouter