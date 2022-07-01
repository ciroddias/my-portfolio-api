import { inject, injectable } from "tsyringe";
import { Transaction } from '../../entities/Transaction'
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";


@injectable()
class FindTransactionByIdUseCase {
    constructor(
        @inject("TransactionsRepository")
        private transactionsRepository: ITransactionsRepository
    ){}

    async execute(id: string): Promise<Transaction> {
        const transaction = await this.transactionsRepository.findById(id)

        return transaction
    }
}

export { FindTransactionByIdUseCase }