import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/investing/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/investing/repositories/implementations/UsersRepository"

container.registerSingleton<IUsersRepository>(
    "UsersRepository", 
    UsersRepository
)