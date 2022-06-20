import { Asset } from "../../investing/entities/Asset";
import { Transaction } from "../../investing/entities/Transaction";

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    transactions?: Transaction[];
    assets?: Asset[];
}

export { ICreateUserDTO }