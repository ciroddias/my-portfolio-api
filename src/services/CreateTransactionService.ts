import { Asset } from "../entities/Asset";
import { User } from "../entities/User";
import { ITransactionsRepository } from "../repositories/ITransactionsRepository";

interface IRequest {
    ticker: string;
    quantity: number;
    price: number;
    date?: Date;
    user: User;
    asset: Asset
}

class CreateTransactionService {
    constructor(private transactionRepository: ITransactionsRepository){}

    execute({ ticker, quantity, price, date, user, asset }: IRequest): void {
        this.transactionRepository.create({ ticker, quantity, price, date, user, asset })
    }
}

export { CreateTransactionService }