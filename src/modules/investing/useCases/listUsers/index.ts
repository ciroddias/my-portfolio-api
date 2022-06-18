import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

export default (): ListUsersController => {
    const userRepository = new UsersRepository()
    
    const listUsersUseCase = new ListUsersUseCase(userRepository)
    
    const listUsersController = new ListUsersController(listUsersUseCase)
    
    return listUsersController
}
