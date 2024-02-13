import express from "express"
import { getAllUser , createUser , deleteUser} from "../controllers/UserControllers.js"

const router = express.Router()

router.get('/allUser',getAllUser)
router.post('/createUser',createUser)
router.delete('/deleteUser/:id',deleteUser)

export default router