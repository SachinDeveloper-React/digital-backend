export class ApiError extends Error {
  public statusCode: number
  public errorCode: string
  public errors: any

  constructor(
    message: string,
    statusCode = 500,
    errorCode = 'INTERNAL_SERVER_ERROR',
    errors: any = null
  ) {
    super(message)
    this.statusCode = statusCode
    this.errorCode = errorCode
    this.errors = errors

    Error.captureStackTrace(this, this.constructor)
  }
}
