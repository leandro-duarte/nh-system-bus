import { Request, Response, NextFunction } from "express";
import { zoneSchema } from "../services/fieldValidations/zoneSchema";

export default function zoneValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = zoneSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}
