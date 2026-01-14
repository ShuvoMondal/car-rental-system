import type { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    logger.error({ err }, "Unhandled Error");
    const status = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({
        success: false,
        error: message
    });
}