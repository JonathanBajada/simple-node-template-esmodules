import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import { nanoid } from 'nanoid'

import jobRouter from '../routes/jobRouter.js'
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
	res.send('hello world')
})

app.post('/', (req, res) => {
	console.log(req)
	res.json({ message: 'data received', data: req.body })
})

app.use('/api/v1/jobs', jobRouter)

//ERROR 404
app.use('*', (req, res) => {
	res.status(404).json({ msg: 'page not found' })
})

//ERROR Middleware gets triggerd by existing route
app.use((error, req, res, next) => {
	console.log(error)
	res.status(500).json({ msg: 'something went wrong' })
})

const port = process.env.PORT || 5100

app.listen(port, () => {
	console.log(`server is running on PORT ${port}...`)
})
