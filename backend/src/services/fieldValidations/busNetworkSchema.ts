import Joi from 'joi'

export const busNetworkSchema = Joi.object({
    
    name:Joi.string().required().max(30),
    cnpj: Joi.string().required().max(14),
    adress:Joi.object({
        street:Joi.string().required().max(70),
        number:Joi.number().integer(),
        complement:Joi.string().max(20),
        neighborhood:Joi.string(),
        city:Joi.string().required(),
        state:Joi.string().min(2).max(2).required(),
        zipCode:Joi.number().integer().min(8).max(8).required()
    }),
    email:Joi.string().email().required(),
    phone:Joi.string().required().max(10),
    agencyId:Joi.number().integer().required()
})