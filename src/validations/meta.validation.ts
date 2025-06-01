import Joi from 'joi'

export const metaValidationSchema = Joi.object({
  page: Joi.string().trim().required().messages({
    'string.base': 'Page must be a string',
    'string.empty': 'Page is required',
    'any.required': 'Page is required'
  }),
  title: Joi.string().trim().required().messages({
    'string.base': 'Title must be a string',
    'string.empty': 'Title is required',
    'any.required': 'Title is required'
  }),
  description: Joi.string().allow('').optional().messages({
    'string.base': 'Description must be a string'
  }),
  keywords: Joi.string().allow('').optional().messages({
    'string.base': 'Keywords must be a string'
  }),
  faviconUrl: Joi.string()
    .pattern(/^\/[a-zA-Z0-9\-\/]*$/)
    .required()
    .messages({
      'string.pattern.base': 'Link must be a valid relative URI starting with "/"'
    })
})
