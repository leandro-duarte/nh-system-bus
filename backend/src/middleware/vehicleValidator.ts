import { Request, Response, NextFunction } from "express";
import { vehicleSchema } from "../services/fieldValidations/vehicleSchema";

export default function vehicleValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = vehicleSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}
