import { ICreateAssetDTO, IAssetsRepository } from '../../repositories/IAssetsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class CreateAssetUseCase {
    constructor(
        @inject('AssetsRepository')
        private assetsRepository: IAssetsRepository){}

    async execute({quantity, sector, ticker, userId, value}: ICreateAssetDTO): Promise<void>{
        await this.assetsRepository.create({quantity, sector, ticker, userId, value})
    }
}

export { CreateAssetUseCase }