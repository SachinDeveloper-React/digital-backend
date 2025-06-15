import Joi from 'joi'

export const contactValidationSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    'string.empty': 'Title is required'
  }),
  data: Joi.string().required().messages({
    'string.empty': 'Data is required'
  }),
  iconPath: Joi.string().required().messages({
    'string.empty': 'Icon path is required'
  }),
  iconContent: Joi.string().required().messages({
    'string.empty': 'Icon content is required'
  })
})

export const contactCustomerValidationSchema = Joi.object({
  firstName: Joi.string().trim().min(1).required().messages({
    'string.empty': 'First name is required',
    'string.min': 'First name must be at least 1 character long'
  }),
  lastName: Joi.string().trim().min(1).required().messages({
    'string.empty': 'Last name is required',
    'string.min': 'Last name must be at least 1 character long'
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Email must be a valid email address'
  }),
  phone: Joi.string().optional().allow('', null),
  subject: Joi.string().trim().min(3).required().messages({
    'string.empty': 'Subject is required',
    'string.min': 'Subject must be at least 3 characters long'
  }),
  message: Joi.string().trim().min(5).required().messages({
    'string.empty': 'Message is required',
    'string.min': 'Message must be at least 5 characters long'
  })
})
