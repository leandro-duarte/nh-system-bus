import Joi from 'joi'

export const userSchema = Joi.object({
    
    name:Joi.string().required().max(255),
    username:Joi.string().required().max(15),
    cpf: Joi.string().required().pattern(/^[0-9]+$/).max(11),
    rg: Joi.string().required().pattern(/^[0-9]+$/).max(9),
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
    phone:Joi.string().pattern(/^[0-9]+$/).allow('').optional().max(10),
    cellPhone:Joi.string().pattern(/^[0-9]+$/).required().max(11),
    employeeId:Joi.string().pattern(/^[0-9]+$/).max(6).required(),
    password:Joi.string().alphanum().min(6).max(8).required()
})