import { server } from "./app";
import { env } from "./configs/env";
import { logger } from "./utils/logger";

const app = server();

const appServer = app.listen(env.PORT, () => {
    console.log(`Server started on port ${env.PORT}`);
});

const shutdown = () => {
    logger.info("Shutting down server");
    appServer.close(() => {
        logger.info("Server closed");
        process.exit(0);
    });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

