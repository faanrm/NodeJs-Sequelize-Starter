import express from "express"
import { getAllUser , createUser } from "../controllers/UserControllers.js"

const router = express.Router()

router.get('/allUser',getAllUser)
router.post('/createUser',createUser)

export default router