import { Transaction } from "../../entities/Transaction";
import { ICreateTransactionDTO, ITransactionsRepository } from "../ITransactionsRepository";
import { UsersRepository } from "./UsersRepository";

class TransactionsRepository implements ITransactionsRepository {

    private static INSTANCE: TransactionsRepository;

    private constructor(){}

    public static getInstance(): TransactionsRepository {
        if (!TransactionsRepository.INSTANCE){
            TransactionsRepository.INSTANCE = new TransactionsRepository()
        }

        return TransactionsRepository.INSTANCE;
    }
    
    create({ ticker, quantity, price, date, user, asset }: ICreateTransactionDTO): void {
        throw new Error("Method not implemented.");
    }

    findById(id: string): Transaction {
        throw new Error("Method not implemented.");
    }

    list(): Transaction[] {
        throw new Error("Method not implemented.");
    }

    
}

export { TransactionsRepository }