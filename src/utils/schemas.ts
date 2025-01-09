import z from "zod";

const itemSchema = z.object({
  name: z.string(),
  quantity: z.number(),
});

export type ItemSchema = z.infer<typeof itemSchema>;
