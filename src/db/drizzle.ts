import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { env } from "../configs/env";

if (!env.DB_URL) {
    throw new Error("DB_URL is not defined");
}

const sql = neon(env.DB_URL);
export const db = drizzle(sql, { schema });
