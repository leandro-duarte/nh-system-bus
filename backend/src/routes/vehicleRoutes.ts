import { Router } from 'express'

import { registerVehicleController } from '../controllers/Vehicle/registerVehicleController'
import { getVehicleController } from '../controllers/Vehicle/getVehicleController'
import { deleteVehicleController } from '../controllers/Vehicle/deleteVehicleController'
import { updateVehicleController } from '../controllers/Vehicle/updateVehicleController'

import vehicleValidator from '../middleware/vehicleValidator'

const vehicleRouter = Router()

vehicleRouter.post('/vehicle', vehicleValidator, registerVehicleController)
vehicleRouter.get('/vehicle', getVehicleController)
vehicleRouter.delete('/vehicle/:id', deleteVehicleController)
vehicleRouter.put('/vehicle/:id', vehicleValidator, updateVehicleController)


export default vehicleRouter