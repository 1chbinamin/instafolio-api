import express, { Request, Response } from "express";
import {
  getPostsHandler,
  getPostHandler,
  storePostHandler,
} from "../controllers/post";

const router = express.Router();

router
  .get("/", getPostsHandler)
  .get("/:id", getPostHandler)
  .post("/", storePostHandler);

export default router;
