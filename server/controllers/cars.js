import { client } from "../config/database.js";

export const getCars = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM cars");

    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
  }
};
