import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindUserByEmailUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository){}

    async execute(email: string): Promise<User> {
        const user = await this.usersRepository.findByEmail(email)
       
        return user
    }
}

export { FindUserByEmailUseCase }
