import pino from "pino";
import pinoPretty from "pino-pretty";
import { env } from "../configs/env";

export const logger = pino({
    level: env.NODE_ENV === "development" ? "debug" : "info",
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
            ignore: "pid,hostname",
            translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
        },
    },
});