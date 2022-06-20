import { Router } from "express";

import createUserController from "../modules/investing/useCases/createUser";
import listUsersController from "../modules/investing/useCases/listUsers";
import findUserByEmailController from "../modules/investing/useCases/findUserByEmail"

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
    return createUserController().handle(req, res)
})

usersRoutes.get("/", (req, res) => {
    return listUsersController().handle(req, res)
})

usersRoutes.get("/:email", (req, res) => {
    return findUserByEmailController().handle(req, res)
})

export { usersRoutes }