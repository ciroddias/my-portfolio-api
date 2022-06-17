import { Asset } from "../entities/Asset";
import { Transaction } from "../entities/Transaction";
import { User } from "../entities/User";

interface ICreateTransactionDTO {
    ticker: string;
    quantity: number;
    price: number;
    date?: Date;
    user: User;
    asset: Asset;
}

interface ITransactionsRepository {
    findById(id: string): Transaction;
    list(): Transaction[];
    create({ ticker, quantity, price, date, user, asset }: ICreateTransactionDTO): void;
}

export { ITransactionsRepository, ICreateTransactionDTO }