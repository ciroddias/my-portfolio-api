import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { FindUserByEmailController } from "./FindUserByEmailController";
import { FindUserByEmailUseCase } from "./FindUserByEmailUseCase";

export default (): FindUserByEmailController => {
    const usersRepository = new UsersRepository()

    const findUserByEmailUseCase = new FindUserByEmailUseCase(usersRepository)

    const findByEmailController = new FindUserByEmailController(findUserByEmailUseCase)

    return findByEmailController
}