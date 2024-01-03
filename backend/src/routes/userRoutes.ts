import { Router } from 'express'

import { getUserController } from '../controllers/User/getUserController'
import { getUserByFilterController } from '../controllers/User/getUserByFilterController'
import { registerUserController } from '../controllers/User/registerUserController'
import { deleteUserController } from '../controllers/User/deleteUserController'
import { updateUserController } from '../controllers/User/updateUserController'

import userValidator from '../middleware/userValidator'
import { userAuthenticate } from '../middleware/userAuthenticate'

const userRouter = Router()

userRouter.get('/user', getUserController)
userRouter.get('/user/filter', getUserByFilterController)

userRouter.use(userAuthenticate)
userRouter.post('/user', userValidator, registerUserController)
userRouter.delete('/user/:id', deleteUserController)
userRouter.put('/user/:id', userValidator, updateUserController)

export default userRouter