import { Request, Response, NextFunction } from "express";
import { agencySchema } from "../services/fieldValidations/agencySchema";

export default function agencyValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = agencySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}
