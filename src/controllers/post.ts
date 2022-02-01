import { Request, Response } from "express";
import { index, find, store } from "../services/post";

export const getPostsHandler = async (req: Request, res: Response) => {
  try {
    const posts = await index();

    return res.json(posts);
  } catch (err: any) {
    return res.status(500).json("Something went wrong");
  }
};

export const getPostHandler = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const post = await find(id);

    return res.json(post);
  } catch (err: any) {
    return res.status(500).json("Something went wrong");
  }
};

export const storePostHandler = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const post = await store(id);

    return res.json(post);
  } catch (err: any) {
    return res.status(500).json("Something went wrong");
  }
};
