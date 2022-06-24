import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database";
import { AppError } from "../../../../errors/AppError";
import { User } from "../../../accounts/entities/User";
import { Asset } from "../../entities/Asset";
import { ICreateAssetDTO, IAssetsRepository } from "../IAssetsRepository";

class AssetsRepository implements IAssetsRepository {
    private repository: Repository<Asset>
    private userRepository?: Repository<User>

    constructor(){
        this.repository = AppDataSource.getRepository(Asset)
        this.userRepository = AppDataSource.getRepository(User)
    }

    async create({ ticker, sector, quantity, value, userId }: ICreateAssetDTO): Promise<void> {

        const user = await this.userRepository.findOneBy({ id: userId})
        
        if (!user) throw new AppError('User not found!', 400)

        const asset = this.repository.create({
            ticker, sector, quantity, value, user })
                
        const result = await this.repository.save(asset)
    }

    async list(): Promise<Asset[]> {
        const assets = await this.repository.find();

        console.log({assets})

        return assets
    }
    
    async findById(id: string): Promise<Asset> {
       const asset = await this.repository.findOneBy({ id })
       return asset
    }
    
}

export { AssetsRepository }