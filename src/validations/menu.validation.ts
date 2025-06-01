import Joi from 'joi'

export const menuSchema = Joi.object({
  label: Joi.string().required(),
  link: Joi.string()
    .pattern(/^\/[a-zA-Z0-9\-\/]*$/)
    .required()
    .messages({
      'string.pattern.base': 'Link must be a valid relative URI starting with "/"'
    }),
  submenu: Joi.array()
    .items(
      Joi.object({
        label: Joi.string().required(),
        link: Joi.string()
          .pattern(/^\/[a-zA-Z0-9\-\/]*$/)
          .required()
          .messages({
            'string.pattern.base': 'Link must be a valid relative URI starting with "/"'
          })
      })
    )
    .optional()
})
