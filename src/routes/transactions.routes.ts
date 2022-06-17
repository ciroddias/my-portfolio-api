import { Router } from "express";
import { TransactionsRepository } from "../modules/investing/repositories/implementations/TransactionsRepository";
import { createTransactionsController } from "../modules/investing/useCases/createTransaction";
import { CreateTransactionUseCase } from "../modules/investing/useCases/createTransaction/CreateTransactionUseCase";

const transactionsRoutes = Router()

transactionsRoutes.post("/", (req, res) => {
    return createTransactionsController.handle(req, res)
})

transactionsRoutes.get("/", (req, res) => {
    // const transactions = transactionRepository.list()

    // return res.status(200).json(transactions)
})

export { transactionsRoutes }