import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'
import { validateTest } from '../middleware/validationMiddleware.js'

//routers
import jobRouter from '../routes/jobRouter.js'

//ERROR Middleware gets triggerd by existing route
import errorHandlerMiddleware from '../middleware/errorHandlerMiddleware.js'
app.use(errorHandlerMiddleware)

if (process.env.NODE_ENV === 'developments') {
	app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
	res.send('hello world')
})

app.post('/api/v1/test', validateTest, (req, res) => {
	const { name } = req.body
	res.json({ message: `hello: ${name}` })
})

app.use('/api/v1/jobs', jobRouter)

//ERROR 404
app.use('*', (req, res) => {
	res.status(404).json({ msg: 'not found' })
})

const port = process.env.PORT || 5100

// Connect mongodb
try {
	await mongoose.connect(process.env.MONGO_URL)
	app.listen(port, () => {
		console.log(`server is running on PORT ${port}...`)
	})
} catch (error) {
	console.log(error)
	process.exit(1)
}
