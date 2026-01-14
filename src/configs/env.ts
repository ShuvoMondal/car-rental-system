import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT ?? 4001,
  NODE_ENV: process.env.NODE_ENV ?? "development",
  JWT_SECRET: process.env.JWT_SECRET ?? "secret",
  DB_URL: process.env.DB_URL,
};
