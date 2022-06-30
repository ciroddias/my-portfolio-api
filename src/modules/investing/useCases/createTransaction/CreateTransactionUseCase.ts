import { ICreateTransactionDTO, ITransactionsRepository } from "../../repositories/ITransactionsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateTransactionUseCase {
    constructor(
        @inject("TransactionsRepository")
        private transactionRepository: ITransactionsRepository){}

    async execute({ type, quantity, price, date, user, ticker }: ICreateTransactionDTO): Promise<void> {
        await this.transactionRepository.create({ type, quantity, price, date, user, ticker })
    }
}

export { CreateTransactionUseCase }