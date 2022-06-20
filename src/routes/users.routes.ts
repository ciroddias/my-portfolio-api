import { Router } from "express";

import { CreateUserController } from "../modules/investing/useCases/createUser/CreateUserController";
import listUsersController from "../modules/investing/useCases/listUsers";
import findUserByEmailController from "../modules/investing/useCases/findUserByEmail"

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle)

usersRoutes.get("/", (req, res) => {
    return listUsersController().handle(req, res)
})

usersRoutes.get("/:email", (req, res) => {
    return findUserByEmailController().handle(req, res)
})

export { usersRoutes }