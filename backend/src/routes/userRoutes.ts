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

userRouter.post('/user', userAuthenticate, userValidator, registerUserController)
userRouter.delete('/user/:id', userAuthenticate, deleteUserController)
userRouter.put('/user/:id', userAuthenticate, userValidator, updateUserController)

export default userRouter