import { NextFunction, Request, Response } from "express";
declare const getShelters: (req: Request, res: Response) => Promise<void>;
declare const getShelterById: (req: Request, res: Response) => Promise<void>;
declare const createShelter: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export { getShelters, createShelter, getShelterById };
