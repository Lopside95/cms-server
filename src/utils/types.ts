import z from "zod";

const item = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Item = z.infer<typeof item>;
