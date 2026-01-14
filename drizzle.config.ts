import { defineConfig } from "drizzle-kit";
import { env } from "./src/configs/env";

// Use process.env directly or import your env config if it handles loading .env
// Making sure we have access to environment variables
if (!env.DB_URL) throw new Error("DB_URL is not defined");

export default defineConfig({
    out: "./drizzle",
    schema: "./src/db/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: env.DB_URL,
    },
});

