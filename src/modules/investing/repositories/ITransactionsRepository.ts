import { Asset } from "../entities/Asset";
import { Transaction } from "../entities/Transaction";
import { User } from "../../accounts/entities/User";

interface ICreateTransactionDTO {
    type: string;
    ticker: string;
    quantity: number;
    price: number;
    date?: Date;
    userId: string;
}

interface ITransactionsRepository {
    create({ ticker, quantity, price, date, userId }: ICreateTransactionDTO): Promise<void>;
    findById(id: string): Promise<Transaction>;
    list(): Promise<Transaction[]>;
    listByAsset(ticker: string): Promise<Transaction[]>
}

export { ITransactionsRepository, ICreateTransactionDTO }