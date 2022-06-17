import { Router } from "express";

import { createUserController } from "../modules/investing/useCases/createUser";
import { listUsersController } from "../modules/investing/useCases/listUsers";

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
    return createUserController.handle(req, res)
})

usersRoutes.get("/", (req, res) => {
    return listUsersController.handle(req, res)
})

export { usersRoutes }