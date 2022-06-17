import { User } from "../entities/User"
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
    list(): User[] {
        return []
    }

    findByEmail(email: string): User {
        return {name: "name", email: "email", password: "pass"};
    }
    
    create({name, email, password, transactions = [], assets = []}: ICreateUserDTO): void {
        const user = new User();

        Object.assign(user, {
            name, email, password, transactions, assets
        })
    }
}

export { UsersRepository }