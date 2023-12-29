import Joi from 'joi'

export const zoneSchema = Joi.object({
    
    id:Joi.number().integer().min(1),
    name:Joi.string().required().max(35),
    code: Joi.string().required().min(1).max(1),

})