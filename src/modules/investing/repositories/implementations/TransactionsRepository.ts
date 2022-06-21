import { AppError } from "../../../../errors/AppError";
import { Transaction } from "../../entities/Transaction";
import { ICreateTransactionDTO, ITransactionsRepository } from "../ITransactionsRepository";

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
        throw new AppError("Method not implemented.");
    }

    findById(id: string): Transaction {
        throw new AppError("Method not implemented.");
    }

    list(): Transaction[] {
        throw new AppError("Method not implemented.");
    }

    
}

export { TransactionsRepository }