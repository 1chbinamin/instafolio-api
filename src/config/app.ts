import * as dotenv from "dotenv";

dotenv.config();

export default {
  name: process.env.APP_NAME || "Instafolio API",
  port: process.env.APP_PORT || 3000,
  dbUrl: process.env.DB_URL,
};
