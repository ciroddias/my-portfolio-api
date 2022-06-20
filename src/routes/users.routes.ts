import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import listUsersController from "../modules/accounts/useCases/listUsers";
import findUserByEmailController from "../modules/accounts/useCases/findUserByEmail"

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