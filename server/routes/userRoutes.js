import express from 'express'
import {registerUser, loginUser, usercredits} from '../controllers/userController.js'
import userAuth from '../Middlewares/Auth.js'


const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/credits', userAuth , usercredits)


export default userRouter

// http://localhost:4000/api/user/login
// http://localhost:4000/api/user/register