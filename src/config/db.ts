import mongoose from "mongoose";
import config from "../config/app";
import logger from "./logger";

const connect = async () => {
  try {
    await mongoose.connect(config.dbUrl!);
    logger.info("Connected to database");
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

export default connect;
