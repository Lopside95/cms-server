import { Request, Response } from "express";

const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ message: "Hello from the items route" });
  } catch (error) {
    console.error(error);
  }
};

const addItem = async (req: Request, res: Response) => {};

export { getItems };
