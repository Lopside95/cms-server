import { Request, Response } from "express";

const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ message: "Hello from the items route" });
  } catch (error) {
    console.error(error);
  }
};

export { getItems };
