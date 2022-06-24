import { inject, injectable } from 'tsyringe'
import { Asset } from '../../entities/Asset'
import { Transaction } from '../../entities/Transaction'
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository'

@injectable()
class ListTransactionsByAssetUseCase {
    constructor(
        @inject("TransactionsRepository")
        private transactionsRepository: ITransactionsRepository){}

    async execute(ticker: string): Promise<Transaction[]> {

        const user = await this.transactionsRepository.listTransactionsByAsset(ticker)

        return user
    }
}

export { ListTransactionsByAssetUseCase }