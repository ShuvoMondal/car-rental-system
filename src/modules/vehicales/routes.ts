import { Router } from "express";
import * as vehicleController from "./controller";

const vehicaleRouter = Router();

vehicaleRouter.get("/", vehicleController.getVehicles);
vehicaleRouter.post("/", vehicleController.createVehicle);
vehicaleRouter.get("/:id", vehicleController.getVehicle);
vehicaleRouter.put("/:id", vehicleController.updateVehicle);
vehicaleRouter.delete("/:id", vehicleController.deleteVehicle);

export default vehicaleRouter;

