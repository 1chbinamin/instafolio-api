import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import config from "./config/app";
import logger from "./config/logger";
import router from "./routes";
import connect from "./config/db";

if (!config.port) process.exit(1);

const port: number = parseInt(config.port as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(port, async () => {
  logger.info(`App is running on port: ${port}`);

  await connect();
});
