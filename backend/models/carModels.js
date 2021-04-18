import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const carSchema = mongoose.Schema(
  {
    manufacturer: {
      type: String,
      required: true,
    },
    carname: {
      type: String,
      required: true,
    },
    cartype: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Car = mongoose.model('Car', carSchema)

export default Car
