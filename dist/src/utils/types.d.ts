import z from "zod";
declare const item: z.ZodObject<{
    id: z.ZodNumber;
    item_name: z.ZodString;
    quantity: z.ZodNumber;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    item_name: string;
    quantity: number;
    id: number;
    created_at: Date;
    updated_at: Date;
}, {
    item_name: string;
    quantity: number;
    id: number;
    created_at: Date;
    updated_at: Date;
}>;
declare const animal: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    species: z.ZodString;
    age: z.ZodNumber;
    chip_number: z.ZodString;
    shelter_id: z.ZodNumber;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    breed: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    species: string;
    age: number;
    chip_number: string;
    shelter_id: number;
    breed: string;
}, {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    species: string;
    age: number;
    chip_number: string;
    shelter_id: number;
    breed: string;
}>;
declare const food: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    quantity: z.ZodNumber;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    shelter_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    shelter_id: number;
}, {
    quantity: number;
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    shelter_id: number;
}>;
declare const shelter: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    location: z.ZodString;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    phone: z.ZodString;
    email: z.ZodString;
    longitude: z.ZodNumber;
    latitude: z.ZodNumber;
    animals: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        species: z.ZodString;
        age: z.ZodNumber;
        chip_number: z.ZodString;
        shelter_id: z.ZodNumber;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        breed: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        created_at: Date;
        updated_at: Date;
        name: string;
        species: string;
        age: number;
        chip_number: string;
        shelter_id: number;
        breed: string;
    }, {
        id: number;
        created_at: Date;
        updated_at: Date;
        name: string;
        species: string;
        age: number;
        chip_number: string;
        shelter_id: number;
        breed: string;
    }>, "many">;
    foods: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        quantity: z.ZodNumber;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        shelter_id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        id: number;
        created_at: Date;
        updated_at: Date;
        name: string;
        shelter_id: number;
    }, {
        quantity: number;
        id: number;
        created_at: Date;
        updated_at: Date;
        name: string;
        shelter_id: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    location: string;
    phone: string;
    email: string;
    longitude: number;
    latitude: number;
    animals: {
        id: number;
        created_at: Date;
        updated_at: Date;
        name: string;
        species: string;
        age: number;
        chip_number: string;
        shelter_id: number;
        breed: string;
    }[];
    foods: {
        quantity: number;
        id: number;
        created_at: Date;
        updated_at: Date;
        name: string;
        shelter_id: number;
    }[];
}, {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    location: string;
    phone: string;
    email: string;
    longitude: number;
    latitude: number;
    animals: {
        id: number;
        created_at: Date;
        updated_at: Date;
        name: string;
        species: string;
        age: number;
        chip_number: string;
        shelter_id: number;
        breed: string;
    }[];
    foods: {
        quantity: number;
        id: number;
        created_at: Date;
        updated_at: Date;
        name: string;
        shelter_id: number;
    }[];
}>;
declare const condition: z.ZodEnum<["HEALTHY", "SICK", "INJURED", "DISABLED"]>;
declare const role: z.ZodEnum<["USER", "ADMIN"]>;
export { item, animal, food, shelter, condition, role };
export type Item = z.infer<typeof item>;
export type Animal = z.infer<typeof animal>;
export type Shelter = z.infer<typeof shelter>;
export type Food = z.infer<typeof food>;
export type Condition = z.infer<typeof condition>;
export type Role = z.infer<typeof role>;
