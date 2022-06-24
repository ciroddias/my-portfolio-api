import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController";
import { FindUserByEmailController } from "../modules/accounts/useCases/findUserByEmail/FindUserByEmailController"

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController()
const findUserByEmailController = new FindUserByEmailController()

usersRoutes.post("/", createUserController.handle)

usersRoutes.get("/", listUsersController.handle)

usersRoutes.get("/:email", findUserByEmailController.handle)

export { usersRoutes }