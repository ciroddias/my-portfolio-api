import { Router } from "express";

import { CreateTransactionController } from "../modules/investing/useCases/createTransaction/CreateTransactionController";
import { ListTransactionsController } from "../modules/investing/useCases/listTransactions/ListTransactionsController";
import { ListTransactionsByAssetController } from "../modules/investing/useCases/ListTransactionsByAsset/ListTransactionsByAssetController";

const transactionsRoutes = Router()

const createTransactionsController = new CreateTransactionController()
const listTransactionsController = new ListTransactionsController()
const listTransactionsByAssetController = new ListTransactionsByAssetController()

transactionsRoutes.post("/", createTransactionsController.handle)

transactionsRoutes.get("/", listTransactionsController.handle)

transactionsRoutes.get("/:ticker", listTransactionsByAssetController.handle)

export { transactionsRoutes }