import { Router } from 'express'

import { registerZoneController } from '../controllers/Zone/registerZoneController'
import { getZoneController } from '../controllers/Zone/getZoneController'
import { deleteZoneController } from '../controllers/Zone/deleteZoneController'
import { updateZoneController } from '../controllers/Zone/updateZoneController'

import zoneValidator from '../middleware/zoneValidator'

const zoneRouter = Router()

zoneRouter.post('/zone', zoneValidator, registerZoneController)
zoneRouter.get('/zone', getZoneController)
zoneRouter.delete('/zone/:id', deleteZoneController)
zoneRouter.put('/zone/:id', zoneValidator, updateZoneController)

export default zoneRouter