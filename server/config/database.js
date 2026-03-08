import pg from "pg";
import "dotenv/config";

const { Client } = pg;

export const client = new Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  port: Number(process.env.PGPORT),
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: { rejectUnauthorized: false },
});

try {
  await client.connect();
  console.log("✅ Connected to Render PostgreSQL");
} catch (err) {
  console.error("❌ Database connection failed:", err.message);
}
