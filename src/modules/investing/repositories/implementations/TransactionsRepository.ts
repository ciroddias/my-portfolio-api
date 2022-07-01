import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database";
import { AppError } from "../../../../errors/AppError";
import { User } from "../../../accounts/entities/User";
import { Asset } from "../../entities/Asset";
import { Transaction, TransactionTypes } from "../../entities/Transaction";
import { ICreateTransactionDTO, ITransactionsRepository } from "../ITransactionsRepository";

class TransactionsRepository implements ITransactionsRepository {
    private repository: Repository<Transaction>
    private assetRepository: Repository<Asset>
    private userRepository: Repository<User>

    constructor(){
        this.repository = AppDataSource.getRepository(Transaction)
        this.assetRepository = AppDataSource.getRepository(Asset)
        this.userRepository = AppDataSource.getRepository(User)
    }
       
    async create({ type, quantity, price, date, userId, ticker }: ICreateTransactionDTO): Promise<void> {

        const asset = await this.assetRepository.findOneBy({ ticker })

        if (!asset) throw new AppError('Asset not found', 400)

        const user = await this.userRepository.findOneBy({ id: userId })

        if (!asset) throw new AppError('User not found', 400)

        const transaction = this.repository.create({
            type, quantity, price, date, user, asset, ticker
        })

        if (type === TransactionTypes.PURCHASE) {
            user.patrimony += (quantity * price)
        } else if (type === TransactionTypes.SALE) {
            user.patrimony -= (quantity * price)
        }
        
        await this.userRepository.save(user)
        await this.repository.save(transaction)
    }

    async findById(id: string): Promise<Transaction> {
        const transaction = await this.repository.findOneBy({ id })

        return transaction
    }

    async list(): Promise<Transaction[]> {
        const transactions = await this.repository.find({relations: ['user', 'user.assets']})
        return transactions
    }

    async listByAsset(ticker: string): Promise<Transaction[]> {
        const transactions = await this.repository.findBy({ asset: {ticker} })

        return transactions
    }
    
}

export { TransactionsRepository }