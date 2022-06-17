import { User } from "../../entities/User"
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

    private static INSTANCE: UsersRepository; 

    private constructor(){}

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE){
            UsersRepository.INSTANCE = new UsersRepository()
        }

        return UsersRepository.INSTANCE;
    }

    create({name, email, password, transactions, assets}: ICreateUserDTO): void {
        const user = new User();

        Object.assign(user, {
            name, email, password, transactions, assets
        })
    }

    list(): User[] {
        return []
    }

    findByEmail(email: string): User {
        return {name: "name", email: "email", password: "pass"};
    }  
}

export { UsersRepository }