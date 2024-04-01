import { drizzle } from "drizzle-orm/postgres-js";
import pg from "postgres";
import * as schema from "../drizzle/schema";

const conn = pg(process.env.DATABASE_URL!, { max: 1 });

export const db = drizzle(conn, { schema });
