import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database";
import { AppError } from "../../../../errors/AppError";
import { Asset } from "../../entities/Asset";
import { Transaction } from "../../entities/Transaction";
import { ICreateTransactionDTO, ITransactionsRepository } from "../ITransactionsRepository";

class TransactionsRepository implements ITransactionsRepository {
    private repository: Repository<Transaction>
    private assetRepository: Repository<Asset>

    constructor(){
        this.repository = AppDataSource.getRepository(Transaction)
        this.assetRepository = AppDataSource.getRepository(Asset)
    }
       
    async create({ type, quantity, price, date, user, ticker }: ICreateTransactionDTO): Promise<void> {

        const asset = await this.assetRepository.findOneBy({ ticker })

        if (!asset) throw new AppError('Asset not found', 400)

        const transaction = this.repository.create({
            type, quantity, price, date, user, asset,
        })

        await this.repository.save(transaction)
    }

    async findById(id: string): Promise<Transaction> {
        const transaction = await this.repository.findOneBy({ id })

        return transaction
    }

    async list(): Promise<Transaction[]> {
        const transactions = await this.repository.find()
        return transactions
    }

    async listTransactionsByAsset(ticker: string): Promise<Transaction[]> {
        const transactions = await this.repository.findBy({ asset: {ticker} })

        return transactions
    }
    
}

export { TransactionsRepository }