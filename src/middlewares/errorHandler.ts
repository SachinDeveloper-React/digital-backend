import { Request, Response, NextFunction } from 'express'
import { errorResponse } from '../utils/response'
import { ApiError } from '../utils/ApiError'

export const errorHandler = (
  err: Error | ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('❌ Error:', err)

  if (err instanceof ApiError) {
    errorResponse(res, err.message, err.statusCode, err.errorCode, err.errors)
  } else {
    errorResponse(res, 'Internal Server Error', 500, 'INTERNAL_SERVER_ERROR')
  }
}
