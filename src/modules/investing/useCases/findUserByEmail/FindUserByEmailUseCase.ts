import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class FindUserByEmailUseCase {
    constructor(private usersRepository: IUsersRepository){}

    async execute(email: string): Promise<User> {
        const user = await this.usersRepository.findByEmail(email)
       
        return user
    }
}

export { FindUserByEmailUseCase }
