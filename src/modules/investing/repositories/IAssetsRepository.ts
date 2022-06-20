import { Asset } from "../entities/Asset";
import { Transaction } from "../entities/Transaction";
import { User } from "../entities/User";

interface ICreateAssetDTO {
    ticker: string;
    sector: string;
    quantity: number;
    value: number;
    user: User;
    transactions: Transaction[];
}

interface IAssetsRepository {
    create({ ticker, sector, quantity, value, user, transactions }: ICreateAssetDTO): void;
    findById(id: string): Promise<Asset>;
    list(): Promise<Asset[]>;
}

export { ICreateAssetDTO, IAssetsRepository }