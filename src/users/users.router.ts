/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as UserService from "./users.controller";
 import { UserSchema, User } from "./user.model";
/**
 * Router Definition
 */

 export const usersRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

usersRouter.get("/", async (req: Request, res: Response) => {
    try {
      const users: User[] = await UserService.findAll();
  
      res.status(200).send({users});
    } catch (e) {
      res.status(500).send({e});
    }
  });

// GET items/:id

usersRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const user: User = await UserService.find(id);
  
      if (user) {
        return res.status(200).send(user);
      }
  
      res.status(404).send({message: "item not found"});
    } catch (e) {
      res.status(500).send({e});
    }
  });

// POST items

usersRouter.post("/", async (req: Request, res: Response) => {
    try {
      const user: UserSchema = req.body;
  
      const newItem = await UserService.create(user);
  
      res.status(201).send({newItem});
    } catch (e) {
      res.status(500).send({e});
    }
  });

// PUT items/:id

usersRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const userUpdate: User = req.body;
  
      const existingUser: User = await UserService.find(id);
  
      if (existingUser) {
        const updatedUser = await UserService.update(id, userUpdate);
        return res.status(200).send({updatedUser});
      }
  
      const userItem = await UserService.create(userUpdate);
  
      res.status(201).send({userItem});
    } catch (e) {
      res.status(500).send({e});
    }
  });

// DELETE items/:id

usersRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await UserService.remove(id);
  
      res.status(200).send({message:`User with ${id} has been deleted!`});
    } catch (e) {
      res.status(500).send({e});
    }
  });