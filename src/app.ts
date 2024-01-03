import express from "express";
import { migrate } from "./persistence/database/migrate";

const app = express();

const start = async (): Promise<void> => {
  try {
    await migrate();
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
