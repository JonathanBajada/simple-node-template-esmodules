import { StatusCodes } from 'http-status-codes'

export class NotFoundError extends Error {
	statusCode: StatusCodes.NOT_FOUND
	constructor(message) {
		super(message)
		this.name = 'NotFoundError'
		this.statusCode = StatusCodes.NOT_FOUND
	}
}

export class BadRequestError extends Error {
	statusCode: StatusCodes.BAD_REQUEST
	constructor(message) {
		super(message)
		this.name = 'BadRequestError'
		this.statusCode = StatusCodes.BAD_REQUEST
	}
}

export class UnathenticatedError extends Error {
	statusCode: StatusCodes.UNAUTHORIZED
	constructor(message) {
		super(message)
		this.name = 'UnathenticatedError'
		this.statusCode = StatusCodes.UNAUTHORIZED
	}
}
export class UnautharizedError extends Error {
	statusCode: StatusCodes.FORBIDDEN
	constructor(message) {
		super(message)
		this.name = 'UnathenticatedError'
		this.statusCode = StatusCodes.FORBIDDEN
	}
}
