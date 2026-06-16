const express = require("express");
const { Client } = require("pg");

const app = express();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: 5432,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL");
  } catch (err) {
    console.error("DB connection failed:", err.message);
  }
}

connectDB();

app.get("/", async (req, res) => {
  try {
    const result = await client.query("SELECT NOW()");
    res.send(`Database Connected\nTime: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
