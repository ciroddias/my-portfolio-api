import { inject, injectable } from "tsyringe";
import { Transaction } from "../../entities/Transaction";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

@injectable()
class ListTransactionsUseCase {
    constructor(
        @inject("TransactionsRepository")
        private transactionsRepository: ITransactionsRepository){}

    async execute(): Promise<Transaction[]> {
        const transactions = await this.transactionsRepository.list()

        return transactions
    }
}

export { ListTransactionsUseCase }