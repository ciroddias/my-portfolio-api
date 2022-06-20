import { Asset } from "../entities/Asset";
import { Transaction } from "../entities/Transaction";
import { User } from "../../accounts/entities/User";

interface ICreateTransactionDTO {
    ticker: string;
    quantity: number;
    price: number;
    date?: Date;
    user: User;
    asset: Asset;
}

interface ITransactionsRepository {
    create({ ticker, quantity, price, date, user, asset }: ICreateTransactionDTO): void;
    findById(id: string): Transaction;
    list(): Transaction[];
}

export { ITransactionsRepository, ICreateTransactionDTO }