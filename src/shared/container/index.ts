import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"
import { IAssetsRepository } from "../../modules/investing/repositories/IAssetsRepository";
import { AssetsRepository } from "../../modules/investing/repositories/implementations/AssetsRepository";
import { ITransactionsRepository } from "../../modules/investing/repositories/ITransactionsRepository";
import { TransactionsRepository } from "../../modules/investing/repositories/implementations/TransactionsRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository", 
    UsersRepository
)

container.registerSingleton<ITransactionsRepository>(
    "TransactionsRepository",
    TransactionsRepository
)

container.registerSingleton<IAssetsRepository>(
    "AssetsRepository",
    AssetsRepository
)