import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database";
import { Asset } from "../../entities/Asset";
import { ICreateAssetDTO, IAssetsRepository } from "../IAssetsRepository";

class AssetsRepository implements IAssetsRepository {
    private repository: Repository<Asset>

    constructor(){
        this.repository = AppDataSource.getRepository(Asset)
    }

    async create({ ticker, sector, quantity, value, user, transactions }: ICreateAssetDTO): Promise<void> {
        const asset = this.repository.create({
            ticker, sector, quantity, value, user, transactions
        })

        await this.repository.save(asset)
    }

    async list(): Promise<Asset[]> {
        const assets = await this.repository.find();
        return assets
    }
    
    async findById(id: string): Promise<Asset> {
       const asset = await this.repository.findOneBy({ id })
       return asset
    }
    
}

export { AssetsRepository }