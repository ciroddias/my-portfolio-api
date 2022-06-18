import { Asset } from "../entities/Asset";
import { Transaction } from "../entities/Transaction";
import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    transactions?: Transaction[];
    assets?: Asset[];
}

interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    list(): Promise<User[]>;
    create({ name, email, password }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };