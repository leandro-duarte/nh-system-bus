import { Router } from 'express'

import { getVehcleByFilterController } from '../controllers/Vehicle/getVehicleByFilterController'
import { getVehicleController } from '../controllers/Vehicle/getVehicleController'
import { registerVehicleController } from '../controllers/Vehicle/registerVehicleController'
import { deleteVehicleController } from '../controllers/Vehicle/deleteVehicleController'
import { updateVehicleController } from '../controllers/Vehicle/updateVehicleController'

import vehicleValidator from '../middleware/vehicleValidator'
import { userAuthenticate } from '../middleware/userAuthenticate'

const vehicleRouter = Router()

vehicleRouter.get('/vehicle', getVehicleController)
vehicleRouter.get('/vehicle/filter', getVehcleByFilterController)

vehicleRouter.use(userAuthenticate)
vehicleRouter.post('/vehicle', vehicleValidator, registerVehicleController)
vehicleRouter.delete('/vehicle/:id', deleteVehicleController)
vehicleRouter.put('/vehicle/:id', vehicleValidator, updateVehicleController)


export default vehicleRouter