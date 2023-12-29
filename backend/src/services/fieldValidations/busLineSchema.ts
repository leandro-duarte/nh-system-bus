import Joi from 'joi'

export const busLineSchema = Joi.object({
    
    code:Joi.number().integer().required().min(3).max(3),
    name: Joi.string().max(50).required(),
    timeStart:Joi.string().required().min(5) .max(5),
    timeEnd:Joi.string().required().min(5).max(5),
    ridership:Joi.number().integer().required().max(12),
    vehicleId:Joi.number().integer().required(),
    companyId:Joi.number().integer().required()

})