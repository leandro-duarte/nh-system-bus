import { Router } from 'express'

import { getAgencyController } from '../controllers/Agency/getAgencyController'
import { getAgencyByFilterController } from '../controllers/Agency/getAgencyByFilterController'
import { registerAgencyController } from '../controllers/Agency/registerAgencyController'
import { deleteAgencyController } from '../controllers/Agency/deleteAgencyController'
import { updateAgencyController } from '../controllers/Agency/updateAgencyController'

import agencyValidator from '../middleware/agencyValidator'


const agencyRouter = Router()


agencyRouter.get('/agency', getAgencyController)
agencyRouter.get('/agency/:id', getAgencyByFilterController)
agencyRouter.post('/agency', agencyValidator, registerAgencyController)
agencyRouter.delete('/agency/:id', deleteAgencyController)
agencyRouter.put('/agency/:id', agencyValidator, updateAgencyController)



export default agencyRouter