import { Asset } from "../entities/Asset";
import { Transaction } from "../entities/Transaction";
import { User } from "../../accounts/entities/User";

interface ICreateTransactionDTO {
    asset: Asset;
    quantity: number;
    price: number;
    date?: Date;
    user: User;
}

interface ITransactionsRepository {
    create({ asset, quantity, price, date, user }: ICreateTransactionDTO): Promise<void>;
    findById(id: string): Promise<Transaction>;
    list(): Promise<Transaction[]>;
    listTransactionsByAsset(ticker: string): Promise<Transaction[]>
}

export { ITransactionsRepository, ICreateTransactionDTO }