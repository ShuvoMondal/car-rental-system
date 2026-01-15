import type { Request, Response } from "express";
import { createVehicleSchema, updateVehicleSchema } from "./zodSchema";
import * as vehicleService from "./services";

export const getVehicles = async (req: Request, res: Response) => {
    try {
        const vehicles = await vehicleService.getAllVehicles();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch vehicles", error });
    }
};

export const createVehicle = async (req: Request, res: Response) => {
    try {
        const parseResult = createVehicleSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json({ error: parseResult.error });
            return;
        }

        const vehicle = await vehicleService.createVehicle({
            ...parseResult.data,
            rentPerDay: parseResult.data.rentPerDay.toString(),
        });
        res.status(201).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: "Failed to create vehicle", error });
    }
};

export const getVehicle = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            res.status(400).json({ message: "Invalid ID" });
            return;
        }

        const vehicle = await vehicleService.getVehicleById(id);
        if (!vehicle) {
            res.status(404).json({ message: "Vehicle not found" });
            return;
        }

        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch vehicle", error });
    }
};

export const updateVehicle = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            res.status(400).json({ message: "Invalid ID" });
            return;
        }

        const parseResult = updateVehicleSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json({ error: parseResult.error });
            return;
        }

        const dataToUpdate = {
            ...parseResult.data,
            rentPerDay: parseResult.data.rentPerDay?.toString()
        };

        const vehicle = await vehicleService.updateVehicle(id, dataToUpdate);
        if (!vehicle) {
            res.status(404).json({ message: "Vehicle not found" });
            return;
        }
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: "Failed to update vehicle", error });
    }
};

export const deleteVehicle = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            res.status(400).json({ message: "Invalid ID" });
            return;
        }

        const vehicle = await vehicleService.deleteVehicle(id);
        if (!vehicle) {
            res.status(404).json({ message: "Vehicle not found" });
            return;
        }
        res.status(200).json({ message: "Vehicle deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete vehicle", error });
    }
};
