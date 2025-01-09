import z from "zod";

const itemSchema = z.object({
  name: z.string(),
  quanitiy: z.number(),
});

export type ItemSchema = z.infer<typeof itemSchema>;
