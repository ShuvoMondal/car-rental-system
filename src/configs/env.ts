import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT ?? 4001,
  NODE_ENV: process.env.NODE_ENV ?? "development",
  JWT_SECRET: process.env.JWT_SECRET ?? "secret",
  db_host: "127.0.0.1",
  db_port: 5432,
  db_user: "admin",
  db_password: "admin",
};
