import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
    create({ name, email, password }: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    list(): Promise<User[]>;
}

export { IUsersRepository };