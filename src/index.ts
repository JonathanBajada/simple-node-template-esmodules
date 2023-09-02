import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'

// try {
// 	const response = await fetch(
// 		'https://www.course-api.com/react-useReducer-cart-project'
// 	)
// 	const cartData = await response.json()
// 	console.log(cartData)
// } catch (error) {
// 	console.log(error)
// }

//fetch example
// fetch('https://www.course-api.com/react-useReducer-cart-project')
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))

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

const port = process.env.PORT || 5100

app.listen(port, () => {
	console.log(`server is running on PORT ${port}...`)
})
