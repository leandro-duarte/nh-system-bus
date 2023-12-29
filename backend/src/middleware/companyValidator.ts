import { Request, Response, NextFunction } from "express";
import { companySchema } from "../services/fieldValidations/companySchema";

export default function companyValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = companySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}
