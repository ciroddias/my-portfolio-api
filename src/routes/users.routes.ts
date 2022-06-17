import { response, Router } from "express";
import { UsersRepository } from "../repositories/UsersRepository";
import { CreateUserService } from "../services/CreateUserService";

const usersRoutes = Router();
const usersRepository = new UsersRepository()

usersRoutes.post("/", (req, res) => {
    const {name, email, password} = req.body;

    const createUserService = new CreateUserService(usersRepository)
    createUserService.execute({ name, email, password })

    return response.status(201).json({ })
})

usersRoutes.get("/", (req, res) => {
    const users = usersRepository.list()

    return res.status(200).json(users)
})

export { usersRoutes }