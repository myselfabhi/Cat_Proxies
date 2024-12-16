import Joi from "joi"

const post = Joi.object({
  domain: Joi.string().required(),
  proxyType: Joi.string().required(),
})

export default { post }
