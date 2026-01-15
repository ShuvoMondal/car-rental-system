import { z } from "zod";

export const createVehicleSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    rentPerDay: z.number().positive("Rent must be positive")
});

export const updateVehicleSchema = createVehicleSchema.partial();
