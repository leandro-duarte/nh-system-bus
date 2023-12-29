import Joi from 'joi'

export const vehicleSchema = Joi.object({
    
    id:Joi.number().integer().min(1),
    manufacturer:Joi.string().required().max(20),
    model: Joi.string().required().max(20),
    prefix:Joi.string().required().min(6) .max(6),
    manufacturingYear:Joi.number().integer().required(),
    capacity:Joi.number().integer().required().max(120),
    companyId:Joi.number().integer().required()

})