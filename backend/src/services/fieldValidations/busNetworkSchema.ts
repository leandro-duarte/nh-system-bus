import Joi from 'joi'

export const busNetworkSchema = Joi.object({
    
    id:Joi.number().integer().min(1),
    name:Joi.string().required().max(255),
    cnpj: Joi.string().required().max(14),
    adress:Joi.object({
        street:Joi.string().required().max(255),
        number:Joi.number().integer(),
        complement:Joi.string().max(155),
        neighborhood:Joi.string().max(155),
        city:Joi.string().required().max(155),
        state:Joi.string().min(2).max(2).required(),
        zipCode:Joi.string().min(8).max(8).required()
    }),
    email:Joi.string().email().required().max(155),
    phone:Joi.string().required().max(10),
    agencyId:Joi.number().integer().required(),
    zoneId:Joi.number().integer().required()
})