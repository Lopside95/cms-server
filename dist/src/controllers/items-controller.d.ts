import { NextFunction, Request, Response } from "express";
declare const getItems: (req: Request, res: Response) => Promise<void>;
declare const getItemById: (req: Request, res: Response) => Promise<void>;
declare const addItem: (req: Request, res: Response, next: NextFunction) => Promise<void>;
declare const updateItem: (req: Request, res: Response) => Promise<void>;
declare const deleteItem: (req: Request, res: Response) => Promise<void>;
export { getItems, addItem, updateItem, getItemById, deleteItem };
