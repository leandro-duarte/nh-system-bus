import { Router } from 'express'

import { registerCompanyController } from '../controllers/Company/registerCompanyController'
import { getCompanyController } from '../controllers/Company/getCompanyController'
import { deleteCompanyController } from '../controllers/Company/deleteCompanyController'
import { updateCompanyController } from '../controllers/Company/updateCompanyController'

import companyValidator from '../middleware/companyValidator'

const companyRouter = Router()

companyRouter.post('/company', companyValidator, registerCompanyController)
companyRouter.get('/company', getCompanyController)
companyRouter.delete('/company/:id', deleteCompanyController)
companyRouter.put('/company/:id', companyValidator, updateCompanyController)


export default companyRouter