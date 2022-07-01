import { Router } from "express";

import { CreateTransactionController } from "../modules/investing/useCases/createTransaction/CreateTransactionController";
import { ListTransactionsController } from "../modules/investing/useCases/listTransactions/ListTransactionsController";
import { ListTransactionsByAssetController } from "../modules/investing/useCases/ListTransactionsByAsset/ListTransactionsByAssetController";
import { FindTransactionByIdController } from '../modules/investing/useCases/findTransactionById/FindTransactionByIdController'

const transactionsRoutes = Router()

const createTransactionsController = new CreateTransactionController()
const listTransactionsController = new ListTransactionsController()
const listTransactionsByAssetController = new ListTransactionsByAssetController()
const findTransactionByIdController = new FindTransactionByIdController()

transactionsRoutes.post("/", createTransactionsController.handle)

transactionsRoutes.get("/", listTransactionsController.handle)

transactionsRoutes.get("/:id", findTransactionByIdController.handle)

transactionsRoutes.get("/ticker/:ticker", listTransactionsByAssetController.handle)


export { transactionsRoutes }