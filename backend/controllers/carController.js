import asyncHandler from 'express-async-handler'
import generateToken from '../Utils/generateToken.js'
import Car from '../models/carModels.js'

//@des Get the single car detail
//@route GET /api/cars/:id
//@access Public

const getCarsById = asyncHandler(async (req, res) => {
  const cars = await Car.findById(req.params.id)
  res.json(cars)
})

//@des Create Cars
//@route POST /api/cars
//@access PRIVATE/ADMIN
const createCar = asyncHandler(async (req, res) => {
  const car = new Car({
    manufacturer: req.body.manufacturer,
    carname: req.body.carname,
    cartype: req.body.cartype,
    color: req.body.color,
  })
  const createdCar = await car.save()
  res.status(201).json(createdCar)
})
//@des Get all cars list
//@route GET/api/USERS/LOGIN
//@access Public

const searchCars = asyncHandler(async (req, res) => {
  console.log('search')
  const carname = req.query.keyword
  const cartype = req.query.keyword
  const manufacturer = req.query.manufacturer
  const color = req.query.keyword
  var keyword
  if (cartype !== null) {
    keyword = {
      cartype: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
  }

  //  const keyword = req.query.keyword
  //   ? {
  //       carname: {
  //         $regex: req.query.keyword,
  //         $options: 'i',
  //       }

  //     }
  //   : {}
  const count = await Car.countDocuments({ ...keyword })
  const cars = await Car.find({ ...keyword })

  // res.status(401)
  // throw new Error('some error')
  res.json({ cars })
})

export { getCarsById, createCar, searchCars }
