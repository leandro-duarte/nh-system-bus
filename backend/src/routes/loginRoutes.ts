import { Router } from 'express'

import { loginUserController } from '../controllers/User/loginUserController'

const loginRouter = Router()

loginRouter.post('/login', loginUserController)


export default loginRouter

