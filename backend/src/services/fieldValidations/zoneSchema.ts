import Joi from 'joi'

export const zoneSchema = Joi.object({
    
    name:Joi.string().required().max(35),
    code: Joi.string().required().min(1).max(1),

})