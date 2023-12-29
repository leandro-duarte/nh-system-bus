import { Request, Response, NextFunction } from "express";
import { busLineSchema } from "../services/fieldValidations/busLineSchema";

export default function busLineValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = busLineSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}
