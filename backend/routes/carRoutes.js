import express from 'express'
const router = express.Router()
import {
  getCarsById,
  createCar,
  searchCars,
} from '../controllers/carController.js'
// import { protect, admin } from '../Middleware/authMiddleware.js'

router.route('/').get(searchCars).post(createCar)
router.route('/:id').get(getCarsById)
// router.route('/').get(searchCars)
export default router
