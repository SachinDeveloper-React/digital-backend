import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export const validateBody =
  (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body)
    console.log('error', error)
    if (error) {
      res.status(400).json({ message: error.details[0].message })
      return
    }
    next()
  }
