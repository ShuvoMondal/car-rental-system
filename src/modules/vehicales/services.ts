import { eq } from "drizzle-orm";
import { db } from "../../db/drizzle";
import { vehicles } from "../../db/schema";
import type { InferInsertModel } from "drizzle-orm";

export type NewVehicle = InferInsertModel<typeof vehicles>;

export const createVehicle = async (data: NewVehicle) => {
    const result = await db.insert(vehicles).values(data).returning();
    return result[0];
};

export const getAllVehicles = async () => {
    return await db.select().from(vehicles);
};

export const getVehicleById = async (id: number) => {
    const result = await db.select().from(vehicles).where(eq(vehicles.id, id));
    return result[0];
};

export const updateVehicle = async (id: number, data: Partial<NewVehicle>) => {
    const result = await db.update(vehicles).set(data).where(eq(vehicles.id, id)).returning();
    return result[0];
};

export const deleteVehicle = async (id: number) => {
    const result = await db.delete(vehicles).where(eq(vehicles.id, id)).returning();
    return result[0];
};
