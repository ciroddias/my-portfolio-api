import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository){}
  
    async execute({ name, email, password }: IRequest): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email)

       if (userAlreadyExists) {
            throw new Error("User already exists!")
        }
        
        await this.usersRepository.create({ name, email, password })
    }

}

export { CreateUserUseCase }