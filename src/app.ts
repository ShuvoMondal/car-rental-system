import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";
import { errorHandler } from "./middlewares/errors.middleware";

export function server() {
    const app = express();

    app.use(express.json());
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(cors(
        {
            origin: true,
            credentials: true,
        }
    ));
    app.use("/api", routes);
    app.use(errorHandler);

    return app;
}
