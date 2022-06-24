import { ICreateTransactionDTO, ITransactionsRepository } from "../../repositories/ITransactionsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateTransactionUseCase {
    constructor(
        @inject("TransactionsRepository")
        private transactionRepository: ITransactionsRepository){}

    async execute({ ticker, quantity, price, date, user, asset }: ICreateTransactionDTO): Promise<void> {
        await this.transactionRepository.create({ ticker, quantity, price, date, user, asset })
    }
}

export { CreateTransactionUseCase }