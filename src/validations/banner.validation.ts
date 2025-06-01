import Joi from 'joi'

export const bannerValidationSchema = Joi.object({
  title: Joi.string().required(),
  subtitle: Joi.string().allow(''),
  backgroundImage: Joi.string().uri().allow(''),
  buttons: Joi.array()
    .items(
      Joi.object({
        label: Joi.string().required(),
        link: Joi.string().uri().required(),
        icon: Joi.string().allow('')
      })
    )
    .default([]),
  animationIcons: Joi.array().items(Joi.string().uri()).default([])
})
