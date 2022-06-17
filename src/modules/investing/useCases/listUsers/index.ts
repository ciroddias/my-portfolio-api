import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const userRepository = UsersRepository.getInstance()

const listUsersUseCase = new ListUsersUseCase(userRepository)

const listUsersController = new ListUsersController(listUsersUseCase)

export { listUsersController }