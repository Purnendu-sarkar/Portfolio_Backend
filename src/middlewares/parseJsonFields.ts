import { Request, Response, NextFunction } from "express";

export const parseJsonFields = (fields: string[]) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      fields.forEach((field) => {
        if (req.body[field] && typeof req.body[field] === "string") {
          req.body[field] = JSON.parse(req.body[field]);
        }
      });
    } catch (error) {
      console.error("❌ JSON parse error:", error);
    }
    next();
  };
};
