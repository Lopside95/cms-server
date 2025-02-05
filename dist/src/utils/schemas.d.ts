import z from "zod";
declare const itemSchema: z.ZodObject<{
    item_name: z.ZodString;
    quantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    item_name: string;
    quantity: number;
}, {
    item_name: string;
    quantity: number;
}>;
export type ItemSchema = z.infer<typeof itemSchema>;
export {};
