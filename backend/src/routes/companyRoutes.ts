import { Router } from 'express'

import { getCompanyController } from '../controllers/Company/getCompanyController'
import { getCompanyByFilterController } from '../controllers/Company/getCompanyByFilterController'
import { registerCompanyController } from '../controllers/Company/registerCompanyController'
import { deleteCompanyController } from '../controllers/Company/deleteCompanyController'
import { updateCompanyController } from '../controllers/Company/updateCompanyController'

import companyValidator from '../middleware/companyValidator'
import { userAuthenticate } from '../middleware/userAuthenticate'

const companyRouter = Router()

companyRouter.get('/company', getCompanyController)
companyRouter.get('/company/filter', getCompanyByFilterController)

companyRouter.use(userAuthenticate)
companyRouter.post('/company', companyValidator, registerCompanyController)
companyRouter.delete('/company/:id', deleteCompanyController)
companyRouter.put('/company/:id', companyValidator, updateCompanyController)


export default companyRouter