import Joi from 'joi'

export const companySchema = Joi.object({
    
    name:Joi.string().required().max(255),
    cnpj: Joi.string().required().pattern(/^[0-9]+$/).max(14),
    adress:Joi.object({
        street:Joi.string().required().max(255),
        number:Joi.number().integer(),
        complement:Joi.string().allow('').optional().max(155),
        neighborhood:Joi.string().max(155),
        city:Joi.string().required().max(155),
        state:Joi.string().min(2).max(2).required(),
        zipCode:Joi.string().pattern(/^[0-9]+$/).min(8).max(8).required()
    }),
    email:Joi.string().email().required().max(155),
    phone:Joi.string().pattern(/^[0-9]+$/).required().max(10),
    busNetworkId:Joi.number().integer().required()
})