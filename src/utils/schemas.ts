import z from "zod";

const itemSchema = z.object({
  // id: z.number(),
  itemName: z.string(),
  quantity: z.number(),
});

export type ItemSchema = z.infer<typeof itemSchema>;
