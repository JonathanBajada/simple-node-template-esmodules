import { StatusCodes } from 'http-status-codes'

export class NotFoundError extends Error {
	statusCode: StatusCodes.NOT_FOUND
	constructor(message) {
		super(message)
		this.statusCode = StatusCodes.NOT_FOUND
	}
}
