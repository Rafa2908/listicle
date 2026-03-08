import { client } from "../config/database.js";

const createTableQuery = `
CREATE TABLE IF NOT EXISTS cars(
id SERIAL PRIMARY KEY,
name varchar(15) NOT NULL,
model varchar(30) NOT NULL,
engine varchar(30) NOT NULL,
image text NOT NULL,
price float NOT NULL,
description TEXT NOT NULL
)
`;

export const createTable = async () => {
  try {
    const res = await client.query(createTableQuery);
    console.log("Table created successfully.", res);
  } catch (error) {
    console.log(error);
  }
};

createTable();
