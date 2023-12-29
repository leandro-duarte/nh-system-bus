import { Router } from 'express'

import { getZoneController } from '../controllers/Zone/getZoneController'
import { getZoneByFilterController } from '../controllers/Zone/getZoneByFilterController'
import { registerZoneController } from '../controllers/Zone/registerZoneController'
import { deleteZoneController } from '../controllers/Zone/deleteZoneController'
import { updateZoneController } from '../controllers/Zone/updateZoneController'

import zoneValidator from '../middleware/zoneValidator'

const zoneRouter = Router()

zoneRouter.get('/zone', getZoneController)
zoneRouter.get('/zone', zoneValidator, getZoneByFilterController)
zoneRouter.post('/zone', zoneValidator, registerZoneController)
zoneRouter.delete('/zone/:id', deleteZoneController)
zoneRouter.put('/zone/:id', zoneValidator, updateZoneController)


export default zoneRouter