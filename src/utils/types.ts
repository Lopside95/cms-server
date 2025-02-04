import z from "zod";

const item = z.object({
  id: z.number(),
  item_name: z.string(),
  quantity: z.number(),
  created_at: z.date(),
  updated_at: z.date(),
});

const animal = z.object({
  id: z.number(),
  name: z.string(),
  species: z.string(),
  age: z.number(),
  chip_number: z.string(),
  shelter_id: z.number(),
  created_at: z.date(),
  updated_at: z.date(),
  breed: z.string(),
});

const food = z.object({
  id: z.number(),
  name: z.string(),
  quantity: z.number(),
  created_at: z.date(),
  updated_at: z.date(),
  shelter_id: z.number(),
});

const shelter = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  phone: z.string(),
  email: z.string(),
  longitude: z.number(),
  latitude: z.number(),
  animals: z.array(animal),
  foods: z.array(food),
});

const condition = z.enum(["HEALTHY", "SICK", "INJURED", "DISABLED"]);

const role = z.enum(["USER", "ADMIN"]);

// export const allModels = [item, animal, food, shelter];

export { item, animal, food, shelter, condition, role };

export type Item = z.infer<typeof item>;
export type Animal = z.infer<typeof animal>;
export type Shelter = z.infer<typeof shelter>;
export type Food = z.infer<typeof food>;
export type Condition = z.infer<typeof condition>;
export type Role = z.infer<typeof role>;
