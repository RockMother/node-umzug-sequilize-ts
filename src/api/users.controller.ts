import { Router, Request, Response, NextFunction } from "express";

const users = Router();

users.get("", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(); // get users
  } catch (e) {
    next(e);
  }
});
