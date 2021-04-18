import path from 'path'
//  import { createh, crypto,createhm} from 'crypto'
import os from 'os'
import express from 'express'
// import bodyParser from 'body-parser'
// import dotenv from 'dotenv'
// import colors from 'colors'
// import morgan from 'morgan'
// import {} from 'worker-threads'
import connectDB from './config/db.js'
// import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
// import orderRoutes from './routes/orderRoutes.js'
// import uploadRoutes from './routes/uploadRoutes.js'
import carRoutes from './routes/carRoutes.js'
import { notFound, errorHandler } from './Middleware/errorMiddleware.js'

// dotenv.config()

connectDB()
const app = express()
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// app.use((req, res, next) => {
//   console.log('Hello Satya')
//   console.log(req.originalUrl)
//   next()
// })
app.use(express.json())
// app.use((req,res,next) => {
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS')
//   res.setHeader('Access-Control-Allow-Headers','Content-Type')
//   next()
// })
// app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('API is running.....')
})
app.use('/api/cars', carRoutes)
app.use('/api/users', userRoutes)
// app.use('/api/orders', orderRoutes)
// app.use('/api/upload', uploadRoutes)

// app.get('/api/config/paypal', (req, res) => {
//   console.log(req.method)
//   console.log(os.platform())
//   return res.send(process.env.PAYPAL_CLIENT_ID)
// })
// const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/my-app/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running.....')
//     // const secret = 'satyaranjan'
// const hash = createHmac('sha256', secret)
//   .update('i love cupcakes')
//   .digest('hex')
// console.log(hash)
//     console.log(os.cpus())
//   })
// }

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`Server running  in development mode on port ${PORT}`)
)
