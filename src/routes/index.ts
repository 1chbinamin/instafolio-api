import express from "express";
import postRouter from "./postRoutes";

const router = express.Router();

router.use("/posts", postRouter);

export default router;