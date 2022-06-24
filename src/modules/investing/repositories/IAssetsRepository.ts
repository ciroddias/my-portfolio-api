import { Asset } from "../entities/Asset";
import { Transaction } from "../entities/Transaction";
import { User } from "../../accounts/entities/User";

interface ICreateAssetDTO {
    ticker: string;
    sector: string;
    quantity: number;
    value: number;
    userId: string;
}

interface IAssetsRepository {
    create({ ticker, sector, quantity, value, userId }: ICreateAssetDTO): Promise<void>;
    findById(id: string): Promise<Asset>;
    list(): Promise<Asset[]>;
}

export { ICreateAssetDTO, IAssetsRepository }