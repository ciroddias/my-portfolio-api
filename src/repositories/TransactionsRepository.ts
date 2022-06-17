import { Transaction } from "../entities/Transaction";
import { ICreateTransactionDTO, ITransactionsRepository } from "./ITransactionsRepository";

class TransactionsRepository implements ITransactionsRepository {
    findById(id: string): Transaction {
        throw new Error("Method not implemented.");
    }

    list(): Transaction[] {
        throw new Error("Method not implemented.");
    }

    create({ ticker, quantity, price, date, user, asset }: ICreateTransactionDTO): void {
        throw new Error("Method not implemented.");
    }
    
}

export { TransactionsRepository }