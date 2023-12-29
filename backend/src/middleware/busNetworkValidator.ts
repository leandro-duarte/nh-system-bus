import { Request, Response, NextFunction } from "express";
import { busNetworkSchema } from "../services/fieldValidations/busNetworkSchema";

export default function busNetworkValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = busNetworkSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}
