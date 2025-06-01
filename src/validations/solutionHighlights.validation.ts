import Joi from 'joi'

export const solutionHighlightSchema = Joi.object({
  title: Joi.string().required(),
  subtitle: Joi.string().optional(),
  image: Joi.string().uri().required(),
  buttons: Joi.array()
    .items(
      Joi.object({
        label: Joi.string().required(),
        link: Joi.string().required(),
        icon: Joi.string().uri().optional()
      })
    )
    .required(),
  points: Joi.array().items(Joi.string()).optional()
})
